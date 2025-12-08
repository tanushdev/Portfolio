import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "PDF AI Workflow",
    description: "An automated workflow for processing PDF documents using AI.",
    imageUrl: "https://i.pinimg.com/1200x/34/c2/7f/34c27fa5803357f4ceb21de8ecb5adf6.jpg",
    technologies: ["Python", "FastAPI", "React", "AI"],
    liveUrl: "",
    githubUrl: "https://github.com/tanushdev"
  },
  {
    id: 2,
    title: "GreenWashing Detector API",
    description: "API to detect greenwashing in corporate reports.",
    imageUrl: "https://i.postimg.cc/XNQKhyc2/12822-greenwashing-web.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "Machine Learning"],
    liveUrl: "",
    githubUrl: "https://github.com/tanushdev/sc_api"
  },
  {
    id: 3,
    title: "AstroVedic",
    description: "Astrology platform combining Vedic traditions with modern tech.",
    imageUrl: "https://i.pinimg.com/736x/75/02/f6/7502f65512a60d804d05083be7fcc9d3.jpg",
    technologies: ["React", "Firebase", "TailwindCSS"],
    liveUrl: "",
    githubUrl: "https://github.com/tanushdev/AstroVedic"
  },
  {
    id: 4,
    title: "SmartShieldz",
    description: "IoT based smart helmet for safety monitoring.",
    imageUrl: "https://i.postimg.cc/BnMXZxby/2.jpg",
    technologies: ["IoT", "Arduino", "React Native"],
    liveUrl: "smart-shieldz-pi.vercel.app",
    githubUrl: "https://github.com/demonconfig/SmartShieldz"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-ink/10 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center lg:text-left">
          <span className="font-mono text-xs block mb-2 opacity-50">03 // ARCHIVE</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Selected Works
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">

              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative border-2 border-ink p-2 bg-paper shadow-[6px_6px_0px_0px_rgba(18,18,18,1)]
                  transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[10px_10px_0px_0px_rgba(18,18,18,1)]">
                  
                  <div className="aspect-video overflow-hidden bg-gray-200 border border-ink">
                    <img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  <div className="absolute top-3 left-3 bg-ink text-paper px-2 py-1 font-mono text-xs uppercase">
                    CASE_0{index + 1}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight underline-offset-4 group-hover:underline">
                  {project.title}
                </h3>

                <p className="text-base md:text-lg text-ink-light leading-relaxed border-l-2 border-ink/20 pl-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-ink rounded-full text-xs font-bold uppercase hover:bg-ink hover:text-paper transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 font-bold uppercase transition-colors border-2 rounded 
                      ${project.liveUrl
                        ? "bg-ink text-paper hover:bg-accent"
                        : "opacity-40 cursor-not-allowed border-ink text-ink"
                      }`}
                  >
                    Live Demo <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-ink font-bold uppercase hover:bg-ink hover:text-paper transition-colors rounded"
                  >
                    Code <Github size={18} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
