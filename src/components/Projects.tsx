import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectDemoModal } from './ProjectDemoModal';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Github, Shield, Terminal, Cpu, ArrowUpRight, Lock, Activity } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  return (
    <section 
      id="projects" 
      className={`py-20 lg:py-28 relative border-t overflow-hidden transition-colors duration-500 ${
        isBatman 
          ? 'border-[#54202B] bg-[#0B0B0F] film-grain' 
          : 'border-cyan-500/20 bg-[#030e16]'
      }`}
    >
      
      {/* Atmospheric Lighting Rays */}
      {isBatman ? (
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#6F101B]/20 via-[#A51C2D]/10 to-transparent blur-[140px] pointer-events-none" />
      ) : (
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-teal-500/10 to-transparent blur-[140px] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Condensed Uppercase Typography & Letter Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs shadow-sm mb-3 border ${
              isBatman
                ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#051f2d] border-cyan-500/30 text-cyan-200'
            }`}>
              <Shield className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span className="font-cinematic uppercase tracking-widest text-xs">TACTICAL REPOSITORY</span>
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest font-cinematic uppercase drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] ${
              isBatman ? 'text-[#E8DCC8]' : 'text-white'
            }`}>
              FEATURED ARSENAL & PROJECTS
            </h2>
          </div>
          <p className={`max-w-md text-xs sm:text-sm font-light leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Offensive & defensive security tools, intrusion anomaly detectors, and cryptographic auditing frameworks designed for mission-critical reliability.
          </p>
        </div>

        {/* Project Showcase Grid - Theme Adaptive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl border transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                isBatman
                  ? 'bg-gradient-to-b from-[#17171C] via-[#17171C]/90 to-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D] hover:shadow-[0_15px_45px_rgba(165,28,45,0.25)]'
                  : 'bg-gradient-to-b from-[#051724] via-[#051724]/90 to-[#030e16] border-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_15px_45px_rgba(6,182,212,0.25)]'
              }`}
            >
              {/* Rim Lighting on Hover */}
              <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isBatman ? 'via-[#A51C2D]' : 'via-cyan-400'
              }`} />

              {/* Card Main Body */}
              <div className="p-7 sm:p-8 space-y-6">
                
                {/* Header row: Project Number & Type */}
                <div className="flex items-center justify-between">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-cinematic tracking-widest ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    PROJ // {project.number}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-mono ${
                    isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                  }`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      isBatman ? 'bg-[#A51C2D]' : 'bg-emerald-400'
                    }`} />
                    <span className={`font-cinematic uppercase tracking-wider text-[11px] ${
                      isBatman ? 'text-[#E8DCC8]' : 'text-white'
                    }`}>
                      {project.type} SPEC
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold transition-colors font-cinematic uppercase tracking-wider leading-tight ${
                    isBatman 
                      ? 'text-[#E8DCC8] group-hover:text-white' 
                      : 'text-white group-hover:text-cyan-300'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs font-mono mt-1.5 tracking-wide uppercase ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                  }`}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed font-light ${
                  isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                }`}>
                  {project.description}
                </p>

                {/* Technologies List */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                          isBatman
                            ? 'bg-[#0B0B0F]/80 border-[#54202B] text-[#E8DCC8]'
                            : 'bg-[#030e16]/80 border-cyan-500/20 text-cyan-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-2 py-1 text-[11px] font-mono ${
                        isBatman ? 'text-[#B9A1A0]/70' : 'text-slate-400'
                      }`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className={`px-7 py-4 border-t flex items-center justify-between gap-3 ${
                isBatman
                  ? 'bg-[#0B0B0F]/90 border-[#54202B]'
                  : 'bg-[#020b12]/90 border-cyan-500/20'
              }`}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`flex items-center gap-1.5 text-xs font-bold transition-colors group/btn font-cinematic uppercase tracking-wider cursor-pointer ${
                    isBatman
                      ? 'text-[#C45A50] hover:text-[#E8DCC8]'
                      : 'text-cyan-400 hover:text-cyan-200'
                  }`}
                >
                  <span>INSPECT BLUEPRINT & DEMO</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${
                    isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'
                  }`} />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                    isBatman
                      ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8]'
                      : 'bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/30 hover:border-cyan-400 text-cyan-200'
                  }`}
                >
                  <Github className={`w-3.5 h-3.5 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
