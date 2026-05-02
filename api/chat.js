export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, cvData } = req.body;

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const fullPrompt = `You are Muhammad Lutafullah's AI assistant. Answer STRICTLY based on this CV:

${cvData}

RULES:
1. For CONTACT: Phone +92 3027899450, Email muhammad.fit450@gmail.com
2. For SKILLS: List from Technical Skills
3. If info not in CV: Say "Not in my CV"

Question: ${message}`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3-8b-instruct',
        messages: [{ role: 'user', content: fullPrompt }],
        temperature: 0.5,
        max_tokens: 600
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}