export default async function handler(req, res) {
  // Yeh server-side hai - browser nahi dekh sakta
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3-8b-instruct',
        messages: [
          {
            role: 'system',
            content: `You are Muhammad Lutafullah's AI assistant. Answer based on his CV.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.5,
        max_tokens: 500
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}