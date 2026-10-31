import React, { useState } from 'react';
import { ShieldCheck, Terminal, Award } from 'lucide-react';

interface HeroPortraitProps {
  className?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '' }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 12,
      y: (x / rect.width) * 12
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Dynamic Tilt Container */}
      <div 
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* Background Cybernetic Abstract Rings */}
        <div className="absolute -inset-10 md:-inset-16 flex items-center justify-center pointer-events-none">
          {/* Outer glowing dotted orbit */}
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-dashed border-emerald-500/20 animate-[spin_60s_linear_infinite]" />
          
          {/* Middle segmented radar ring */}
          <div className="absolute w-72 h-72 md:w-84 md:h-84 rounded-full border border-slate-700/60 ring-1 ring-emerald-500/10" />
          
          {/* Subtle glowing emerald radial gradient */}
          <div className="absolute w-64 h-64 md:w-76 md:h-76 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-glow" />

          {/* Precision telemetry tick marks */}
          <svg className="absolute w-84 h-84 md:w-96 md:h-96 opacity-30 animate-[spin_90s_linear_infinite_reverse]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 8" className="text-emerald-400" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 12" className="text-slate-400" />
            <path d="M 100 6 L 100 14 M 100 186 L 100 194 M 6 100 L 14 100 M 186 100 L 194 100" stroke="currentColor" strokeWidth="1" className="text-emerald-400" />
          </svg>
        </div>

        {/* Main Portrait Frame with Creative B&W Cutout Treatment */}
        <div className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-92 rounded-3xl p-1 bg-gradient-to-b from-slate-700/80 via-slate-800/40 to-slate-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(16,185,129,0.15)] ring-1 ring-white/10 overflow-hidden">
          
          {/* Inner dark container */}
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-900 to-[#070b12] flex flex-col justify-end">
            
            {/* Ambient grid inside portrait container */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(52, 211, 153, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Stylized Black & White Portrait Representation */}
            {/* Crafted to match Sonu's exact profile from resume: young professional in sharp black suit, crisp shirt, dark tie, short neat hair, friendly confident smile */}
            <div className="relative w-full h-full flex items-center justify-center pt-4">
              <svg 
                viewBox="0 0 320 380" 
                className="w-full h-full object-contain filter grayscale contrast-125 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e2430" />
                    <stop offset="50%" stopColor="#12161f" />
                    <stop offset="100%" stopColor="#0a0d14" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d8d3cd" />
                    <stop offset="100%" stopColor="#b4ada5" />
                  </linearGradient>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22252a" />
                    <stop offset="100%" stopColor="#0d0f12" />
                  </linearGradient>
                  <radialGradient id="haloGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
                    <stop offset="60%" stopColor="#10b981" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient halo behind head */}
                <circle cx="160" cy="140" r="110" fill="url(#haloGlow)" />

                {/* Suit Shoulders & Torso */}
                <path d="M 60 380 L 75 290 L 105 270 L 125 250 L 160 275 L 195 250 L 215 270 L 245 290 L 260 380 Z" fill="url(#suitGrad)" />
                {/* Suit Lapels */}
                <path d="M 105 270 L 140 330 L 160 345 L 125 250 Z" fill="#181d26" stroke="#2c3340" strokeWidth="1" />
                <path d="M 215 270 L 180 330 L 160 345 L 195 250 Z" fill="#181d26" stroke="#2c3340" strokeWidth="1" />

                {/* White Dress Shirt Collar */}
                <polygon points="135,248 160,285 145,285 130,250" fill="#f1f3f5" />
                <polygon points="185,248 160,285 175,285 190,250" fill="#f8fafc" />

                {/* Black Tie */}
                <polygon points="154,272 166,272 169,370 160,380 151,370" fill="#0d1017" stroke="#1f2633" strokeWidth="0.8" />
                <polygon points="152,268 168,268 163,280 157,280" fill="#151a24" />

                {/* Neck */}
                <rect x="144" y="210" width="32" height="42" rx="4" fill="url(#skinGrad)" />
                <path d="M 144 240 Q 160 252 176 240 L 176 250 L 144 250 Z" fill="#9e978f" />

                {/* Head / Face */}
                <path d="M 118 140 C 118 85, 202 85, 202 140 C 202 195, 185 224, 160 224 C 135 224, 118 195, 118 140 Z" fill="url(#skinGrad)" />

                {/* Hair - cropped stylish short professional hair */}
                <path d="M 116 135 C 114 85, 140 70, 160 70 C 185 70, 208 85, 204 135 C 202 120, 195 105, 185 102 C 170 98, 145 100, 132 108 C 122 114, 118 126, 116 135 Z" fill="url(#hairGrad)" />

                {/* Ears */}
                <ellipse cx="118" cy="148" rx="6" ry="11" fill="url(#skinGrad)" />
                <ellipse cx="202" cy="148" rx="6" ry="11" fill="url(#skinGrad)" />

                {/* Facial Features (Confident, friendly professional smile) */}
                {/* Eyebrows */}
                <path d="M 132 128 Q 144 125 152 128" stroke="#1c1f24" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M 168 128 Q 176 125 188 128" stroke="#1c1f24" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Eyes */}
                <ellipse cx="142" cy="138" rx="5" ry="3.5" fill="#1a1c20" />
                <circle cx="143.5" cy="136.5" r="1" fill="#ffffff" />
                <ellipse cx="178" cy="138" rx="5" ry="3.5" fill="#1a1c20" />
                <circle cx="179.5" cy="136.5" r="1" fill="#ffffff" />

                {/* Nose */}
                <path d="M 160 134 L 157 158 Q 160 162 163 158" stroke="#9e978f" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Smile & Groomed Goatee / Stubble shadow */}
                <path d="M 148 178 Q 160 188 172 178" stroke="#22262e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 152 188 Q 160 194 168 188" stroke="#8c857d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                {/* Subtle trimmed beard outline */}
                <path d="M 132 158 Q 160 216 188 158" stroke="#232730" strokeWidth="1.2" strokeDasharray="1 2" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* Bottom Scrim & Name Tag */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  VERIFIED IDENTITY
                </div>
                <div className="text-sm font-bold text-white tracking-tight">
                  Ellumalla Sonu
                </div>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC ANALYST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Recruiter Credential Badges */}
        <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 z-20 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700/70 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs text-slate-200">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-white text-[11px] leading-tight">Master of CyberSecurity</div>
            <div className="text-[10px] text-slate-400 font-mono">Curtin University Dubai</div>
          </div>
        </div>

        <div className="hidden sm:flex absolute -top-3 -right-5 z-20 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700/70 shadow-xl backdrop-blur-md items-center gap-2 text-xs text-slate-200">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-mono text-[11px] text-emerald-300">Palo Alto & Rinex Alum</span>
        </div>
      </div>
    </div>
  );
};
