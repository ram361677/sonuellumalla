import React from 'react';
import { CyberCharacter } from '../../data/characterData';
import { SonuPortrait } from '../SonuPortrait';
import { Shield, Lock, Award, Star, ArrowRight, ExternalLink, Terminal, Zap, Check, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface TealCharacterSelectProps {
  activeCharacter: CyberCharacter;
  onReadMore: () => void;
  onInspectDetails: () => void;
  onExploreProjects: () => void;
}

export const TealCharacterSelect: React.FC<TealCharacterSelectProps> = ({ 
  activeCharacter,
  onReadMore, 
  onInspectDetails,
  onExploreProjects 
}) => {
  const isSonu = activeCharacter.id === 'sonu';

  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Cyan Energy Shards */}
      <div className="absolute top-1/3 left-1/3 w-2 h-8 bg-cyan-400/50 rounded-full blur-[0.5px] rotate-45 animate-spark-1 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-6 bg-cyan-300/60 rounded-full blur-[0.5px] -rotate-30 animate-spark-2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-2 h-7 bg-teal-300/50 rounded-full blur-[0.5px] rotate-12 animate-spark-3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Bold Title & Story */}
        <div className="lg:col-span-4 space-y-6 text-left">
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight leading-[0.95] drop-shadow-lg">
            CHARACTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
              SELECT
            </span>
          </h2>

          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
              ACTIVE SELECTION // {activeCharacter.role}
            </div>
            <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed max-w-md">
              {activeCharacter.backstory}
            </p>
          </div>

          {/* Current College Info Callout for Sonu */}
          {isSonu ? (
            <div className="p-4 rounded-2xl bg-[#081f2c] border border-cyan-400/40 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-cyan-300 font-bold">CURRENT UNIVERSITY STATUS:</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">ACTIVE SENTINEL</span>
              </div>
              <div className="text-white font-sans text-sm font-bold">
                Curtin University Dubai · Pursuing Master of Cybersecurity
              </div>
              <div className="text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Academic City, Dubai, UAE (Aug 2026 – Jul 2027)</span>
              </div>
              <div className="pt-1">
                <a
                  href="https://curtindubai.ac.ae/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:text-white underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>curtindubai.ac.ae</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-[#091e2b] border border-cyan-500/25 space-y-1 text-xs">
              <span className="text-cyan-400 font-mono font-bold block">SPECIALTY DOMAIN:</span>
              <span className="text-slate-200">{activeCharacter.specialty}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onInspectDetails}
              className="px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#041119] text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer"
            >
              {isSonu ? 'View College & 8 Subjects' : 'Open Card Info'}
            </button>

            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-cyan-400/60" />
              <button
                onClick={onReadMore}
                className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors cursor-pointer"
              >
                Full Resume
              </button>
            </div>
          </div>
        </div>

        {/* Center Column: Portrait with Floating Cyan Sparks & Dynamic Name Label */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
          
          {/* Cyber Shield Backdrop / Hex Frame */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[440px] rounded-3xl bg-gradient-to-b from-[#133748] via-[#0c2432] to-[#06141c] border-2 border-cyan-400 shadow-[0_20px_60px_rgba(6,182,212,0.35)] overflow-hidden flex flex-col items-center justify-end">
            
            {/* If Sonu, frame is FULLY filled edge-to-edge by his image! */}
            {isSonu ? (
              <div className="absolute inset-0 w-full h-full z-0 bg-white">
                <SonuPortrait className="w-full h-full" />
              </div>
            ) : (
              <>
                <div className="absolute top-1/4 inset-x-0 h-44 bg-cyan-500/20 blur-xl" />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-2">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-teal-900/60 border border-cyan-300/40 shadow-2xl flex items-center justify-center mb-4">
                    <Shield className="w-16 h-16 text-cyan-300 stroke-[1.5]" />
                  </div>
                  <div className="text-xs font-mono text-cyan-200/90 text-center px-4">
                    {activeCharacter.tagline}
                  </div>
                </div>
              </>
            )}

            {/* Top Floating Badge for Sonu */}
            {isSonu && (
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full bg-[#061722]/90 backdrop-blur-md border border-cyan-400 text-[10px] font-mono font-black text-cyan-200 tracking-wider shadow-lg">
                  ACTIVE SENTINEL
                </div>
              </div>
            )}

            {/* Dynamic Floating Name Label at Bottom */}
            <div className="absolute inset-x-0 bottom-5 z-20 text-center">
              <div className="inline-block px-5 py-2 rounded-full bg-[#06141d]/90 backdrop-blur-md border border-cyan-400/60 shadow-lg">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white font-display">
                  {activeCharacter.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Attribute Callouts with Thin Connecting Lines */}
        <div className="lg:col-span-4 space-y-6 text-left">
          
          {/* Top handle / social marker */}
          <div className="text-[11px] font-mono text-cyan-300/80 tracking-wider">
            {activeCharacter.institutionOrOrg}
          </div>

          {/* Callout 1: Primary Weapon / Tool */}
          <div className="relative pl-6 border-l border-cyan-400/40 space-y-1">
            <span className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              {activeCharacter.primaryWeapon.name}
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {activeCharacter.primaryWeapon.description}
            </p>
          </div>

          {/* Callout 2: Special Capability */}
          <div className="relative pl-6 border-l border-cyan-400/40 space-y-1">
            <span className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              {activeCharacter.specialAbility.name}
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {activeCharacter.specialAbility.description}
            </p>
          </div>

          {/* Callout 3: Rating & Monogram */}
          <div className="relative pl-6 border-l border-cyan-400/40 space-y-2">
            <span className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-200">
              <span>Rate :</span>
              <div className="flex items-center text-amber-300">
                {[...Array(activeCharacter.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Academic Standing: Curtin University Dubai (Aug 2026 – Jul 2027)
            </div>
          </div>

          {/* Bottom Right Monogram Emblem */}
          <div className="pt-2 flex justify-end">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <Shield className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
