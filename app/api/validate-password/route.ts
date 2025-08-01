import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    // Generate AI message on wrong password
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a security assistant that gives friendly but firm responses to failed login attempts.',
          },
          {
            role: 'user',
            content: 'Wrong password attempt',
          },
        ],
        max_tokens: 30,
      })

      const aiMessage = completion.choices[0].message.content?.trim() || 'Wrong password'

      return res.status(401).json({ message: aiMessage })
    } catch (error) {
      console.error('OpenAI error:', error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}
