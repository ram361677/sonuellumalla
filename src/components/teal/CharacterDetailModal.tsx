import React, { useEffect } from 'react';
import { CyberCharacter } from '../../data/characterData';
import { X, Shield, Terminal, Star, Zap, Cpu, Award, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CharacterDetailModalProps {
  character: CyberCharacter | null;
  onClose: () => void;
  onSelectCharacter?: (character: CyberCharacter) => void;
}

export const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  character,
  onClose,
  onSelectCharacter
}) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  useEffect(() => {
    if (!character) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [character, onClose]);

  if (!character) return null;

  return (
    <div 
      className="fixed inset-0 z-50 p-4 sm:p-6 bg-black/90 backdrop-blur-md flex items-center justify-center overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-2xl my-auto rounded-[32px] border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors ${
          isBatman 
            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] shadow-[0_25px_60px_rgba(11,11,15,0.95)]' 
            : 'bg-[#030e16] border-cyan-500/30 text-slate-100 shadow-[0_25px_60px_rgba(3,14,22,0.95)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isBatman 
            ? 'bg-[#17171C] border-[#54202B]' 
            : 'bg-[#061824] border-cyan-500/20'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full animate-ping ${
              isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
            }`} />
            <span className={`text-xs tracking-widest uppercase font-bold font-cinematic ${
              isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
            }`}>
              CYBER DOSSIER // {character.codename}
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer shadow-sm ${
              isBatman 
                ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-[#E8DCC8] border-[#54202B]' 
                : 'bg-[#061824] hover:bg-[#0c2f47] text-slate-400 hover:text-white border-cyan-500/25'
            }`}
            aria-label="Close"
          >
            <X className={`w-5 h-5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Main Title & Role Banner */}
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
            isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
          }`}>
            <div>
              <span className={`text-[11px] tracking-widest block uppercase font-cinematic font-bold ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`}>
                {character.institutionOrOrg}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold uppercase font-cinematic tracking-widest mt-0.5 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                {character.name}
              </h2>
              <div className={`text-xs mt-1 font-light ${
                isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
              }`}>
                Role: <span className={`font-semibold uppercase font-cinematic tracking-wider ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>{character.role}</span>
              </div>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs shrink-0 shadow-sm font-cinematic ${
              isBatman 
                ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]' 
                : 'bg-[#042435] border-cyan-500/30 text-cyan-200'
            }`}>
              <span className={`uppercase font-bold text-[10px] ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`}>Rating:</span>
              <div className={`flex items-center ${isBatman ? 'text-[#A51C2D]' : 'text-amber-400'}`}>
                {[...Array(character.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Academic & Security Specialization */}
          <div className={`p-4 rounded-2xl border space-y-2.5 ${
            isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#051724] border-cyan-500/25'
          }`}>
            <h4 className={`text-xs uppercase tracking-widest font-bold font-cinematic ${
              isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
            }`}>
              ACADEMIC DOMAIN & TECHNICAL SPECIALIZATION
            </h4>
            <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
              isBatman ? 'text-[#E8DCC8]' : 'text-slate-100'
            }`}>
              {character.specialty}
            </p>

            {character.coreTopics && (
              <div className={`pt-2.5 mt-2 border-t ${
                isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/25'
              }`}>
                <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block mb-1 ${
                  isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                }`}>
                  Core Topics:
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                  isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
                }`}>
                  {character.coreTopics}
                </p>
              </div>
            )}
          </div>



          {/* Tools & Arsenal Tags */}
          <div className="space-y-2">
            <span className={`text-xs uppercase tracking-widest font-bold block font-cinematic ${
              isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
            }`}>
              DEPLOYED SECURITY ARSENAL:
            </span>
            <div className="flex flex-wrap gap-2">
              {character.tools.map((t) => (
                <span 
                  key={t} 
                  className={`px-3 py-1 rounded-full border text-xs font-mono ${
                    isBatman 
                      ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]' 
                      : 'bg-[#030e16] border-cyan-500/25 text-cyan-200'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className={`p-4 sm:p-5 border-t flex items-center justify-between ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#061824] border-cyan-500/20'
        }`}>
          <span className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
            Sonu Ellumalla · Verified Cybersecurity Candidate
          </span>
          <button
            onClick={() => {
              if (onSelectCharacter) onSelectCharacter(character);
              onClose();
            }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-cinematic shadow-md ${
              isBatman
                ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                : 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-90 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            }`}
          >
            SELECT CHARACTER
          </button>
        </div>

      </div>
    </div>
  );
};
