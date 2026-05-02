import React, { useState, useEffect } from 'react';

// MUHAMMAD LUTAFULLAH - COMPLETE CV DATA
const CV_DATA = `
[APNA CV DATA YAHAN COPY KARO - SAME]
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let response;
      
      // Detect if running locally or on Vercel
      const isLocal = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
      
      if (isLocal) {
        // LOCAL MODE: Direct API call with .env key
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
        response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
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
                content: input
              }
            ],
            temperature: 0.5,
            max_tokens: 600
          })
        });
      } else {
        // PRODUCTION MODE (Vercel): Serverless function call
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: input,
            cvData: CV_DATA 
          }),
        });
      }

      const data = await response.json();
      const botMessage = { 
        role: 'assistant', 
        content: data.choices?.[0]?.message?.content || "Sorry, I couldn't process your request."
      };
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Error connecting. Please try again later.\n\n📞 Contact Muhammad: +92 3027899450'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // REST OF YOUR JSX (same as before)
  );
};

export default Chatbot;