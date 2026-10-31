import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { Play, Compass } from 'lucide-react';

interface TealProjectsProps {
  onOpenDemo: (project: Project) => void;
}

export const TealProjects: React.FC<TealProjectsProps> = ({ onOpenDemo }) => {
  return (
    <section id="projects" className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden font-serif">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[400px] bg-[#63a5e1]/12 rounded-full blur-[160px] pointer-events-none" />

      {/* Header with UPPERCASE HEADING and Times New Roman */}
      <div className="max-w-7xl mx-auto mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#63a5e1]/40 text-xs font-bold text-[#193768] uppercase tracking-wider mb-3 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-[#429ac9]" />
          <span>CYBERSECURITY & AI LABS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#193768] tracking-tight leading-none font-serif drop-shadow-sm">
          FEATURED ARSENAL
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#314a72] font-normal max-w-xl">
          Practical intrusion detection systems, cryptographic entropy validators, and automated incident response chatbots engineered for enterprise environments.
        </p>
      </div>

      {/* Projects Grid with Studio VØR Origin Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-[28px] bg-origin-card hover:border-[#429ac9] shadow-[0_15px_40px_rgba(25,55,104,0.08)] hover:shadow-[0_20px_50px_rgba(99,165,225,0.2)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 select-none border border-[#63a5e1]/30"
          >
            {/* Top Row: Project Index & Type */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#429ac9] drop-shadow-sm">
                  {project.number}
                </span>
                <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-[#f2d2b1]/60 border border-[#e0aba2] text-[#193768]">
                  {project.type}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#193768] group-hover:text-[#429ac9] transition-colors uppercase leading-snug font-serif">
                  {project.title}
                </h3>
                <p className="text-xs text-[#4e6488] font-semibold mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#314a72] font-normal leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#e3edf8] text-[#193768] border border-[#63a5e1]/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-[10px] font-bold text-[#429ac9] self-center">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Launch Demo Button */}
            <div className="pt-6 mt-4 border-t border-[#63a5e1]/20">
              <button
                onClick={() => onOpenDemo(project)}
                className="w-full py-2.5 px-4 rounded-full btn-origin-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-lg transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>LAUNCH DEMO</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
