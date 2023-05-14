import { NextApiRequest, NextApiResponse } from "next";
import { findUserById } from "@/lib/user";
import { verify } from 'jsonwebtoken';
import { User } from "@/types/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ status: 'Unauthorized' })

    if (req.method === 'GET') {
        try {
            const { userId } = verify(token, process.env.JWT_SECRET!) as { userId: string };
            const user1: User | null = await findUserById(userId);

            if (!user1)
                return res.status(404).json({ status: 'User not found' })

            let user2: User | null = await findUserById(user1.linkId!);

            if (!user2)
                return res.status(404).json({ status: 'Not linked' })

            delete user2.password;

            return res.status(200).json({ status: 'OK', user: user2 })
        } catch (error) {
            return res.status(500).json({ status: 'Internal server error' })
        }
    }

    return res.status(405).json({ status: 'Method not allowed' })
}

export default handler;