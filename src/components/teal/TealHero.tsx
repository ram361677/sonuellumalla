import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Shield, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface TealHeroProps {
  onDescriptionClick?: () => void;
  onNextDetailClick: () => void;
}

export const TealHero: React.FC<TealHeroProps> = ({ 
  onDescriptionClick, 
  onNextDetailClick 
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const toggleDescription = () => {
    setShowDescription(prev => !prev);
    if (onDescriptionClick) {
      onDescriptionClick();
    }
  };

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-[92vh] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden select-none transition-colors duration-500 ${
        isBatman ? 'bg-[#0B0B0F] film-grain' : 'bg-[#030e16]'
      }`}
    >
      
      {/* Background Atmosphere */}
      {isBatman ? (
        <>
          <div className="absolute inset-0 bg-[#0B0B0F] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[#6F101B] rounded-full blur-[180px] opacity-25 pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[650px] h-[500px] bg-[#310D18] rounded-full blur-[150px] opacity-40 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[400px] bg-[#A51C2D] rounded-full blur-[160px] opacity-15 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#310D18]/30 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#030e16] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[#06b6d4] rounded-full blur-[160px] opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-[#0284c7] rounded-full blur-[140px] opacity-25 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[400px] bg-[#10b981] rounded-full blur-[160px] opacity-15 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
        </>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-7 sm:space-y-8">
        
        {/* Eyebrow Pill */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest shadow-lg backdrop-blur-md border ${
          isBatman
            ? 'bg-[#17171C]/90 border-[#54202B] text-[#E8DCC8]'
            : 'bg-[#051f2d]/90 border-cyan-500/30 text-cyan-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-ping ${
            isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
          }`} />
          <span className="uppercase text-[11px] tracking-[0.2em]">
            ACTIVE SENTINEL · <span className={isBatman ? 'text-[#E8DCC8] font-bold' : 'text-white font-semibold'}>CURTIN UNIV DUBAI</span>
          </span>
        </div>

        {/* Giant Hero Headline */}
        <div className="flex flex-col items-center justify-center tracking-wider select-none">
          <h1 className={`text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold uppercase font-cinematic leading-[0.9] tracking-widest drop-shadow-[0_6px_35px_rgba(0,0,0,0.9)] ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>
            SONU
          </h1>
          <h1 className={`text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold uppercase font-cinematic leading-[0.9] tracking-widest mt-1 sm:mt-2 text-transparent bg-clip-text ${
            isBatman
              ? 'bg-gradient-to-b from-white via-[#E8DCC8] to-[#C45A50] drop-shadow-[0_0_50px_rgba(165,28,45,0.6)]'
              : 'bg-gradient-to-b from-white via-[#7fe6fa] to-[#22d3ee] drop-shadow-[0_0_50px_rgba(6,182,212,0.65)]'
          }`}>
            ELLUMALLA
          </h1>
        </div>

        {/* Specialization Title: Computer Science and Cybersecurity */}
        <div className="pt-2 sm:pt-3 pb-1 flex items-center justify-center gap-3">
          <div className={`hidden sm:block h-[1px] w-8 sm:w-16 ${
            isBatman ? 'bg-gradient-to-r from-transparent to-[#C45A50]' : 'bg-gradient-to-r from-transparent to-cyan-400'
          }`} />
          <h2 className={`text-sm sm:text-lg md:text-xl font-bold tracking-[0.22em] sm:tracking-[0.32em] uppercase font-cinematic text-center ${
            isBatman
              ? 'text-[#C45A50] drop-shadow-[0_0_15px_rgba(196,90,80,0.5)]'
              : 'text-cyan-300 drop-shadow-[0_0_18px_rgba(6,182,212,0.55)]'
          }`}>
            COMPUTER SCIENCE AND CYBERSECURITY
          </h2>
          <div className={`hidden sm:block h-[1px] w-8 sm:w-16 ${
            isBatman ? 'bg-gradient-to-l from-transparent to-[#C45A50]' : 'bg-gradient-to-l from-transparent to-cyan-400'
          }`} />
        </div>

        {/* Narrative Description */}
        <p className={`max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg font-light leading-relaxed px-4 drop-shadow ${
          isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
        }`}>
          I am a passionate Cybersecurity professional currently pursuing a Master's in Cybersecurity at Curtin University Dubai, with a background in Computer Science and Engineering. My objective is to apply my technical knowledge, programming skills, and hands-on cybersecurity experience to identify vulnerabilities, analyse security threats, and help protect digital systems. I am continuously developing my skills in ethical hacking, network security, threat detection, and security operations while exploring innovative technologies. I aim to contribute to real-world security challenges and grow as a cybersecurity professional.
        </p>

        {/* Two Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          
          {/* Button 1: Description ∨ */}
          <button
            onClick={toggleDescription}
            className={`group px-7 sm:px-9 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase font-cinematic backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 border ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_20px_rgba(165,28,45,0.25)] hover:shadow-[0_0_25px_rgba(165,28,45,0.45)]'
                : 'bg-[#061e2a]/90 hover:bg-[#0a2d3e] border-cyan-500/30 hover:border-cyan-400 text-cyan-200 hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]'
            }`}
          >
            <span>Description</span>
            {showDescription ? (
              <ChevronUp className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`} />
            ) : (
              <ChevronDown className={`w-4 h-4 transition-transform group-hover:translate-y-0.5 ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`} />
            )}
          </button>

          {/* Button 2: Next for detail → */}
          <button
            onClick={onNextDetailClick}
            className={`group px-7 sm:px-9 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase font-cinematic backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 border ${
              isBatman
                ? 'bg-gradient-to-r from-[#6F101B] via-[#A51C2D] to-[#310D18] hover:opacity-95 border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_25px_rgba(165,28,45,0.45)] hover:shadow-[0_0_35px_rgba(165,28,45,0.7)]'
                : 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:opacity-90 border-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]'
            }`}
          >
            <span>Next for detail</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
              isBatman ? 'text-[#E8DCC8]' : 'text-slate-950'
            }`} />
          </button>

          {/* Social Link: LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 border group ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_15px_rgba(165,28,45,0.25)]'
                : 'bg-[#061e2a]/90 hover:bg-[#0a2d3e] border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
            }`}
            title="LinkedIn: Sonu Ellumalla"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className={`w-4 h-4 transition-transform group-hover:scale-110 ${
              isBatman ? 'text-[#C45A50] group-hover:text-[#E8DCC8]' : 'text-cyan-400 group-hover:text-cyan-200'
            }`} />
          </a>

          {/* Social Link: GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 border group ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_15px_rgba(165,28,45,0.25)]'
                : 'bg-[#061e2a]/90 hover:bg-[#0a2d3e] border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
            }`}
            title="GitHub: Sonu Ellumalla"
            aria-label="GitHub Profile"
          >
            <Github className={`w-4 h-4 transition-transform group-hover:scale-110 ${
              isBatman ? 'text-[#C45A50] group-hover:text-[#E8DCC8]' : 'text-cyan-400 group-hover:text-cyan-200'
            }`} />
          </a>

        </div>

        {/* Expandable Overview Drawer when "Description" is clicked */}
        {showDescription && (
          <div className={`mt-4 pt-6 max-w-2xl mx-auto rounded-2xl p-6 text-left space-y-3 animate-in fade-in zoom-in-95 duration-200 backdrop-blur-lg shadow-2xl border ${
            isBatman
              ? 'bg-[#17171C]/98 border-[#54202B] text-[#E8DCC8]'
              : 'bg-[#061d2a]/95 border-cyan-500/30 text-slate-200'
          }`}>
            <div className={`flex items-center justify-between pb-3 border-b ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
              }`}>
                <ShieldCheck className={`w-4 h-4 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
                <span className="font-cinematic text-sm tracking-widest">OPERATIONAL DOSSIER // SONU ELLUMALLA</span>
              </span>
              <span className={`text-[11px] font-mono ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>
                STATUS: ACTIVE SENTINEL
              </span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              I am a passionate Cybersecurity professional currently pursuing a Master's in Cybersecurity at Curtin University Dubai, with a background in Computer Science and Engineering. My objective is to apply my technical knowledge, programming skills, and hands-on cybersecurity experience to identify vulnerabilities, analyse security threats, and help protect digital systems. I am continuously developing my skills in ethical hacking, network security, threat detection, and security operations while exploring innovative technologies. I aim to contribute to real-world security challenges and grow as a cybersecurity professional.
            </p>
          </div>
        )}

      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className={`absolute bottom-0 inset-x-0 h-28 pointer-events-none bg-gradient-to-t ${
        isBatman
          ? 'from-[#0B0B0F] via-[#0B0B0F]/50 to-transparent'
          : 'from-[#030e16] via-[#030e16]/50 to-transparent'
      }`} />

    </section>
  );
};
