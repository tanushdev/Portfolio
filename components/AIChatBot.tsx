import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Greetings. Accessing portfolio database... How may I assist you?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !chatSession) {
      try {
        const session = createChatSession();
        if (session) {
          setChatSession(session);
        } else {
           console.warn("Gemini API Key not found.");
           setError("AI Offline.");
        }
      } catch (err) {
        setError("Init Failed.");
      }
    }
  }, [isOpen, chatSession]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: userMsg.text });
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isStreaming: true }]);

      let fullText = '';
      for await (const chunk of result) {
        const responseChunk = chunk as GenerateContentResponse;
        fullText += responseChunk.text || '';
        setMessages(prev => prev.map(msg => msg.id === botMsgId ? { ...msg, text: fullText } : msg));
      }
       setMessages(prev => prev.map(msg => msg.id === botMsgId ? { ...msg, isStreaming: false } : msg));
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Connection Error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-paper border-2 border-ink w-80 sm:w-96 h-[500px] mb-4 flex flex-col shadow-[10px_10px_0px_0px_rgba(18,18,18,1)] animate-slide-up">
          {/* Header */}
          <div className="bg-ink text-paper p-3 flex items-center justify-between border-b border-ink">
             <div className="flex items-center gap-2">
               <Sparkles size={16} />
               <span className="font-bold font-mono text-sm uppercase">AI_ASSISTANT_V1</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="hover:bg-paper hover:text-ink p-1 transition-colors">
               <X size={18} />
             </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-noise">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm font-medium border border-ink ${
                    msg.role === 'user' ? 'bg-ink text-paper shadow-[4px_4px_0px_0px_rgba(18,18,18,0.2)]' : 'bg-white text-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]'
                  }`}>
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-2 h-4 ml-1 bg-ink animate-pulse align-middle"/>}
                </div>
              </div>
            ))}
             {isLoading && !messages[messages.length - 1].isStreaming && (
               <div className="text-xs font-mono opacity-50 pl-2">PROCESSING...</div>
             )}
             {error && <div className="text-red-600 text-xs font-bold p-2 border border-red-600 bg-red-50">{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t-2 border-ink bg-paper">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="QUERY DATABASE..."
                disabled={!!error}
                className="flex-1 bg-transparent border-b border-ink/20 py-2 text-sm focus:outline-none focus:border-ink font-mono uppercase placeholder-ink/40"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-ink text-paper p-2 hover:bg-accent transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 border-2 border-ink shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-none ${
          isOpen ? 'bg-paper text-ink' : 'bg-ink text-paper'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIChatBot;