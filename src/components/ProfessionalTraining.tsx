import React, { useState } from 'react';
import { TRAINING_EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Layers, ShieldCheck, Terminal } from 'lucide-react';

export const ProfessionalTraining: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeTraining = TRAINING_EXPERIENCES[selectedIdx];

  return (
    <section id="training" className="py-20 lg:py-28 relative border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-[#0a0f19] to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
            INDUSTRY IMMERSION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            PROFESSIONAL TRAINING
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base mt-3">
            Real-world internships and enterprise security labs where theoretical knowledge was translated into practical threat detection, packet analysis, and security documentation.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Timeline Stepper */}
          <div className="lg:col-span-4 space-y-3">
            {TRAINING_EXPERIENCES.map((training, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={training.role}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Active Indicator bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-4 bottom-4 w-1 bg-emerald-400 rounded-r" />
                  )}

                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {training.period}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-sans font-medium">
                      {training.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug">
                    {training.role}
                  </h3>

                  <div className="text-xs text-slate-400 mt-1">
                    {training.organization}
                  </div>
                </button>
              );
            })}

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">Academic Complement</span>
              Pursuing Master of CyberSecurity at Curtin University Dubai; solidifying advanced cloud architectures and enterprise forensic readiness.
            </div>
          </div>

          {/* Right Column: Training Detail Deep-Dive Card */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{activeTraining.organization}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {activeTraining.role}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Duration: {activeTraining.duration} · {activeTraining.period}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>

              {/* Training Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Training Overview & Objectives
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeTraining.description}
                </p>
              </div>

              {/* Specific Responsibilities / Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Core Responsibilities & Practical Hands-on Labs
                </h4>
                <div className="space-y-2.5">
                  {activeTraining.keyResponsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used (Clean unboxed tags) */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Toolsets & Platforms Practiced
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTraining.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-emerald-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
