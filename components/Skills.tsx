
import React from 'react';
import { 
  Code2, Terminal, Database, Cloud, Cpu, 
  Box, Layers, GitBranch, Server, Globe 
} from 'lucide-react';

// Mapping logic since we don't have the specific PNG assets
// We will use Lucide icons to represent the skills
const SKILLS_DATA = [
  { name: "Python", category: "Language", icon: <Terminal /> },
  { name: "C/C++", category: "Language", icon: <Code2 /> },
  { name: "Java", category: "Language", icon: <Cpu /> },
  { name: "TypeScript", category: "Language", icon: <Code2 /> },
  { name: "React", category: "Library", icon: <Box /> },
  { name: "PyTorch", category: "Framework", icon: <Layers /> },
  { name: "Pandas", category: "Library", icon: <Database /> },
  { name: "NumPy", category: "Library", icon: <Database /> },
  { name: "FastAPI", category: "Framework", icon: <Globe /> },
  { name: "Git", category: "Tool", icon: <GitBranch /> },
  { name: "Docker", category: "Tool", icon: <Box /> },
  { name: "AWS Basics", category: "Cloud", icon: <Cloud /> },
  { name: "MongoDB", category: "Database", icon: <Server /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-ink/10 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs block mb-2 opacity-50">02 // CAPABILITIES</span>
            <h2 className="text-4xl font-bold uppercase tracking-tighter">Technical Stack</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-center w-full border-2 border-ink/10 hover:border-ink bg-white p-4 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-ink text-paper mb-2 md:mb-0 md:mr-4 group-hover:bg-accent transition-colors">
                {skill.icon}
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight text-ink">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-ink-light/70">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
