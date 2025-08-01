import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { password } = req.body;

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Replace this logic with your own password check
  const correctPassword = 'secret123';

  if (password === correctPassword) {
    res.status(200).json({ message: 'Access granted' });
  } else {
    res.status(401).json({ message: 'Wrong password' });
  }
}
