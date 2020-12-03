import type { NextApiRequest, NextApiResponse } from 'next'

interface MessageNextApiRequest extends NextApiRequest {
    query: {
        echoId?: string
    }
}

export default (req: MessageNextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(req.query.echoId)
}