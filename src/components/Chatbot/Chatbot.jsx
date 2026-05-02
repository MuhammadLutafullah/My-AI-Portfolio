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
Junior AI Developer with hands-on experience in building RAG-based chatbots, embeddings, and intelligent automation systems. Strong foundation in frontend development (1+ year) with React and modern UI tools.

🛠️ TECHNICAL SKILLS:

⚡ AI Development & Data:
• RAG (Retrieval-Augmented Generation) Systems
• Embeddings & Vector Search
• FastAPI & AI APIs Integration
• Machine Learning (Scikit-learn, Pandas, NumPy)
• Document Processing & Automation

🎨 Frontend Development:
• React.js, Next.js (App Router, Hooks)
• Tailwind CSS, DaisyUI
• Responsive UI & Component-Based Architecture
• React Hook Form & API Integration

🚀 Deployment & Tools:
• Vercel, cPanel, AWS Deployment
• Git & GitHub
• API Testing & Integration

💼 PROFESSIONAL EXPERIENCE:

1️⃣ Junior AI Developer (05/2025 – Present)
   Company: Vistothemes (AI Division) - Faisalabad, Pakistan
   • Developed RAG-based chatbots for accurate, context-aware responses
   • Integrated embeddings and document search for intelligent data retrieval
   • Built APIs using FastAPI for AI model interaction
   • Designed automation workflows to improve user decision-making

2️⃣ Frontend Developer (04/2022 – 10/2023)
   Company: Vistothemes - Faisalabad, Pakistan
   • Developed responsive websites using HTML, CSS, Tailwind, and JavaScript
   • Converted UI/UX designs into pixel-perfect interfaces
   • Built admin dashboards using React & Next.js
   • Integrated APIs and handled CRUD operations
   • Followed component-based architecture for scalability

📁 PROJECT HIGHLIGHTS:

• Personal ATS System
  Tech: Python, Streamlit, OpenRouter API, PyPDF2
  AI-based resume screening system that matches resumes with job descriptions

• AI Portfolio Chatbot
  Tech: React, OpenRouter API, TailwindCSS
  Interactive portfolio chatbot that answers questions based on CV/Resume

• RAG-Based Chatbot System (In Development)
  Tech: FastAPI, LangChain, Vector Databases
  Context-aware chatbot using Retrieval-Augmented Generation

🎓 EDUCATION:
• Bachelor of Sciences in Information Technology
  Government College University Faisalabad (2019 - 2023)
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [serverError, setServerError] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setServerError(false);

    try {
      console.log("Sending request to serverless function...");
      
      // ✅ FIXED: API key directly use nahi kar rahe - serverless function call kar rahe
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          cvData: CV_DATA 
        }),
      });

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const botMessage = { 
        role: 'assistant', 
        content: data.choices?.[0]?.message?.content || "Sorry, I couldn't process your request."
      };
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Full Error:', error);
      setServerError(true);
      
      let errorMessage = 'Sorry, I am having trouble connecting. ';
      
      if (error.message.includes('fetch') || error.message.includes('network')) {
        errorMessage = '🌐 Network error. Please check your internet connection.\n\n';
      } else if (error.message.includes('429')) {
        errorMessage = '⏰ Rate limit exceeded. Please wait a minute before trying again.\n\n';
      } else {
        errorMessage = '⚠️ An error occurred. Please try again later.\n\n';
      }
      
      errorMessage += '📞 Contact Muhammad directly:\n• Phone/WhatsApp: +92 3027899450\n• Email: muhammad.fit450@gmail.com';
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessage
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
            {serverError && (
              <div style={{
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '15px',
                fontSize: '12px'
              }}>
                ⚠️ Server connection issue. Using offline mode - contact info available below.
              </div>
            )}
            
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