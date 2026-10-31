import React from 'react';
import { Shield, Eye, Lock, Cpu, Database, CheckCircle2, ArrowRight } from 'lucide-react';

interface MissionSceneProps {
  onExploreProjects: () => void;
}

export const MissionScene: React.FC<MissionSceneProps> = ({ onExploreProjects }) => {
  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#1c0c30] via-[#281342] to-[#140824] text-white">
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/15 rounded-full blur-[120px]" />
      </div>

      {/* Top Title & Subtitle with Generous Margins */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-pink-300 border border-white/20">
          <Shield className="w-3.5 h-3.5 text-pink-400" />
          <span>STRATEGIC RESILIENCE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight drop-shadow-md">
          MISSION & DEFENSE
        </h2>
        <p className="text-sm sm:text-base text-purple-200/90 font-light leading-relaxed max-w-xl mx-auto">
          Securing digital boundaries, preventing zero-day exploits, and integrating AI to build proactive, unbreachable enterprise defense systems.
        </p>
      </div>

      {/* Centerpiece 3-Column Stage with Generous Gaps */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center max-w-5xl mx-auto w-full">
        
        {/* Left Column: Mission Description */}
        <div className="md:col-span-4 text-left space-y-4">
          <h3 className="text-base sm:text-xl font-bold text-white uppercase font-display leading-tight">
            PROACTIVE BLUE TEAM & SOC OPERATIONS
          </h3>
          <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-light">
            Continuous packet inspection, MITRE ATT&CK correlation, and SIEM threat hunting with Wireshark and Splunk to eliminate attack vectors before exploitation.
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-xl inline-block">
              Zero-Trust Architecture
            </span>
          </div>
        </div>

        {/* Center: Glowing Cyber Security Vault */}
        <div className="md:col-span-4 flex justify-center py-4">
          <div className="relative group w-52 h-52 sm:w-60 sm:h-60 rounded-[32px] bg-gradient-to-b from-[#3a1d60] via-[#210e38] to-[#120622] p-1.5 border-2 border-pink-400/60 shadow-[0_0_50px_rgba(236,72,153,0.35)] flex items-center justify-center transform hover:scale-105 transition-all">
            
            <div className="absolute inset-0 rounded-[32px] bg-pink-500/20 blur-xl animate-pulse" />

            <div className="relative z-10 w-full h-full rounded-[26px] bg-[#0c0517] flex flex-col items-center justify-center p-6 text-center border border-white/10 space-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/30 border border-pink-400/40 flex items-center justify-center text-pink-300 shadow-[0_0_25px_rgba(244,114,182,0.4)]">
                <Shield className="w-9 h-9 text-pink-300 animate-pulse" />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-display">
                  SECURITY VAULT
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-1">
                  INTEGRITY 100% · 0 BREACH
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Rounded Card */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="w-56 sm:w-64 rounded-3xl p-3.5 bg-gradient-to-b from-[#e3c7ff] to-[#d6aff7] text-slate-900 shadow-xl border-2 border-white transform hover:-rotate-1 transition-all">
            <div className="relative w-full h-44 rounded-2xl bg-gradient-to-b from-[#1b0a2a] to-[#0a0414] overflow-hidden flex flex-col items-center justify-center p-4 text-center border border-purple-900/40 space-y-2">
              <Cpu className="w-10 h-10 text-pink-400" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase font-display">
                  AI + CYBERSECURITY
                </div>
                <div className="text-[11px] font-mono text-purple-200 mt-1">
                  Shannon Entropy & ML Models
                </div>
              </div>
            </div>
            <div className="pt-3 pb-1 text-center font-black uppercase tracking-tight text-xs text-[#250d3a] font-display">
              INTELLIGENT DEFENSE
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar with Generous Margin */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <span>CURTIN UNIVERSITY DUBAI</span>
        <button
          onClick={onExploreProjects}
          className="text-pink-300 hover:text-white flex items-center gap-1.5 transition-colors font-bold"
        >
          <span>VIEW PROJECTS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
