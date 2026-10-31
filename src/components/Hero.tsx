import React from 'react';
import { NetworkCanvas } from './NetworkCanvas';
import { HeroPortrait } from './HeroPortrait';
import { ArrowDown, Send, ShieldCheck, Terminal, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContact, onOpenTerminal }) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Network Canvas Animation in Background */}
      <NetworkCanvas density={40} className="z-0" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Subtle Status Pill / Micro-Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono tracking-wide text-slate-300">
                ACTIVE SECURITY RESEARCHER · DUBAI, UAE
              </span>
            </div>

            {/* Main Greeting and Title */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-emerald-400 font-semibold">
                HELLO, I'M SONU
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                CYBERSECURITY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  STUDENT
                </span>
              </h1>
            </div>

            {/* Short Description */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Key Trust Signals (No pill sandwiches, clean typographic row) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-300 font-medium">Curtin University Dubai</span>
              <span aria-hidden="true" className="text-emerald-500/60">/</span>
              <span>B.Tech CSE (CGPA 7.47)</span>
              <span aria-hidden="true" className="text-emerald-500/60">/</span>
              <span>Palo Alto Networks Alum</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreWork}
                className="group px-6 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onContact}
                className="px-6 py-3 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:border-slate-600 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>CONTACT ME</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-4 py-3 text-xs font-mono text-slate-300 hover:text-emerald-300 hover:bg-slate-900/70 border border-transparent hover:border-slate-800 rounded-xl transition-all flex items-center gap-1.5"
                title="Open Interactive Cyber Shell"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>OPEN TERMINAL &gt;_</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPortrait />
          </div>

        </div>
      </div>
    </section>
  );
};
