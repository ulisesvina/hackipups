import { NextApiRequest, NextApiResponse } from "next";
import { verify } from 'jsonwebtoken';
import { linkAccounts } from "@/lib/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { toLinkId } = req.body;
        if (!toLinkId)
            return res.status(400).json({ status: 'Missing fields' })

        if (!req.headers.authorization)
            return res.status(401).json({ status: 'Unauthorized' })

        const token = req.headers.authorization.split(' ')[1];
        if (!token)
            return res.status(401).json({ status: 'Unauthorized' })

        try {
            const { userId } = verify(token, process.env.JWT_SECRET!) as { userId: string };
            const linkedUser = await linkAccounts(userId, toLinkId);
            console.log("a")
            return res.status(200).json({ status: 'OK', linkedUser })
        }
        catch (error) {

            console.log(error)
            return res.status(500).json({
                status: 'Internal server error'
            });
        }

    }
    return res.status(405).json({ status: 'Method not allowed' })
}

export default handler;