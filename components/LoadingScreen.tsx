
import React, { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "नमस्ते",
  "こんにちは",
  "안녕하세요"
];

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const interval = setInterval(() => setIndex(prev => prev + 1), 250);
      return () => clearInterval(interval);
    } else {
      // Start exit sequence
      const timeout = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinish, 800); // Wait for transition to finish
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [index, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-ink text-paper transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="overflow-hidden relative">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-pulse">
          {greetings[index]}
        </h1>
      </div>
      <div className="mt-4 font-mono text-xs text-paper/50">
        INITIALIZING PORTFOLIO_V2...
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-10 w-64 h-1 bg-paper/20">
        <div 
          className="h-full bg-paper transition-all duration-200 ease-linear"
          style={{ width: `${((index + 1) / greetings.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
