import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'py-3 bg-paper/90 backdrop-blur-md border-ink' : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand */}
            <a href="#" className="flex items-center gap-2 group">
              {/* Geometric Logo */}
              <div className="w-8 h-8 bg-ink flex items-center justify-center relative overflow-hidden group-hover:rotate-90 transition-transform duration-500">
                 <div className="absolute w-full h-0.5 bg-paper rotate-45"></div>
                 <div className="absolute w-full h-0.5 bg-paper -rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tighter">TANUSHDEV</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  <span className="text-[10px] align-top text-ink-light mr-1">0{idx + 1}</span>
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-ink text-paper px-6 py-2 text-sm font-bold uppercase hover:bg-ink-light transition-colors"
              >
                Let's Talk
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 hover:bg-ink/5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-paper flex flex-col justify-center px-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-8">
           {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl font-bold uppercase tracking-tighter hover:text-ink-light transition-colors border-b border-ink/10 pb-4"
            >
              <span className="text-sm font-mono block text-ink-light mb-2">0{idx + 1} // SECTION</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-12 font-mono text-xs text-ink-light">
          TANUSHDEV // PORTFOLIO <br />
          BASED IN INDIA
        </div>
      </div>
    </>
  );
};

export default Navbar;