
import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pb-12 border-b border-ink/10 overflow-hidden bg-paper">

      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-ink/5 hidden md:block"></div>
        <div className="absolute right-8 top-0 bottom-0 w-px bg-ink/5 hidden md:block"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/5 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Grid Layout: Side-by-side on md screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start order-1">

            <p className="font-mono text-sm md:text-base mb-6 text-ink-light tracking-widest uppercase">
              // {PERSONAL_INFO.name}
            </p>

            {/* Adjusted typography to prevent overlap on medium screens */}
            {/* Adjusted typography for smoother resizing and fluid scaling */}
            <h1 className="w-fit mx-auto md:mx-0 text-5xl sm:text-6xl md:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter mb-8 text-ink relative select-none z-20">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-ink to-ink-light">
                ENGINEERING
              </span>

              <span className="flex items-center justify-between gap-2 sm:gap-4 my-3 sm:my-4 w-full">
                <span className="h-px flex-1 bg-accent"></span>
                <span className="font-mono text-lg sm:text-xl md:text-[2.1vw] text-black italic font-bold bg-accent/5 px-2 tracking-[0.15em] sm:tracking-[0.3em] whitespace-nowrap">
                  &lt;F U T U R E&gt;
                </span>
                <span className="h-px flex-1 bg-accent"></span>
              </span>
            </h1>


            <div className="text-xl font-medium text-ink-light mb-10 font-mono max-w-lg z-20 relative">
              {PERSONAL_INFO.title}
            </div>

            {/* Social Stamps - Flexible Wrapping */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full max-w-2xl relative z-20">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-4 py-2 border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-all shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <span className="flex items-center">{link.icon}</span>
                  <span className="font-bold uppercase tracking-wide text-xs sm:text-sm">{link.platform}</span>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="relative group w-full max-w-md mx-auto md:ml-auto md:mr-0 order-2 mt-8 md:mt-0">

            {/* Image Wrapper */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">

              <img
                src="https://i.postimg.cc/FH2hjLNd/3-DE6s-QP8c.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-[420px] object-cover"
              />

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="relative mt-8 md:mt-0 w-full flex flex-col items-center justify-center gap-2 opacity-50 animate-bounce cursor-pointer z-20 md:absolute md:bottom-8 md:left-0">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-ink">Scroll</span>
        <ArrowDown className="w-5 h-5 text-ink" />
      </div>
    </section>
  );
};

export default Hero;
