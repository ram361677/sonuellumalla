import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CYBER_CHARACTERS, CyberCharacter, getCharacterTheme } from '../../data/characterData';
import { CharacterDetailModal } from './CharacterDetailModal';
import { SonuActiveSentinelModal } from './SonuActiveSentinelModal';
import { SonuUndergradModal } from './SonuUndergradModal';
import { SonuIntermediateModal } from './SonuIntermediateModal';
import { SonuTenthSchoolModal } from './SonuTenthSchoolModal';
import { 
  ArrowRight, 
  GraduationCap, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Award
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TealCharacterDeckProps {
  activeCharacterId: string;
  onCharacterChange: (character: CyberCharacter) => void;
}

export const TealCharacterDeck: React.FC<TealCharacterDeckProps> = ({
  activeCharacterId,
  onCharacterChange
}) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';
  
  // Container ref for sticky scroll track (tracks scroll position through cards)
  const containerRef = useRef<HTMLDivElement>(null);

  // Active card index (0 to CYBER_CHARACTERS.length - 1)
  const [activeCardIndex, setActiveCardIndex] = useState(() => {
    const found = CYBER_CHARACTERS.findIndex(c => c.id === activeCharacterId);
    return found !== -1 ? found : 0;
  });

  const activeIndexRef = useRef(activeCardIndex);
  activeIndexRef.current = activeCardIndex;

  // Direction of transition (1 for next, -1 for prev)
  const [direction, setDirection] = useState(1);

  const isThrottledRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  // Modals for graduation & education dossiers
  const [inspectCharacter, setInspectCharacter] = useState<CyberCharacter | null>(null);
  const [isSonuModalOpen, setIsSonuModalOpen] = useState(false);
  const [isUndergradModalOpen, setIsUndergradModalOpen] = useState(false);
  const [isIntermediateModalOpen, setIsIntermediateModalOpen] = useState(false);
  const [isTenthModalOpen, setIsTenthModalOpen] = useState(false);

  const activeChar = CYBER_CHARACTERS[activeCardIndex] || CYBER_CHARACTERS[0];
  const activeTheme = getCharacterTheme(activeChar, isBatman);

  // Direct card change
  const goToCard = (index: number) => {
    if (index < 0 || index >= CYBER_CHARACTERS.length || index === activeCardIndex) return;
    setDirection(index > activeCardIndex ? 1 : -1);
    setActiveCardIndex(index);
    onCharacterChange(CYBER_CHARACTERS[index]);
  };

  const nextCard = () => {
    if (activeCardIndex < CYBER_CHARACTERS.length - 1) {
      goToCard(activeCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (activeCardIndex > 0) {
      goToCard(activeCardIndex - 1);
    }
  };

  // Scroll in-place logic: wheel transitions through 4 cards smoothly
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isHoveringCardRef = useRef(false);

  useEffect(() => {
    const cardElement = cardContainerRef.current;
    if (!cardElement) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 18) return;

      if (e.deltaY > 0) {
        if (activeIndexRef.current < CYBER_CHARACTERS.length - 1) {
          e.preventDefault();
          if (isThrottledRef.current) return;
          isThrottledRef.current = true;

          const nextIdx = activeIndexRef.current + 1;
          setDirection(1);
          setActiveCardIndex(nextIdx);
          onCharacterChange(CYBER_CHARACTERS[nextIdx]);

          setTimeout(() => {
            isThrottledRef.current = false;
          }, 450);
        } else {
          // At final card: regular scroll moves to skills section
        }
      } else if (e.deltaY < 0) {
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          if (isThrottledRef.current) return;
          isThrottledRef.current = true;

          const prevIdx = activeIndexRef.current - 1;
          setDirection(-1);
          setActiveCardIndex(prevIdx);
          onCharacterChange(CYBER_CHARACTERS[prevIdx]);

          setTimeout(() => {
            isThrottledRef.current = false;
          }, 450);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      if (Math.abs(deltaY) < 25) return;

      if (deltaY > 0) {
        if (activeIndexRef.current < CYBER_CHARACTERS.length - 1) {
          e.preventDefault();
          if (isThrottledRef.current) return;
          isThrottledRef.current = true;

          const nextIdx = activeIndexRef.current + 1;
          setDirection(1);
          setActiveCardIndex(nextIdx);
          onCharacterChange(CYBER_CHARACTERS[nextIdx]);
          touchStartY.current = currentY;

          setTimeout(() => {
            isThrottledRef.current = false;
          }, 350);
        }
      } else if (deltaY < 0 && activeIndexRef.current > 0) {
        e.preventDefault();
        if (isThrottledRef.current) return;
        isThrottledRef.current = true;

        const prevIdx = activeIndexRef.current - 1;
        setDirection(-1);
        setActiveCardIndex(prevIdx);
        onCharacterChange(CYBER_CHARACTERS[prevIdx]);
        touchStartY.current = currentY;

        setTimeout(() => {
          isThrottledRef.current = false;
        }, 350);
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    cardElement.addEventListener('wheel', handleWheel, { passive: false });
    cardElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    cardElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    cardElement.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      cardElement.removeEventListener('wheel', handleWheel);
      cardElement.removeEventListener('touchstart', handleTouchStart);
      cardElement.removeEventListener('touchmove', handleTouchMove);
      cardElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onCharacterChange]);

  const handleOpenModal = (charId: string) => {
    if (charId === 'sonu') setIsSonuModalOpen(true);
    else if (charId === 'shiro') setIsUndergradModalOpen(true);
    else if (charId === 'kaede') setIsIntermediateModalOpen(true);
    else if (charId === 'tenth' || charId === 'asuka') setIsTenthModalOpen(true);
  };

  return (
    <section 
      id="character-deck"
      ref={containerRef}
      className={`relative w-full pt-6 pb-2 sm:pt-8 sm:pb-4 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden mb-0 transition-colors duration-500 ${
        isBatman ? 'bg-[#0B0B0F] film-grain' : 'bg-[#030e16]'
      }`}
    >
      
      {/* Dynamic Ambient Background Glow adapting softly to active card color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700 opacity-25"
        style={{ backgroundColor: activeTheme.primaryHex }}
      />

      {/* Section Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2 px-4 z-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono shadow-sm border ${
          isBatman
            ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
            : 'bg-[#042435]/90 border-cyan-500/30 text-cyan-300'
        }`}>
          <Layers className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
          <span className="tracking-widest uppercase font-cinematic text-xs">CINEMATIC DOSSIER · CARD {activeCardIndex + 1} OF {CYBER_CHARACTERS.length}</span>
        </div>

        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center font-cinematic tracking-widest uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] ${
          isBatman ? 'text-[#E8DCC8]' : 'text-white'
        }`}>
          Character to play
        </h2>

        <p className={`text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed ${
          isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
        }`}>
          Scroll in this place to transition smoothly through all {CYBER_CHARACTERS.length} cards. Once finished, scrolling immediately continues to Technical Skills with zero gap.
        </p>
      </div>

      {/* 3 Stage Quick-Jump Pills */}
      <div className={`z-30 mb-5 flex items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl backdrop-blur-md shadow-xl border ${
        isBatman
          ? 'bg-[#17171C]/95 border-[#54202B]'
          : 'bg-[#05141f]/95 border-cyan-500/30'
      }`}>
        {CYBER_CHARACTERS.map((char, idx) => {
          const isSelected = idx === activeCardIndex;
          const charTheme = getCharacterTheme(char, isBatman);

          return (
            <button
              key={char.id}
              onClick={() => goToCard(idx)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-cinematic uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? (isBatman 
                      ? 'scale-105 shadow-md bg-[#310D18]/90 border-[#A51C2D] text-[#E8DCC8]' 
                      : 'scale-105 shadow-md bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_16px_rgba(6,182,212,0.4)]')
                  : (isBatman 
                      ? 'bg-[#0B0B0F]/60 text-[#B9A1A0] hover:text-[#E8DCC8] border-transparent' 
                      : 'bg-[#030e16]/60 text-slate-400 hover:text-white border-transparent')
              }`}
            >
              <span 
                className={`w-2 h-2 rounded-full transition-transform ${
                  isSelected 
                    ? 'scale-125 animate-pulse' 
                    : 'opacity-50'
                }`}
                style={{ backgroundColor: charTheme.primaryHex }}
              />
              <span className="text-xs font-bold tracking-wider">
                Card 0{idx + 1} // {char.id === 'sonu' ? "Master's" : char.id === 'shiro' ? 'Undergrad' : 'Intermediate'}
              </span>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          THE IN-PLACE CARD CONTAINER WITH FRAMER MOTION TRANSITIONS
         ======================================================== */}
      <div 
        ref={cardContainerRef}
        onMouseEnter={() => { isHoveringCardRef.current = true; }}
        onMouseLeave={() => { isHoveringCardRef.current = false; }}
        className="relative w-full max-w-6xl mx-auto min-h-[520px] sm:min-h-[550px] lg:h-[580px]"
      >
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeChar.id}
            initial={{ 
              opacity: 0, 
              y: direction > 0 ? 35 : -35, 
              scale: 0.97 
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              y: direction > 0 ? -30 : 30, 
              scale: 0.97 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 24, 
              mass: 0.85 
            }}
            className="absolute inset-0 rounded-[30px] sm:rounded-[36px] p-5 sm:p-7 lg:p-8 border overflow-hidden shadow-2xl transition-all"
            style={{
              background: isBatman 
                ? `linear-gradient(145deg, #17171C 0%, #240A12 50%, #0B0B0F 100%)`
                : `linear-gradient(145deg, #051e2f 0%, #08293d 50%, #03131e 100%)`,
              borderColor: isBatman ? '#54202B' : activeTheme.primaryHex,
              boxShadow: isBatman
                ? `0 0 50px rgba(165,28,45,0.25), 0 25px 60px rgba(11,11,15,0.95)`
                : `0 0 50px ${activeTheme.glowRgba}, 0 25px 60px rgba(3,14,22,0.95)`
            }}
          >
            {/* Top Colored Laser Beam */}
            <div 
              className="absolute top-0 inset-x-0 h-1 shadow-md transition-all duration-500"
              style={{ 
                backgroundColor: activeTheme.primaryHex,
                boxShadow: `0 0 20px 4px ${activeTheme.primaryHex}`
              }}
            />

            {/* Ambient Radial Accent in Corner */}
            <div 
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-25"
              style={{ backgroundColor: activeTheme.secondaryHex }}
            />

            {/* Top Status & Pill Bar */}
            <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/25'
            }`}>
              <div className="flex items-center gap-2.5">
                <span 
                  className={`px-3 py-0.5 rounded-full text-xs font-cinematic uppercase tracking-widest border shadow-sm flex items-center gap-1.5 ${
                    isBatman
                      ? 'bg-[#310D18]/90 border-[#A51C2D]/50 text-[#E8DCC8]'
                      : 'bg-[#042435]/90 border-cyan-500/50 text-cyan-200'
                  }`}
                >
                  <span 
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: activeTheme.primaryHex }}
                  />
                  <span>CARD 0{activeCardIndex + 1} OF 0{CYBER_CHARACTERS.length} · {activeTheme.name.toUpperCase()}</span>
                </span>

                <span className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                  {activeChar.codename}
                </span>
              </div>

              <div 
                className={`px-3 py-0.5 rounded-full text-xs font-cinematic uppercase tracking-wider font-semibold border ${
                  isBatman
                    ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#042435] border-cyan-500/30 text-cyan-200'
                }`}
              >
                {activeChar.id === 'sonu' ? "MASTER OF CYBERSECURITY (2026 – PRESENT)" :
                 activeChar.id === 'shiro' ? "BACHELOR'S IN CSE · CGPA: 7.47" :
                 activeChar.id === 'kaede' ? "SENIOR SECONDARY · SCORED: 68%" :
                 "SECONDARY EDUCATION · SCORED: 92%"}
              </div>
            </div>

            {/* ========================================================
                CARD DETAILS ONLY (PHOTOS REMOVED AS REQUESTED)
               ======================================================== */}
            <div className="h-[calc(100%-48px)] flex flex-col justify-between space-y-3 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar text-left">
              
              {/* Header: Codename, Degree, Name & Institution */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span 
                    className={`text-[10px] font-cinematic uppercase tracking-widest px-2.5 py-0.5 rounded border ${
                      isBatman
                        ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                        : 'bg-[#042435] border-cyan-500/30 text-cyan-200'
                    }`}
                  >
                    {activeChar.codename}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-cinematic tracking-wider uppercase ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    {activeChar.role}
                  </h3>
                  <div className={`text-xs sm:text-sm font-cinematic font-bold tracking-widest uppercase ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    {activeChar.name}
                  </div>
                </div>

                <div 
                  className="text-xs sm:text-sm font-mono font-semibold"
                  style={{ color: activeTheme.primaryHex }}
                >
                  {activeChar.institutionOrOrg}
                </div>
              </div>

              {/* Academic Domain & Core Specialization Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-1">
                
                {/* LEFT PANEL: ACADEMIC FOCUS & SPECIALIZATION */}
                <div className={`p-4 rounded-2xl border space-y-2.5 flex flex-col justify-between ${
                  isBatman
                    ? 'bg-[#17171C]/90 border-[#54202B]'
                    : 'bg-[#041c2c]/90 border-cyan-500/30'
                }`}>
                  <div className="space-y-2">
                    <div className={`text-[10px] font-cinematic uppercase tracking-widest font-bold flex items-center gap-1.5 ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                    }`}>
                      <GraduationCap className="w-3.5 h-3.5" style={{ color: activeTheme.primaryHex }} />
                      <span>LEFT PANEL: ACADEMIC FOCUS & SPECIALIZATION</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${
                      isBatman ? 'text-[#E8DCC8]' : 'text-white'
                    }`}>
                      {activeChar.specialty}
                    </p>
                  </div>

                  {activeChar.coreSubjects ? (
                    <div className={`pt-2.5 border-t space-y-1.5 ${
                      isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/25'
                    }`}>
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        CORE SUBJECTS:
                      </span>
                      <ul className="space-y-1 text-xs">
                        {activeChar.coreSubjects.map((sub) => (
                          <li key={sub} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activeTheme.primaryHex }} />
                            <span className={isBatman ? 'text-[#E8DCC8]/90 font-medium' : 'text-slate-200 font-medium'}>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : activeChar.coreTopics ? (
                    <div className={`pt-2 mt-2 border-t ${
                      isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/25'
                    }`}>
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block mb-0.5 ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        Core Topics:
                      </span>
                      <p className={`text-xs leading-relaxed font-light ${
                        isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
                      }`}>
                        {activeChar.coreTopics}
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* RIGHT PANEL: ACADEMIC FOUNDATION & BACKGROUND */}
                <div className={`p-4 rounded-2xl border space-y-2.5 flex flex-col justify-between ${
                  isBatman
                    ? 'bg-[#17171C]/90 border-[#54202B]'
                    : 'bg-[#041c2c]/90 border-cyan-500/30'
                }`}>
                  <div className="space-y-2">
                    <div className={`text-[10px] font-cinematic uppercase tracking-widest font-bold flex items-center gap-1.5 ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                    }`}>
                      <Layers className="w-3.5 h-3.5" style={{ color: activeTheme.primaryHex }} />
                      <span>RIGHT PANEL: ACADEMIC FOUNDATION & BACKGROUND</span>
                    </div>
                    <p className={`text-xs leading-relaxed font-light ${
                      isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
                    }`}>
                      {activeChar.backstory}
                    </p>
                    {activeChar.secondaryParagraph && (
                      <p className={`text-xs leading-relaxed font-light ${
                        isBatman ? 'text-[#E8DCC8]/80' : 'text-slate-300'
                      }`}>
                        {activeChar.secondaryParagraph}
                      </p>
                    )}
                  </div>

                  {activeChar.foundationalUnits ? (
                    <div className={`pt-2.5 border-t space-y-1.5 ${
                      isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/25'
                    }`}>
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        FOUNDATIONAL & ARCHITECTURE UNITS:
                      </span>
                      <ul className="space-y-1 text-xs">
                        {activeChar.foundationalUnits.map((unit) => (
                          <li key={unit} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: activeTheme.secondaryHex }} />
                            <span className={isBatman ? 'text-[#E8DCC8]/90 font-medium' : 'text-slate-200 font-medium'}>{unit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    /* Key Technologies & Subjects for other cards */
                    <div className={`pt-2 border-t ${
                      isBatman ? 'border-[#54202B]/60' : 'border-cyan-500/25'
                    }`}>
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block mb-1.5 ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        Core Subjects & Tools:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeChar.tools.map((tool) => (
                          <span 
                            key={tool}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                              isBatman
                                ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
                                : 'bg-[#02131e] border-cyan-500/30 text-cyan-200'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* BOTTOM SECTION */}
              <div className={`pt-2.5 border-t flex flex-wrap items-center justify-between gap-3 ${
                isBatman ? 'border-[#54202B]' : 'border-cyan-500/25'
              }`}>
                <div className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                  <span>Milestone:</span>{' '}
                  <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>
                    {activeChar.institutionOrOrg}
                  </strong>
                </div>

                <button
                  onClick={() => handleOpenModal(activeChar.id)}
                  className={`px-5 py-2 rounded-full text-xs font-cinematic uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md flex items-center gap-2 ${
                    isBatman
                      ? 'bg-[#A51C2D] hover:bg-[#6F101B] text-[#E8DCC8] shadow-[0_0_15px_rgba(165,28,45,0.4)]'
                      : 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:opacity-90 text-slate-950 border border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Inspect Education Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Side Nav Buttons for mouse clicking */}
        <button
          onClick={prevCard}
          disabled={activeCardIndex === 0}
          className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer shadow-xl ${
            activeCardIndex === 0 
              ? 'opacity-30 cursor-not-allowed border-transparent' 
              : isBatman
                ? 'bg-[#17171C]/95 border-[#A51C2D]/60 hover:border-[#A51C2D] text-[#E8DCC8] hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(165,28,45,0.3)]'
                : 'bg-[#041c2c]/95 border-cyan-500/40 hover:border-cyan-300 text-cyan-300 hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
          }`}
          title="Previous Card (or scroll up)"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextCard}
          disabled={activeCardIndex === 3}
          className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer shadow-xl ${
            activeCardIndex === 3 
              ? 'opacity-30 cursor-not-allowed border-transparent' 
              : isBatman
                ? 'bg-[#17171C]/95 border-[#A51C2D]/60 hover:border-[#A51C2D] text-[#E8DCC8] hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(165,28,45,0.3)]'
                : 'bg-[#041c2c]/95 border-cyan-500/40 hover:border-cyan-300 text-cyan-300 hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
          }`}
          title="Next Card (or scroll down)"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

      </div>

      {/* Modals for Graduation & Education Dossiers */}
      {isSonuModalOpen && (
        <SonuActiveSentinelModal
          isOpen={isSonuModalOpen}
          onClose={() => setIsSonuModalOpen(false)}
        />
      )}

      {isUndergradModalOpen && (
        <SonuUndergradModal
          isOpen={isUndergradModalOpen}
          onClose={() => setIsUndergradModalOpen(false)}
        />
      )}

      {isIntermediateModalOpen && (
        <SonuIntermediateModal
          isOpen={isIntermediateModalOpen}
          onClose={() => setIsIntermediateModalOpen(false)}
        />
      )}

      {isTenthModalOpen && (
        <SonuTenthSchoolModal
          isOpen={isTenthModalOpen}
          onClose={() => setIsTenthModalOpen(false)}
        />
      )}

      {inspectCharacter && (
        <CharacterDetailModal
          character={inspectCharacter}
          onClose={() => setInspectCharacter(null)}
        />
      )}

    </section>
  );
};
