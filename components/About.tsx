
import React, { useState, useEffect, useMemo } from 'react';
import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'javascript'>('python');
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeLines = useMemo(() => ({
    python: [
      `print("Hello, I'm ${PERSONAL_INFO.name}")`,
      'print("Data Analyst | Software Developer")',
      'print("WhoAmI() => Developer | Tech Explorer")',
      'print("Passions: Anime, Football, AI/ML")',
    ],
    javascript: [
      `console.log("Hello, I'm ${PERSONAL_INFO.name}");`,
      'console.log("Data Analyst | Software Developer");',
      'console.log("WhoAmI() => Developer | Tech Explorer");',
      'console.log("Passions: Anime, Football, AI/ML");',
    ],
  }), []);

  // Typing Effect Logic
  useEffect(() => {
    const currentLines = codeLines[activeTab];
    
    if (lineIndex < currentLines.length) {
      const currentLine = currentLines[lineIndex];
      
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setText(prev => {
            // If we are starting a new line, append newline from previous
            if (charIndex === 0 && lineIndex > 0) return prev + '\n' + currentLine[charIndex];
            return prev + currentLine[charIndex];
          });
          setCharIndex(prev => prev + 1);
        }, 30); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Line finished
        const timeout = setTimeout(() => {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 300); // Pause at end of line
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTyping(false);
    }
  }, [charIndex, lineIndex, activeTab, codeLines]);

  // Reset when tab changes
  const handleTabChange = (tab: 'python' | 'javascript') => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setText('');
    setLineIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  };

  return (
    <section id="about" className="border-b border-ink/10 bg-paper relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
        
        {/* Left Column: Title */}
        <div className="lg:col-span-3 p-8 md:p-12 border-r border-ink/10 flex flex-col justify-between bg-ink/5 relative z-10">
          <div>
            <span className="font-mono text-xs block mb-2 opacity-50">01 // CONTEXT</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
              About <br/> The <br/> Dev
            </h2>
          </div>
          <div className="hidden lg:block">
            <div className="w-12 h-1 bg-ink mb-2"></div>
            <div className="w-24 h-1 bg-ink"></div>
          </div>
        </div>

        {/* Middle Column: Terminal Content */}
        <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center border-r border-ink/10 relative">
           {/* Abstract Blur for Depth */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>

           <h3 className="text-2xl font-bold uppercase mb-6 relative z-10">System Kernel</h3>
           
           {/* Terminal Window - Glassmorphism */}
           <div className="w-full bg-[#1a1a1a]/85 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 relative z-10 ring-1 ring-black/5">
             
             {/* Terminal Header */}
             <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
               <div className="flex items-center gap-2 opacity-70">
                 <Terminal size={14} className="text-gray-400" />
                 <span className="font-mono text-xs text-gray-300 tracking-wide">user@tanush-portfolio:~</span>
               </div>
               <div className="flex gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
               </div>
             </div>

             {/* Tabs */}
             <div className="flex border-b border-white/5 bg-black/20">
               {['python', 'javascript'].map((lang) => (
                 <button
                   key={lang}
                   onClick={() => handleTabChange(lang as any)}
                   className={`px-6 py-2 font-mono text-xs uppercase transition-all duration-200 ${
                     activeTab === lang 
                       ? 'bg-white/5 text-green-400 border-b-2 border-green-400' 
                       : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                   }`}
                 >
                   {lang}.{lang === 'python' ? 'py' : 'js'}
                 </button>
               ))}
             </div>

             {/* Code Area */}
             <div className="p-6 font-mono text-sm md:text-lg bg-transparent min-h-[350px] leading-relaxed">
                <div className="text-gray-100 whitespace-pre-wrap drop-shadow-md">
                  <span className="text-green-500 mr-2 select-none">➜</span>
                  <span className="text-blue-400 mr-2 select-none">~</span>
                  {text}
                  {isTyping && <span className="animate-pulse inline-block w-2 h-5 bg-green-400 align-middle ml-1 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>}
                </div>
                {!isTyping && (
                  <div className="mt-4 text-gray-500 animate-fade-in">
                    <span className="text-green-500 mr-2">➜</span> 
                    <span className="text-blue-400 mr-2">~</span> 
                    <span className="animate-pulse">_</span>
                  </div>
                )}
             </div>
           </div>

           <div className="grid grid-cols-2 gap-8 mt-8 pt-8 relative z-10">
             <div>
               <span className="font-mono text-xs opacity-50 block mb-1">CURRENT STATUS</span>
               <span className="font-bold text-lg flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.8)]"></span>
                 Online
               </span>
             </div>
             <div>
               <span className="font-mono text-xs opacity-50 block mb-1">LOCATION</span>
               <span className="font-bold text-lg">{PERSONAL_INFO.location}</span>
             </div>
           </div>
        </div>

        {/* Right Column: Philosophy/Quote */}
        <div className="lg:col-span-3 p-8 md:p-12 bg-ink text-paper flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-6xl font-serif absolute top-4 left-4 opacity-20">"</span>
          <p className="text-lg italic font-light relative z-10">
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
           <p className="mt-4 font-mono text-xs opacity-60">— CORY HOUSE</p>
        </div>

      </div>
    </section>
  );
};

export default About;
