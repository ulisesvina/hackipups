import { NextApiRequest, NextApiResponse } from "next";
import { findUserByUsernameAndEmail, createUser } from "@/lib/user";
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { serialize } from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { username, email, password }: User = req.body;

        if (!username || !email || !password)
            return res.status(400).json({ status: 'Missing fields', success: false })

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;

        if (!emailRegex.test(email) || !usernameRegex.test(username) || password.length < 8) {
            return res.status(400).json({ status: 'Invalid fields', success: false })
        }

        try {
            const user = await findUserByUsernameAndEmail(username, email);
            if (user)
                return res.status(400).json({ status: 'Username or email already exists', success: false })

            const hashedPassword: string = await bcrypt.hash(password, 10);

            const newUser = await createUser({
                username,
                email,
                password: hashedPassword
            });

            const token = sign({ userId: newUser.id }, process.env.JWT_SECRET!, { expiresIn: "1y" });

            res.setHeader('Set-Cookie', serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 31536000
            }));

            return res.status(201).json({ status: 'OK', success: true })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: 'Internal server error' })
        }
    }
    return res.status(405).json({ status: 'Method not allowed' })
}

export default handler;