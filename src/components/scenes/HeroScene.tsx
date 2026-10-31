import React from 'react';
import { Shield, ArrowRight, Terminal, Award, Lock, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSceneProps {
  onExplore: () => void;
  onContact: () => void;
  onOpenTerminal: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onExplore, onContact, onOpenTerminal }) => {
  return (
    <div className="relative w-full flex flex-col justify-between py-24 sm:py-32 md:py-36 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#180e2b] via-[#24123b] to-[#120a22] text-white select-none">
      
      {/* Background Atmospheric Art: Deep purple nebula with clouds and floating embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#0d071a] via-[#1a0c2e]/60 to-transparent" />

        {/* Floating Glowing Embers */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-amber-400 blur-[0.5px] animate-particle-1" />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-orange-400 blur-[0.5px] animate-particle-2" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-300 blur-[0.5px] animate-particle-3" />
        <div className="absolute top-1/2 right-1/6 w-2 h-2 rounded-full bg-red-400 blur-[0.5px] animate-particle-4" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-yellow-300 blur-[0.5px] animate-particle-1" />

        {/* Silhouette Horizon */}
        <svg 
          className="absolute bottom-0 inset-x-0 w-full h-44 opacity-25 object-cover" 
          viewBox="0 0 1000 200" 
          preserveAspectRatio="none"
        >
          <path d="M 0 200 L 0 160 Q 250 120 500 170 T 1000 150 L 1000 200 Z" fill="#080312" />
          <path d="M 0 200 L 0 175 Q 350 140 700 180 T 1000 165 L 1000 200 Z" fill="#04020a" />
        </svg>
      </div>

      {/* Hero Centerpiece: Generous Spacing & High-Contrast Typography */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto max-w-3xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/25 backdrop-blur-md text-xs font-mono text-purple-200 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-wide">ELLUMALLA SONU · CYBERSECURITY SPECIALIST</span>
        </div>

        {/* Oversized Cinematic Heading with Generous Line-Height & Gaps */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-display drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] leading-[1.12]">
          DEFEND BEYOND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200">
            ORDINARY
          </span>
        </h1>

        {/* Subtitle with Relaxed Leading */}
        <p className="text-sm sm:text-base md:text-lg text-purple-100/90 max-w-2xl font-light leading-relaxed drop-shadow px-2">
          Cybersecurity student focused on ethical hacking, network defense, SOC operations, and practical AI-assisted security.
        </p>

        {/* Verified Credential Markers */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-purple-200/90 pt-2">
          <span>Curtin University Dubai</span>
          <span aria-hidden="true" className="text-pink-400">·</span>
          <span>B.Tech CSE (CGPA 7.47)</span>
          <span aria-hidden="true" className="text-pink-400">·</span>
          <span>Palo Alto Alum</span>
        </div>

        {/* Action Buttons with Generous Gaps */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onExplore}
            className="group px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#e52b38] hover:bg-[#d0202d] rounded-2xl border-2 border-white/40 shadow-[0_10px_30px_rgba(229,43,56,0.6)] transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onContact}
            className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black/40 hover:bg-black/60 rounded-2xl border border-white/30 backdrop-blur-md transition-all hover:border-white/60 hover:scale-105"
          >
            CONTACT ME
          </button>

          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-2 px-5 py-3.5 text-xs font-mono text-purple-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 backdrop-blur-md transition-all hover:scale-105"
            title="Open Interactive Cyber Shell"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>&gt;_ SHELL</span>
          </button>
        </div>

      </div>

      {/* Bottom Footer Telemetry Strip */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-pink-400" />
          <span>DUBAI, UNITED ARAB EMIRATES</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>DEFENSE READINESS: ACTIVE</span>
        </div>
      </div>

    </div>
  );
};
