import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { password } = req.body

  const correctPassword = 'secret123'
  if (password === correctPassword) {
    return res.status(200).json({ message: 'Access granted' })
  } else {
    return res.status(401).json({ message: 'Wrong password' })
  }
}
