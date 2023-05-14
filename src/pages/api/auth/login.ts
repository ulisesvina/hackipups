import { NextApiRequest, NextApiResponse } from "next";
import { findUserByLogin } from "@/lib/user";
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';

interface User {
    login: string;
    password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { login, password }: User = req.body;
        if (!login || !password)
            return res.status(400).json({ status: 'Missing fields' })
        try {
            const user = await findUserByLogin(login);
            if (!user)
                return res.status(400).json({ status: 'User not found' })
            const match = await bcrypt.compare(password, user.password);
            if (!match)
                return res.status(400).json({ status: 'Invalid credentials' })

            const token = sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1y" });

            res.setHeader('Set-Cookie', serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 31536000
            }));

            return res.status(200).json({ status: 'OK', success: true })
        }
        catch (error) {
            return res.status(500).json({ status: 'Internal server error' })
        }
    }
    return res.status(405).json({ status: 'Method not allowed' })
}

export default handler;