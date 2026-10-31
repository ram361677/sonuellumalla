import React, { useState } from 'react';
import { TRAINING_EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export const TrainingScene: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const training = TRAINING_EXPERIENCES[selectedIdx];

  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#18082a] via-[#230d3c] to-[#120520] text-white">
      
      {/* Top Header with Generous Margins */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 sm:mb-16 border-b border-white/10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-pink-300 font-bold block">
            INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight leading-none">
            PROFESSIONAL TRAINING
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-purple-200">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>VERIFIED INTERNSHIPS</span>
        </div>
      </div>

      {/* Main Content Area with Generous Gaps */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto w-full items-start">
        
        {/* Left Column: Internship Stepper Tabs */}
        <div className="md:col-span-5 space-y-3.5">
          {TRAINING_EXPERIENCES.map((exp, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={exp.role}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d9b3f7] to-[#e8cbfb] text-slate-900 border-2 border-white shadow-xl'
                    : 'bg-white/10 text-white border-white/10 hover:bg-white/15'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className={isSelected ? 'text-purple-950 font-bold' : 'text-purple-300'}>
                    {exp.period}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-sans font-bold ${
                    isSelected ? 'bg-purple-900/20 text-purple-950' : 'bg-white/10 text-purple-200'
                  }`}>
                    {exp.badge}
                  </span>
                </div>

                <div className={`text-sm sm:text-base font-black uppercase tracking-tight font-display leading-snug ${
                  isSelected ? 'text-[#200936]' : 'text-white'
                }`}>
                  {exp.role}
                </div>

                <div className={`text-xs mt-1 truncate ${
                  isSelected ? 'text-purple-900 font-medium' : 'text-purple-200/80'
                }`}>
                  {exp.organization}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Internship Detail Card with Generous Interior Spacing */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/85 border-2 border-white/20 shadow-2xl backdrop-blur-md space-y-6">
            
            <div className="pb-4 border-b border-white/10 space-y-2">
              <span className="text-xs font-mono text-pink-400 font-semibold block">{training.organization}</span>
              <h3 className="text-lg sm:text-xl font-black text-white font-display uppercase leading-tight">
                {training.role}
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/90 font-light leading-relaxed">
                {training.description}
              </p>
            </div>

            {/* Responsibilities with Generous Gaps */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-pink-300 font-bold block">
                PRACTICAL DELIVERABLES & LABS:
              </span>
              {training.keyResponsibilities.slice(0, 4).map((r, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>

            {/* Tools Used */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
              {training.toolsUsed.map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-lg bg-purple-900/50 border border-purple-500/40 text-xs font-mono text-pink-200 font-semibold">
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar with Generous Margin */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <span>RINEX · PALO ALTO NETWORKS · CODSOFT</span>
        <span>EXPERIENCE: HANDS-ON ENTERPRISE</span>
      </div>

    </div>
  );
};
