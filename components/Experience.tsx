import React, { useState } from "react";
import { ExternalLink, GraduationCap } from "lucide-react";

interface StudyItem {
  school: string;
  degree: string;
  duration: string;
  description: string;
  link: string;
  type: string;
}

const WORK_DATA: StudyItem[] = []; // Empty for now

const STUDIES_DATA: StudyItem[] = [
  {
    school: "Pillai College of Engineering",
    degree: "B.Tech Computer Science",
    duration: "2022 - 2026",
    description: "Specializing in AI/ML and Full Stack Development.",
    link: "https://www.pce.ac.in/",
    type: "study",
  },
  {
    school: "Mount Carmel High School",
    degree: "High School",
    duration: "2020 - 2022",
    description: "Science Stream with Computer Science.",
    link: "https://mountcarmelvasai.com/",
    type: "study",
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"work" | "study">("work");

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-ink/10 bg-paper"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs block mb-2 opacity-50">
              04 // TIMELINE
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Experience
            </h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex border-2 border-ink rounded overflow-hidden w-full md:w-auto">
            <button
              onClick={() => setActiveTab("work")}
              className={`w-full md:w-auto px-6 py-3 font-bold uppercase text-sm transition-all ${
                activeTab === "work"
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-ink/10"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("study")}
              className={`w-full md:w-auto px-6 py-3 font-bold uppercase text-sm transition-all ${
                activeTab === "study"
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-ink/10"
              }`}
            >
              Studies
            </button>
          </div>
        </div>

        {/* Work Message */}
        {activeTab === "work" && (
          <div className="py-20 text-center opacity-60 font-mono text-lg md:text-2xl">
            Currently seeking internships & opportunities
          </div>
        )}

        {/* Studies Timeline */}
        {activeTab === "study" && (
          <div className="relative border-l-2 border-ink/20 ml-4 md:ml-8 space-y-12">
            {STUDIES_DATA.map((item, index) => (
              <div key={index} className="relative pl-6 md:pl-10 group">

                {/* Dot */}
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full border-2 border-ink bg-paper group-hover:bg-accent transition-all duration-300" />

                {/* Card */}
                <a
                  href={item.link}
                  target="_blank"
                  className="block bg-white border-2 border-ink p-5 md:p-6 hover:-translate-y-1 transition-all shadow-[6px_6px_0_0_rgba(18,18,18,0.15)] hover:shadow-[10px_10px_0_0_rgba(18,18,18,1)]"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3 border-b border-ink/10 pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-ink text-paper">
                        <GraduationCap size={18} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold uppercase">
                        {item.school}
                      </h3>
                    </div>
                    <span className="font-mono text-xs bg-ink/5 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  {/* Info */}
                  <h4 className="font-semibold">{item.degree}</h4>
                  <p className="text-sm md:text-base text-ink/70 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
