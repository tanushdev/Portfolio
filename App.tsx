
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper">
      {/* Loading Overlay */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Global Noise Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-noise mix-blend-multiply"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-12 border-t border-ink/10 bg-paper">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col text-left">
              <h4 className="font-bold text-lg tracking-tighter">TANUSHDEV.ME</h4>
              <p className="text-sm text-ink-light">© {new Date().getFullYear()} / ALL RIGHTS RESERVED</p>
            </div>
            <div className="text-sm font-mono">
              INDEX: 05 / END
            </div>
          </div>
        </footer>
      </div>

      <AIChatBot />
    </div>
  );
};

export default App;
