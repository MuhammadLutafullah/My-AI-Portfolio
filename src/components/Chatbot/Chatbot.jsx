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
  const [apiKeyError, setApiKeyError] = useState(false);

  // Debug and check API key on load - VITE version
  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    console.log("=== API KEY DEBUG (VITE) ===");
    console.log("API Key exists:", !!apiKey);
    console.log("API Key first 10 chars:", apiKey?.substring(0, 15));
    
    if (!apiKey) {
      console.error("❌ API KEY NOT FOUND! Check .env file with VITE_ prefix");
      setApiKeyError(true);
    } else if (!apiKey.startsWith('sk-or-v1')) {
      console.error("❌ API KEY format looks wrong!");
      setApiKeyError(true);
    } else {
      console.log("✅ API Key looks good!");
      setApiKeyError(false);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 🔴 FIXED: Vite mein import.meta.env use karo 🔴
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    // Check if API key exists before sending
    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '❌ API key is not configured. Please check the .env file and restart the app.\n\n📞 Meanwhile, you can contact Muhammad directly at:\n• Phone/WhatsApp: +92 3027899450\n• Email: muhammad.fit450@gmail.com' 
      }]);
      return;
    }

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log("Sending request with API key:", apiKey.substring(0, 15) + "...");
      
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Muhammad Lutafullah Portfolio'
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3-8b-instruct',
          messages: [
            {
              role: 'system',
              content: `You are Muhammad Lutafullah's official AI Assistant. Answer questions STRICTLY based on his CV/Resume provided below.

${CV_DATA}

📋 IMPORTANT RULES:
1. ONLY answer based on the CV content above - DO NOT make up information
2. For CONTACT info: Provide phone (+92 3027899450), email (muhammad.fit450@gmail.com), portfolio and GitHub links
3. For SKILLS: List from the Technical Skills section (AI, Frontend, Deployment)
4. For EXPERIENCE: Share from Professional Experience section
5. For PROJECTS: Mention the ATS System, Portfolio Chatbot, and RAG-based chatbot
6. If information is NOT in the CV, say: "This information is not available in Muhammad's resume."
7. Be friendly, professional, and enthusiastic
8. Keep responses clear and concise`
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

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your OpenRouter API key.");
        } else if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again in a minute.");
        } else {
          throw new Error(`API Error ${response.status}: ${errorText.substring(0, 100)}`);
        }
      }

      const data = await response.json();
      const botMessage = { 
        role: 'assistant', 
        content: data.choices[0].message.content 
      };
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Full Error:', error);
      
      let errorMessage = 'Sorry, I am having trouble connecting. ';
      
      if (error.message.includes('API key') || error.message.includes('401')) {
        errorMessage = '🔑 Invalid or missing API key. Please check your OpenRouter API key in the .env file and restart the app.\n\n';
      } else if (error.message.includes('429')) {
        errorMessage = '⏰ Rate limit exceeded. Please wait a minute before trying again.\n\n';
      } else if (error.message.includes('fetch')) {
        errorMessage = '🌐 Network error. Please check your internet connection.\n\n';
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
            {apiKeyError && (
              <div style={{
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '15px',
                fontSize: '12px'
              }}>
                ⚠️ API key not configured! Check .env file with VITE_ prefix
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