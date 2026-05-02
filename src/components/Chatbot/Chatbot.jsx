import React, { useState, useEffect } from 'react';

// MUHAMMAD LUTAFULLAH - COMPLETE CV DATA
const CV_DATA = `
═══════════════════════════════════════════════════════
MUHAMMAD LUTAFULLAH - JUNIOR AI DEVELOPER
═══════════════════════════════════════════════════════

📞 CONTACT INFORMATION:
- Phone/WhatsApp: +92 3027899450
- Email: muhammad.fit450@gmail.com
- Portfolio: https://muhammadlutafullah.vercel.app/
- GitHub: https://github.com/MuhammadLutafullah
- Location: Faisalabad, Pakistan

🎯 PROFESSIONAL SUMMARY:
Junior AI Developer with hands-on experience in building RAG-based chatbots, embeddings, and intelligent automation systems.

🛠️ TECHNICAL SKILLS:
• RAG (Retrieval-Augmented Generation) Systems
• FastAPI & AI APIs Integration
• React.js, Next.js, Tailwind CSS
• Vercel, Git & GitHub

💼 PROFESSIONAL EXPERIENCE:
Junior AI Developer at Vistothemes (05/2025 – Present)
Frontend Developer at Technupur (2023 – 2024)

📁 PROJECTS:
• Personal ATS System - Python, Streamlit
• AI Portfolio Chatbot - React, OpenRouter
• RAG-Based Chatbot System - FastAPI, LangChain

🎓 EDUCATION:
• Bachelor of Sciences in Information Technology
  Government College University Faisalabad (2019 - 2023)
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
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '380px',
          height: '550px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          border: '1px solid #e5e7eb'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '15px',
            borderRadius: '16px 16px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: 0, fontWeight: 'bold' }}>Muhammad Lutafullah</h3>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>Junior AI Developer</p>
            </div>
            <button onClick={() => setIsOpen(false)} style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer'
            }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '15px',
            backgroundColor: '#f9fafb'
          }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '50px' }}>
                <div style={{ fontSize: '48px' }}>👋</div>
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Hi! I'm Muhammad's AI Assistant</p>
                <div style={{ fontSize: '12px', marginTop: '20px', color: '#9ca3af' }}>
                  Ask me about:<br/>
                  💻 Skills & Technologies<br/>
                  🚀 Work Experience<br/>
                  📁 Projects<br/>
                  📞 Contact Info
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px'
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px',
                  borderRadius: '12px',
                  backgroundColor: msg.role === 'user' ? '#3b82f6' : 'white',
                  color: msg.role === 'user' ? 'white' : '#1f2937',
                  border: msg.role === 'user' ? 'none' : '1px solid #e5e7eb',
                  wordWrap: 'break-word',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '12px',
                display: 'inline-block',
                border: '1px solid #e5e7eb'
              }}>
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: 'white',
            borderRadius: '0 0 16px 16px',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about skills, experience, projects..."
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                opacity: isLoading ? 0.5 : 1,
                fontWeight: 'bold'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;