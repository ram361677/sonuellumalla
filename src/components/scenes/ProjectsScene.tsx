import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ChevronLeft, ChevronRight, Play, ExternalLink, Github, Shield, Terminal, Cpu } from 'lucide-react';

interface ProjectsSceneProps {
  onOpenDemo: (project: Project) => void;
}

export const ProjectsScene: React.FC<ProjectsSceneProps> = ({ onOpenDemo }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const project = PROJECTS[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#1c0c32] via-[#25103e] to-[#140624] text-white">
      
      {/* Top Header with Generous Margins */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 sm:mb-16 border-b border-white/10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-pink-300 font-bold block">
            PROJECT SHOWCASE ({currentIdx + 1}/{PROJECTS.length})
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight leading-none">
            CYBERSECURITY & AI LABS
          </h2>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Project Card Carousel with Generous Padding */}
      <div className="relative z-10 my-auto w-full flex items-center gap-6 overflow-hidden py-4">
        
        {/* Active Project Card (Screenshot 6 Style with Generous Gaps) */}
        <div className="w-full rounded-[32px] bg-white text-slate-900 p-6 sm:p-10 shadow-2xl border-2 border-white flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
          
          {/* Left Media Graphic */}
          <div className="w-full md:w-1/2 rounded-2xl bg-gradient-to-br from-[#120822] via-[#1f0d36] to-[#0c0418] p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px] sm:min-h-[260px] border border-slate-800">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-pink-500/20 blur-2xl" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-lg border border-pink-400/20">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                LIVE DEMO READY
              </span>
            </div>

            {/* Center Visual Icon */}
            <div className="relative z-10 my-auto flex items-center justify-center py-4">
              <button
                onClick={() => onOpenDemo(project)}
                className="group/play w-16 h-16 rounded-full bg-[#e52b38] hover:bg-[#d0202d] text-white flex items-center justify-center shadow-[0_0_30px_rgba(229,43,56,0.6)] transform hover:scale-110 active:scale-95 transition-all"
                title="Launch Interactive Lab Simulator"
              >
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </button>
            </div>

            {/* Bottom Tech Tags */}
            <div className="relative z-10 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/10 text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Information & Red Action Button */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#230c3a] font-display tracking-tight leading-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-purple-700 font-semibold mt-1">
                {project.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {project.description}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              {/* Red Button (Screenshot 6 "LEARN MORE") */}
              <button
                onClick={() => onOpenDemo(project)}
                className="px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#e52b38] hover:bg-[#d0202d] rounded-xl border border-white/40 shadow-[0_6px_20px_rgba(229,43,56,0.5)] transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>LAUNCH DEMO</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-xs font-bold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Repo</span>
              </a>
            </div>
          </div>

        </div>

        {/* Peeking Next Project Card */}
        <div 
          onClick={handleNext}
          className="hidden xl:flex shrink-0 w-44 h-56 rounded-3xl bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 border border-white/30 flex-col justify-between cursor-pointer transform hover:scale-105 transition-all"
        >
          <span className="text-xs font-mono text-purple-200 font-semibold">NEXT PROJECT &gt;</span>
          <div className="text-sm font-black uppercase text-white font-display line-clamp-2">
            {PROJECTS[(currentIdx + 1) % PROJECTS.length].title}
          </div>
        </div>

      </div>

      {/* Bottom Dots Indicator with Generous Top Margin */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <div className="flex items-center gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-2 rounded-full transition-all ${
                currentIdx === i ? 'w-8 bg-[#e52b38]' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <span>CLICK LAUNCH DEMO FOR LIVE LAB SIMULATION</span>
      </div>

    </div>
  );
};
