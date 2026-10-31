import React from 'react';
import { Shield, Lock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface AboutSceneProps {
  onContact: () => void;
  onExploreSkills: () => void;
}

export const AboutScene: React.FC<AboutSceneProps> = ({ onContact, onExploreSkills }) => {
  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-br from-[#231038] via-[#1c0c30] to-[#120822] text-white">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Title, Paragraph, and Red Action Button (Matching Screenshot 3) */}
        <div className="md:col-span-7 space-y-6 sm:space-y-8 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-pink-300 border border-white/20">
            <Shield className="w-3.5 h-3.5 text-pink-400" />
            <span>WHO AM I? · IDENTITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight leading-none drop-shadow-md">
            ABOUT
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-purple-100/90 font-light leading-relaxed max-w-xl">
            <p>
              I'm a cybersecurity student and aspiring cybersecurity professional with a strong interest in ethical hacking, network security, SOC operations, vulnerability assessment, and AI-powered security solutions.
            </p>
            <p className="text-purple-200/80">
              I enjoy learning through practical projects and security labs, and I'm continuously developing my technical skills to prepare for a career in cybersecurity.
            </p>
          </div>

          {/* Quick Metrics with Generous Gap */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-mono text-purple-300 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Curtin Univ Dubai</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>B.Tech CSE 7.47</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Palo Alto Alum</span>
            </div>
          </div>

          {/* Buttons with Generous Padding & Gaps */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onContact}
              className="px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#e52b38] hover:bg-[#d0202d] rounded-2xl border-2 border-white/40 shadow-[0_8px_25px_rgba(229,43,56,0.6)] transform hover:scale-105 active:scale-95 transition-all"
            >
              CONTACT
            </button>

            <button
              onClick={onExploreSkills}
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>VIEW SKILLS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Column: Stylized Rounded Card with Light Background & Cutout (Matching Screenshot 3 Octopus Bottle Card!) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-64 sm:w-72 md:w-80 rounded-[32px] p-4 bg-gradient-to-b from-[#e3c7ff] to-[#d6aff7] text-slate-900 shadow-2xl border-2 border-white transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            
            {/* Inner Dark Graphic Stage */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#1b0a2a] to-[#0a0414] overflow-hidden flex flex-col items-center justify-center p-4 border border-purple-900/40">
              
              {/* Concentric telemetry rings */}
              <div className="absolute w-52 h-52 rounded-full border border-pink-400/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-40 h-40 rounded-full border border-dashed border-purple-400/30" />
              <div className="absolute w-32 h-32 rounded-full bg-pink-500/15 blur-xl" />

              {/* B&W Portrait / Shield Sentinel */}
              <div className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-1 border border-white/30 shadow-2xl overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full filter grayscale contrast-125">
                  <circle cx="50" cy="50" r="48" fill="#151b26" />
                  <circle cx="50" cy="38" r="18" fill="#d4d4d8" />
                  <path d="M 20 85 C 20 62, 35 58, 50 58 C 65 58, 80 62, 80 85 Z" fill="#1e293b" />
                  <polygon points="46,58 54,58 52,82 48,82" fill="#0f172a" />
                  <polygon points="43,58 50,68 47,68" fill="#f8fafc" />
                  <polygon points="57,58 50,68 53,68" fill="#f8fafc" />
                </svg>
              </div>

              {/* Badge */}
              <div className="relative z-10 mt-4 px-3.5 py-1.5 rounded-full bg-black/60 border border-emerald-400/40 text-xs font-mono text-emerald-300 flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SOC VERIFIED</span>
              </div>
            </div>

            {/* Bottom Card Title (Matching "WE BREATHE LIFE INTO PIXELS" from Screenshot 3) */}
            <div className="pt-4 pb-2 text-center font-black uppercase tracking-tight text-xs sm:text-sm text-[#250d3a] font-display">
              WE DEFEND DATA & SECURE PIXELS
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
