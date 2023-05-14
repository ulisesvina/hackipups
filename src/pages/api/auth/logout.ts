import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Set-Cookie', serialize('token', '', {
        maxAge: -1,
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    }))
    res.status(200).json({ message: 'Logged out successfully.' })
}

export default logout