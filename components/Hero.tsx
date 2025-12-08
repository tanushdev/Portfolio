
import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 border-b border-ink/10 overflow-hidden bg-paper">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-ink/5 hidden md:block"></div>
        <div className="absolute right-8 top-0 bottom-0 w-px bg-ink/5 hidden md:block"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/5 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Grid Layout: Side-by-side on md screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start order-1">
            
            <p className="font-mono text-sm md:text-base mb-6 text-ink-light tracking-widest uppercase">
              // {PERSONAL_INFO.name}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-ink relative select-none">
  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-ink to-ink-light">
    ENGINEERING
  </span>

  <span className="flex items-center justify-center md:justify-start gap-4 my-4">
    <span className="h-px w-12 bg-accent hidden md:block"></span>
    <span className="font-mono text-2xl md:text-4xl text-black italic font-bold bg-accent/5 px-2 tracking-[0.4em]">
      &lt;F U T U R E&gt;
    </span>
    <span className="h-px w-12 bg-accent hidden md:block"></span>
  </span>
</h1>


            <div className="text-xl font-medium text-ink-light mb-10 font-mono max-w-lg">
              {PERSONAL_INFO.title}
            </div>

            {/* Social Stamps */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-all shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  {link.icon}
                  <span className="font-bold uppercase tracking-wide text-xs md:text-sm">{link.platform}</span>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
         <span className="font-mono text-[10px] uppercase">Scroll for Brief</span>
         <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
