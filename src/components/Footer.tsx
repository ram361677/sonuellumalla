import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 text-xs transition-colors duration-500 w-full ${
      isBatman
        ? 'border-[#54202B] bg-[#0B0B0F] text-[#B9A1A0]'
        : 'border-cyan-500/20 bg-[#020b12] text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/15'
        }`}>
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
              isBatman
                ? 'bg-[#310D18] border-[#A51C2D]/50 text-[#E8DCC8]'
                : 'bg-[#042435] border-cyan-500/30 text-cyan-300'
            }`}>
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className={`text-sm font-bold tracking-widest font-cinematic uppercase ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                {PERSONAL_INFO.name}
              </div>
              <div className={`text-[11px] font-mono ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`}>
                Cybersecurity & Systems Portfolio
              </div>
            </div>
          </div>

          {/* Nav quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-cinematic tracking-wider uppercase text-xs">
            <a href="#home" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Home</a>
            <a href="#character-deck" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Character</a>
            <a href="#skills" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Skills</a>
            <a href="#projects" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Projects</a>
            <a href="#training" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Training</a>
            <a href="#certifications" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Certifications</a>
            <a href="#contact" className={`transition-colors ${isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'}`}>Contact</a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors border ${
                isBatman
                  ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                  : 'bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/25 text-cyan-200'
              }`}
              aria-label="GitHub"
            >
              <Github className={`w-4 h-4 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors border ${
                isBatman
                  ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                  : 'bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/25 text-cyan-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className={`w-4 h-4 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
            </a>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors font-cinematic uppercase tracking-widest text-xs cursor-pointer border ${
                isBatman
                  ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                  : 'bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/25 text-white'
              }`}
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-[11px] ${
          isBatman ? 'text-[#B9A1A0]/70' : 'text-slate-400/80'
        }`}>
          <div>
            © 2026 Sonu Ellumalla. All rights reserved.
          </div>
          <div>
            Cyber Sentinel Tactical Theme · Designed for Enterprise Recruitment
          </div>
        </div>

      </div>
    </footer>
  );
};
