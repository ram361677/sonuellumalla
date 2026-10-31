import React, { useState, useEffect, useRef } from 'react';
import { TRAINING_EXPERIENCES, CERTIFICATIONS } from '../../data/portfolioData';
import { Certification, TrainingExperience } from '../../types/portfolio';
import { 
  Briefcase, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  X, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  FileCheck, 
  BookOpen, 
  Wrench, 
  Target, 
  Maximize2,
  MousePointer,
  Radio,
  Layers
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const TealTrainingCerts: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  // Active hovered field index among the 3 fields (0, 1, or 2, or null when closed)
  const [hoveredExpIdx, setHoveredExpIdx] = useState<number | null>(null);
  
  // Popup visibility state (shows when cursor moves on any field, closes when cursor is removed)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  // Optional pinned state if user clicks to lock a field open
  const [pinnedExpIdx, setPinnedExpIdx] = useState<number | null>(null);

  // Fullscreen modal states
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedTrainingForModal, setSelectedTrainingForModal] = useState<TrainingExperience | null>(null);

  // Hover timer ref to prevent flickering while moving between cards or into popup
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine active experience to display in the right-side popup
  const activeDisplayIdx = hoveredExpIdx !== null ? hoveredExpIdx : (pinnedExpIdx !== null ? pinnedExpIdx : 0);
  const activeExp = TRAINING_EXPERIENCES[activeDisplayIdx] || TRAINING_EXPERIENCES[0];

  // Mouse Enter on any of the 3 fields on the left
  const handleFieldMouseEnter = (idx: number) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredExpIdx(idx);
    setIsPopupVisible(true);
  };

  // Mouse Leave from a field
  const handleFieldMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      if (pinnedExpIdx === null) {
        setIsPopupVisible(false);
        setHoveredExpIdx(null);
      }
    }, 140);
  };

  // Mouse Enter into the right-side popup
  const handlePopupMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setIsPopupVisible(true);
  };

  // Mouse Leave from the right-side popup
  const handlePopupMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      if (pinnedExpIdx === null) {
        setIsPopupVisible(false);
        setHoveredExpIdx(null);
      }
    }, 140);
  };

  // Manual close button on popup
  const handleClosePopup = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setIsPopupVisible(false);
    setHoveredExpIdx(null);
    setPinnedExpIdx(null);
  };

  // Toggle pin on click
  const handleFieldClick = (idx: number, exp: TrainingExperience) => {
    if (pinnedExpIdx === idx) {
      setPinnedExpIdx(null);
      setIsPopupVisible(false);
    } else {
      setPinnedExpIdx(idx);
      setIsPopupVisible(true);
      setHoveredExpIdx(idx);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setSelectedTrainingForModal(null);
        handleClosePopup();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  return (
    <section 
      id="training" 
      className={`relative w-full py-20 sm:py-28 px-4 sm:px-10 lg:px-16 overflow-hidden border-t transition-colors duration-500 ${
        isBatman 
          ? 'bg-[#0B0B0F] film-grain border-[#54202B]' 
          : 'bg-[#030e16] border-cyan-500/20'
      }`}
    >
      
      {/* Background Atmosphere */}
      {isBatman ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-[#6F101B]/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-[#310D18]/25 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-2/3 left-1/3 w-[450px] h-[350px] bg-[#A51C2D]/10 rounded-full blur-[140px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-cyan-900/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-teal-900/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-2/3 left-1/3 w-[450px] h-[350px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      {/* Part 1: Professional Training Interactive Suite */}
      <div className="max-w-7xl mx-auto mb-20 sm:mb-28 relative z-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border ${
              isBatman
                ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#051f2d] border-cyan-500/30 text-cyan-200'
            }`}>
              <Briefcase className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span className="font-cinematic uppercase tracking-widest text-xs">INDUSTRY IMMERSION & TRACK RECORD</span>
            </div>
            
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold uppercase font-cinematic tracking-widest leading-none drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] ${
              isBatman ? 'text-[#E8DCC8]' : 'text-white'
            }`}>
              PROFESSIONAL TRAINING
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5">
            <div className={`flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase font-cinematic ${
              isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
            }`}>
              <span>
                {isPopupVisible 
                  ? `POPUP ACTIVE ON RIGHT [FIELD 0${activeDisplayIdx + 1}]` 
                  : 'HOVER OVER ANY FIELD TO OPEN POPUP'}
              </span>
              <span className={`w-2 h-2 rounded-full ${
                isPopupVisible 
                  ? (isBatman ? 'bg-[#A51C2D] animate-pulse' : 'bg-cyan-400 animate-pulse') 
                  : (isBatman ? 'bg-[#54202B]' : 'bg-cyan-950')
              }`} />
            </div>
            <p className={`text-[11px] max-w-sm sm:text-right font-light ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
            }`}>
              Move cursor over any field on the left → live popup shows on the right. Move to another field → updates info. Remove cursor → closes popup.
            </p>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: THE PROFESSIONAL TRAINING FIELDS */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className={`flex items-center justify-between pb-2 border-b text-xs font-mono ${
              isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
            }`}>
              <span className={`flex items-center gap-1.5 uppercase font-bold font-cinematic tracking-wider ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
              }`}>
                <Layers className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>{TRAINING_EXPERIENCES.length} Training Fields</span>
              </span>
              <span>Move cursor to inspect</span>
            </div>

            {/* The 3 Training Fields */}
            {TRAINING_EXPERIENCES.map((exp, idx) => {
              const isHovered = isPopupVisible && hoveredExpIdx === idx;
              const isPinned = pinnedExpIdx === idx;
              const isActive = isHovered || isPinned;

              return (
                <div
                  key={exp.role}
                  onMouseEnter={() => handleFieldMouseEnter(idx)}
                  onMouseLeave={handleFieldMouseLeave}
                  onClick={() => handleFieldClick(idx, exp)}
                  className={`group relative w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? isBatman
                        ? 'bg-gradient-to-r from-[#310D18] via-[#17171C] to-[#0B0B0F] border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_30px_rgba(165,28,45,0.35)] translate-x-1.5'
                        : 'bg-gradient-to-r from-[#042435] via-[#051a27] to-[#030e16] border-cyan-400 text-white shadow-[0_0_30px_rgba(6,182,212,0.35)] translate-x-1.5'
                      : isBatman
                        ? 'bg-[#17171C]/80 border-[#54202B] text-[#B9A1A0] hover:border-[#A51C2D]/60 hover:bg-[#310D18]/50 hover:shadow-[0_0_20px_rgba(165,28,45,0.15)]'
                        : 'bg-[#051724]/80 border-cyan-500/20 text-slate-300 hover:border-cyan-400/60 hover:bg-[#072435]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                  }`}
                >
                  {/* Right Connector Laser when Active */}
                  {isActive && (
                    <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-[2px] ${
                      isBatman
                        ? 'bg-[#A51C2D] shadow-[0_0_10px_rgba(165,28,45,1)]'
                        : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]'
                    }`} />
                  )}

                  {/* Corner Accent Decals */}
                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-tr-lg border-t border-r transition-colors ${
                    isActive 
                      ? (isBatman ? 'border-[#A51C2D]' : 'border-cyan-400') 
                      : (isBatman ? 'border-[#54202B] group-hover:border-[#A51C2D]/50' : 'border-cyan-500/30 group-hover:border-cyan-400/50')
                  }`} />

                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold px-2 py-0.5 rounded text-[11px] font-cinematic uppercase tracking-wider ${
                        isActive 
                          ? (isBatman ? 'bg-[#A51C2D] text-[#E8DCC8]' : 'bg-cyan-500 text-slate-950 font-bold')
                          : (isBatman ? 'bg-[#0B0B0F] text-[#B9A1A0] border border-[#54202B]' : 'bg-[#030e16] text-slate-400 border border-cyan-500/20')
                      }`}>
                        FIELD 0{idx + 1}
                      </span>
                      <span className={isActive ? (isBatman ? 'text-[#E8DCC8] font-semibold' : 'text-white font-semibold') : (isBatman ? 'text-[#B9A1A0]' : 'text-slate-400')}>
                        {exp.period}
                      </span>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded font-sans border ${
                      isBatman 
                        ? 'bg-[#0B0B0F] text-[#C45A50] border-[#54202B]' 
                        : 'bg-[#030e16] text-cyan-300 border-cyan-500/20'
                    }`}>
                      {exp.badge}
                    </span>
                  </div>

                  {/* Main Role & Org */}
                  <div className="flex items-start gap-3.5">
                    {exp.iconEmoji && (
                      <span className={`text-2xl sm:text-3xl shrink-0 p-2.5 rounded-xl border transition-all ${
                        isActive 
                          ? (isBatman ? 'bg-[#310D18] border-[#A51C2D] scale-110 shadow-[0_0_15px_rgba(165,28,45,0.4)]' : 'bg-cyan-500/20 border-cyan-400 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.4)]')
                          : (isBatman ? 'bg-[#17171C] border-[#54202B] group-hover:scale-105' : 'bg-[#031420] border-cyan-500/20 group-hover:scale-105')
                      }`}>
                        {exp.iconEmoji}
                      </span>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg sm:text-xl font-bold font-cinematic uppercase tracking-wide leading-snug transition-colors ${
                        isActive 
                          ? (isBatman ? 'text-[#E8DCC8]' : 'text-white') 
                          : (isBatman ? 'text-white group-hover:text-[#E8DCC8]' : 'text-white group-hover:text-cyan-200')
                      }`}>
                        {exp.role}
                      </h3>
                      <div className={`text-xs mt-1 font-mono font-medium ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        {exp.organization}
                      </div>

                      <p className={`text-xs font-light mt-2 line-clamp-2 leading-relaxed ${
                        isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Tool Tags preview */}
                      <div className={`flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t ${
                        isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
                      }`}>
                        {exp.toolsUsed.slice(0, 4).map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                              isActive 
                                ? (isBatman ? 'bg-[#310D18] border border-[#A51C2D]/50 text-[#E8DCC8]' : 'bg-cyan-950/80 border border-cyan-400/40 text-cyan-200')
                                : (isBatman ? 'bg-[#0B0B0F] border border-[#54202B] text-[#B9A1A0]' : 'bg-[#030e16] border border-cyan-500/20 text-slate-300')
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                        {exp.toolsUsed.length > 4 && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 ${
                            isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                          }`}>
                            +{exp.toolsUsed.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Hover action indicator */}
                      <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs font-mono ${
                        isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
                      }`}>
                        <span className={`flex items-center gap-1.5 font-semibold transition-colors font-cinematic uppercase tracking-wider text-xs ${
                          isActive 
                            ? (isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200') 
                            : (isBatman ? 'text-[#C45A50] group-hover:text-[#E8DCC8]' : 'text-cyan-400 group-hover:text-cyan-200')
                        }`}>
                          <span>{isActive ? 'Popup Visible on Right' : 'Hover for Right Popup'}</span>
                          <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                            isActive 
                              ? (isBatman ? 'translate-x-[3px] text-[#A51C2D]' : 'translate-x-[3px] text-cyan-400') 
                              : (isBatman ? 'group-hover:translate-x-[2px] text-[#C45A50]' : 'group-hover:translate-x-[2px] text-cyan-400')
                          }`} />
                        </span>

                        <span className={`text-[11px] transition-colors ${
                          isBatman ? 'text-[#B9A1A0] group-hover:text-[#E8DCC8]' : 'text-slate-400 group-hover:text-slate-200'
                        }`}>
                          {isActive ? 'Click to pin' : 'Move cursor here'}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

            {/* Instruction footnote */}
            <div className={`p-3.5 rounded-xl border text-xs flex items-center gap-2 ${
              isBatman ? 'bg-[#17171C]/90 border-[#54202B] text-[#B9A1A0]' : 'bg-[#051724]/90 border-cyan-500/20 text-slate-300'
            }`}>
              <Sparkles className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span>
                Move cursor across any of the 3 fields to instantly swap the right-side popup. Move cursor out to dismiss.
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: POPUP ON RIGHT SIDE */}
          <div 
            className="lg:col-span-7 lg:sticky lg:top-24 transition-all duration-300 z-20"
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            {isPopupVisible ? (
              /* LIVE ACTIVE POPUP DOSSIER */
              <div className={`relative rounded-[28px] border-2 p-6 sm:p-8 transition-all duration-300 animate-in fade-in zoom-in-95 ${
                isBatman
                  ? 'bg-gradient-to-b from-[#17171C] via-[#17171C]/95 to-[#0B0B0F] border-[#A51C2D]/70 shadow-[0_0_50px_rgba(165,28,45,0.3)]'
                  : 'bg-gradient-to-b from-[#051724] via-[#051724]/95 to-[#030e16] border-cyan-400/70 shadow-[0_0_50px_rgba(6,182,212,0.3)]'
              }`}>
                
                {/* Glowing Top Laser Beam */}
                <div className={`absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent to-transparent ${
                  isBatman
                    ? 'via-[#A51C2D] shadow-[0_0_15px_rgba(165,28,45,1)]'
                    : 'via-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]'
                }`} />
                
                {/* Cyber Corner Decals */}
                <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 pointer-events-none ${
                  isBatman ? 'border-[#A51C2D]' : 'border-cyan-400'
                }`} />
                <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 pointer-events-none ${
                  isBatman ? 'border-[#A51C2D]' : 'border-cyan-400'
                }`} />
                <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 pointer-events-none ${
                  isBatman ? 'border-[#A51C2D]' : 'border-cyan-400'
                }`} />
                <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 pointer-events-none ${
                  isBatman ? 'border-[#A51C2D]' : 'border-cyan-400'
                }`} />

                {/* Popup Header & Controls */}
                <div className={`flex items-start justify-between gap-4 pb-5 border-b ${
                  isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
                }`}>
                  <div className="flex items-center gap-3.5">
                    {activeExp.iconEmoji && (
                      <span className={`text-3xl p-3 rounded-2xl border shadow-inner ${
                        isBatman 
                          ? 'bg-[#310D18] border-[#A51C2D]/50' 
                          : 'bg-cyan-500/20 border-cyan-400/50'
                      }`}>
                        {activeExp.iconEmoji}
                      </span>
                    )}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className={`px-2 py-0.5 rounded font-bold border font-cinematic uppercase tracking-wider text-[11px] ${
                          isBatman
                            ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                            : 'bg-[#042435] text-cyan-200 border-cyan-500/30'
                        }`}>
                          POPUP DOSSIER · FIELD 0{activeDisplayIdx + 1} OF 03
                        </span>
                        <span className={`flex items-center gap-1 text-[11px] ${
                          isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                        }`}>
                          <Radio className={`w-3 h-3 animate-pulse ${
                            isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'
                          }`} />
                          Live Stream
                        </span>
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-bold font-cinematic uppercase tracking-wider mt-1 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        {activeExp.role}
                      </h3>
                      <div className={`text-xs font-mono mt-0.5 ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>
                        {activeExp.organization} · <span className={isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}>{activeExp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setSelectedTrainingForModal(activeExp)}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        isBatman
                          ? 'bg-[#310D18] hover:bg-[#A51C2D] text-[#E8DCC8] border-[#54202B]'
                          : 'bg-[#072435] hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30'
                      }`}
                      title="Open Fullscreen Dossier"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleClosePopup}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        isBatman
                          ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-[#E8DCC8] border-[#54202B]'
                          : 'bg-[#041c2c] hover:bg-[#072d42] text-slate-400 hover:text-white border-cyan-500/20'
                      }`}
                      title="Close Popup (or remove cursor)"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Popup Content Body */}
                <div className="space-y-6 pt-5 max-h-[65vh] overflow-y-auto pr-1.5 custom-scrollbar">
                  
                  {/* Overview Card */}
                  <div className={`p-4 sm:p-5 rounded-2xl border space-y-2 ${
                    isBatman ? 'bg-[#0B0B0F]/80 border-[#54202B]' : 'bg-[#030e16]/80 border-cyan-500/20'
                  }`}>
                    <div className={`flex items-center justify-between text-xs font-mono ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                    }`}>
                      <span className={`flex items-center gap-1.5 font-bold uppercase tracking-wider font-cinematic text-xs ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        <FileCheck className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                        <span>Field Overview & Practical Scope</span>
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${
                        isBatman ? 'bg-[#17171C] text-[#E8DCC8] border-[#54202B]' : 'bg-[#042435] text-cyan-200 border-cyan-500/30'
                      }`}>
                        {activeExp.duration}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                      isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
                    }`}>
                      {activeExp.description}
                    </p>
                    {activeExp.detailedOverview && (
                      <p className={`text-xs sm:text-sm leading-relaxed font-light pt-1 border-t ${
                        isBatman ? 'text-[#B9A1A0] border-[#54202B]' : 'text-slate-300 border-cyan-500/20'
                      }`}>
                        {activeExp.detailedOverview}
                      </p>
                    )}
                  </div>

                  {/* What I Learned */}
                  {activeExp.learningAreas && activeExp.learningAreas.length > 0 && (
                    <div className="space-y-3">
                      <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                      }`}>
                        <BookOpen className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                        <span>What I Learned in This Field</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeExp.learningAreas.map((area, idx) => (
                          <div
                            key={idx}
                            className={`p-3.5 rounded-xl border transition-colors space-y-1 ${
                              isBatman
                                ? 'bg-[#0B0B0F]/90 border-[#54202B] hover:border-[#A51C2D]/50'
                                : 'bg-[#030e16]/90 border-cyan-500/20 hover:border-cyan-400/50'
                            }`}
                          >
                            <div className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                              isBatman ? 'text-[#E8DCC8]' : 'text-white'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
                              }`} />
                              <span className="truncate">{area.title}</span>
                            </div>
                            <p className={`text-[11px] sm:text-xs font-light leading-relaxed pl-3 ${
                              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                            }`}>
                              {area.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools Worked With */}
                  {activeExp.toolsDetailed && activeExp.toolsDetailed.length > 0 && (
                    <div className="space-y-3">
                      <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                      }`}>
                        <Wrench className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                        <span>Tools & Technologies Applied</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {activeExp.toolsDetailed.map((tool, idx) => (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border flex flex-col justify-between ${
                              isBatman ? 'bg-[#0B0B0F]/80 border-[#54202B]' : 'bg-[#030e16]/80 border-cyan-500/20'
                            }`}
                          >
                            <span className={`text-xs font-mono font-bold tracking-wide ${
                              isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
                            }`}>
                              {tool.name}
                            </span>
                            <span className={`text-[10px] font-light mt-0.5 leading-snug ${
                              isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                            }`}>
                              {tool.purpose}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Takeaway & Responsibilities */}
                  {activeExp.coreTakeaway && (
                    <div className="space-y-2">
                      <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                      }`}>
                        <Target className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                        <span>Core Practical Takeaway</span>
                      </div>
                      <p className={`p-3 rounded-xl border text-xs font-light leading-relaxed ${
                        isBatman ? 'bg-[#0B0B0F]/80 border-[#54202B] text-[#E8DCC8]' : 'bg-[#030e16]/80 border-cyan-500/20 text-slate-200'
                      }`}>
                        {activeExp.coreTakeaway}
                      </p>
                    </div>
                  )}

                  {activeExp.keyResponsibilities && activeExp.keyResponsibilities.length > 0 && (
                    <div className="space-y-3">
                      <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                      }`}>
                        <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                        <span>Key Responsibilities & Hands-on Deliverables</span>
                      </div>

                      <div className="space-y-2">
                        {activeExp.keyResponsibilities.map((resp: string, idx: number) => (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                              isBatman ? 'bg-[#0B0B0F]/60 border-[#54202B] text-[#E8DCC8]/90' : 'bg-[#030e16]/60 border-cyan-500/20 text-slate-200'
                            }`}
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'
                            }`} />
                            <span className="font-light">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer Info & Expand */}
                <div className={`mt-5 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Shield className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                    <span>VERIFIED HANDS-ON EXPERIENCE</span>
                  </span>

                  <button
                    onClick={() => setSelectedTrainingForModal(activeExp)}
                    className={`flex items-center gap-1 transition-colors font-bold cursor-pointer font-cinematic uppercase tracking-wider text-xs ${
                      isBatman ? 'text-[#C45A50] hover:text-[#E8DCC8]' : 'text-cyan-400 hover:text-cyan-200'
                    }`}
                  >
                    <span>Full Details</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ) : (
              /* INACTIVE PLACEHOLDER RADAR */
              <div className={`rounded-[28px] border-2 border-dashed p-10 sm:p-14 text-center backdrop-blur-sm flex flex-col items-center justify-center space-y-4 min-h-[460px] ${
                isBatman
                  ? 'border-[#54202B] bg-[#17171C]/40'
                  : 'border-cyan-500/30 bg-[#051724]/40'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner border ${
                  isBatman
                    ? 'bg-[#310D18] border-[#54202B] text-[#A51C2D]'
                    : 'bg-[#042435] border-cyan-500/30 text-cyan-400'
                }`}>
                  <MousePointer className={`w-8 h-8 animate-bounce ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                </div>

                <div className="space-y-1.5 max-w-md">
                  <div className={`text-xs font-cinematic uppercase tracking-widest font-bold ${
                    isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'
                  }`}>
                    INTERACTIVE RADAR ACTIVE
                  </div>
                  <h3 className={`text-2xl font-bold font-cinematic uppercase tracking-wider ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    Move cursor over any field on the left
                  </h3>
                  <p className={`text-xs leading-relaxed font-light ${
                    isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                  }`}>
                    Move your cursor across any of the 3 fields to instantly inspect detailed learnings, practical tools, and defensive takeaways in this window.
                  </p>
                </div>

                <div className={`pt-2 flex items-center gap-2 text-xs font-mono ${
                  isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full animate-ping ${
                    isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
                  }`} />
                  <span>3 FIELDS READY FOR INSPECTION</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Part 2: Verified Certifications */}
      <div id="certifications" className={`max-w-7xl mx-auto pt-10 border-t relative z-10 ${
        isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
      }`}>
        
        {/* Certifications Header */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 border ${
              isBatman
                ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#051f2d] border-cyan-500/30 text-cyan-200'
            }`}>
              <Award className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span className="font-cinematic uppercase tracking-widest text-xs">FORMAL AUDITS & CREDENTIALS</span>
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold uppercase font-cinematic tracking-widest leading-none drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] ${
              isBatman ? 'text-[#E8DCC8]' : 'text-white'
            }`}>
              VERIFIED CERTIFICATIONS
            </h2>
          </div>
          <p className={`text-xs sm:text-sm font-light max-w-md leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Click on any certification to inspect detailed learning outcomes, defensive applications, and verified profile competencies.
          </p>
        </div>

        {/* 6 Certifications Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => {
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`group relative p-6 rounded-2xl border shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer hover:-translate-y-1 select-none ${
                  isBatman
                    ? 'bg-gradient-to-b from-[#17171C] via-[#17171C]/90 to-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D] hover:shadow-[0_0_30px_rgba(165,28,45,0.25)]'
                    : 'bg-gradient-to-b from-[#051724] via-[#051724]/90 to-[#030e16] border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]'
                }`}
              >

                {/* Top Corner Glow */}
                <div className={`absolute top-2 right-2 w-8 h-8 rounded-tr-xl border-t border-r transition-colors pointer-events-none ${
                  isBatman ? 'border-[#54202B] group-hover:border-[#A51C2D]' : 'border-cyan-500/20 group-hover:border-cyan-400'
                }`} />

                <div className="space-y-3">
                  {/* Issuer and Verified Badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-medium truncate max-w-[170px] ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                    }`}>
                      {cert.issuer}
                    </span>
                    <span className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                      isBatman 
                        ? 'text-[#E8DCC8] bg-[#310D18] border-[#54202B]' 
                        : 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40'
                    }`}>
                      <CheckCircle2 className={`w-3 h-3 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                      Verified
                    </span>
                  </div>

                  {/* Title with Emoji */}
                  <div className="flex items-start gap-2.5">
                    {cert.iconEmoji && (
                      <span className={`text-2xl shrink-0 p-1.5 rounded-xl border group-hover:scale-110 transition-transform ${
                        isBatman ? 'bg-[#310D18] border-[#54202B]' : 'bg-[#042435] border-cyan-500/30'
                      }`}>
                        {cert.iconEmoji}
                      </span>
                    )}
                    <div>
                      <h3 className={`text-lg font-bold font-cinematic uppercase tracking-wide group-hover:text-white transition-colors leading-snug ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        {cert.title}
                      </h3>
                      <div className={`text-[11px] font-mono mt-0.5 ${
                        isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                      }`}>
                        {cert.year}
                      </div>
                    </div>
                  </div>

                  {/* Description Synopsis */}
                  <p className={`text-xs font-light leading-relaxed line-clamp-2 ${
                    isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                  }`}>
                    {cert.description}
                  </p>

                  {/* Supports preview tags */}
                  {cert.whatItSupports && cert.whatItSupports.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.whatItSupports.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isBatman 
                              ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]' 
                              : 'bg-[#030e16] border-cyan-500/20 text-slate-300'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {cert.whatItSupports.length > 3 && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isBatman ? 'bg-[#0B0B0F] text-[#B9A1A0]/70' : 'bg-[#030e16] text-slate-500'
                        }`}>
                          +{cert.whatItSupports.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono ${
                  isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
                }`}>
                  <span className={`flex items-center gap-1.5 font-semibold transition-colors font-cinematic uppercase tracking-wider text-xs ${
                    isBatman ? 'text-[#C45A50] group-hover:text-[#E8DCC8]' : 'text-cyan-400 group-hover:text-cyan-200'
                  }`}>
                    <ShieldCheck className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                    <span>View Details</span>
                  </span>
                  <div className={`p-1 rounded-full transition-all ${
                    isBatman 
                      ? 'bg-[#310D18] group-hover:bg-[#A51C2D] group-hover:text-white text-[#E8DCC8]' 
                      : 'bg-cyan-500/20 group-hover:bg-cyan-400 group-hover:text-slate-950 text-cyan-300'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* FULLSCREEN POPUP MODAL 1: Training Deep Dive Modal */}
      {selectedTrainingForModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedTrainingForModal(null)}
        >
          <div 
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-[28px] border-2 space-y-6 text-left transition-colors ${
              isBatman
                ? 'bg-gradient-to-b from-[#17171C] via-[#17171C] to-[#0B0B0F] border-[#A51C2D]/60 shadow-[0_0_60px_rgba(165,28,45,0.35)]'
                : 'bg-gradient-to-b from-[#051724] via-[#051724] to-[#030e16] border-cyan-400/60 shadow-[0_0_60px_rgba(6,182,212,0.35)]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing Accent Top Line */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent to-transparent ${
              isBatman 
                ? 'via-[#A51C2D] shadow-[0_0_15px_rgba(165,28,45,0.8)]' 
                : 'via-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]'
            }`} />

            {/* Modal Header */}
            <div className={`flex items-start justify-between pb-4 border-b ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <div className="flex items-center gap-3">
                {selectedTrainingForModal.iconEmoji && (
                  <span className={`text-3xl p-2.5 rounded-2xl border shadow-inner ${
                    isBatman ? 'bg-[#310D18] border-[#A51C2D]/40' : 'bg-cyan-500/20 border-cyan-400/40'
                  }`}>
                    {selectedTrainingForModal.iconEmoji}
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-cinematic uppercase tracking-widest ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                    }`}>
                      {selectedTrainingForModal.organization}
                    </span>
                    <span className={isBatman ? 'text-[#54202B]' : 'text-cyan-700'}>·</span>
                    <span className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                      {selectedTrainingForModal.period}
                    </span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold font-cinematic uppercase tracking-wider mt-0.5 ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    {selectedTrainingForModal.role}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedTrainingForModal(null)}
                className={`p-2 rounded-full border transition-all cursor-pointer active:scale-95 ${
                  isBatman
                    ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-white border-[#54202B]'
                    : 'bg-[#041c2c] hover:bg-[#072d42] text-slate-400 hover:text-white border-cyan-500/20'
                }`}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview Section */}
            <div className="space-y-2">
              <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
              }`}>
                <FileCheck className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>Internship & Training Overview</span>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed font-light p-4 rounded-2xl border ${
                isBatman 
                  ? 'text-[#E8DCC8]/90 bg-[#0B0B0F]/80 border-[#54202B]' 
                  : 'text-slate-200 bg-[#030e16]/80 border-cyan-500/20'
              }`}>
                {selectedTrainingForModal.description}
              </p>
            </div>

            {/* Detailed Overview */}
            {selectedTrainingForModal.detailedOverview && (
              <div className="space-y-2">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Comprehensive Practical Curriculum</span>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-light p-4 rounded-2xl border ${
                  isBatman 
                    ? 'text-[#B9A1A0] bg-[#0B0B0F]/80 border-[#54202B]' 
                    : 'text-slate-300 bg-[#030e16]/80 border-cyan-500/20'
                }`}>
                  {selectedTrainingForModal.detailedOverview}
                </p>
              </div>
            )}

            {/* Learning Areas */}
            {selectedTrainingForModal.learningAreas && selectedTrainingForModal.learningAreas.length > 0 && (
              <div className="space-y-3">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <BookOpen className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Core Knowledge Modules</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTrainingForModal.learningAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border space-y-1.5 ${
                        isBatman 
                          ? 'bg-[#0B0B0F]/80 border-[#54202B]' 
                          : 'bg-[#030e16]/80 border-cyan-500/20'
                      }`}
                    >
                      <div className={`text-xs font-mono font-bold flex items-center gap-2 ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
                        }`} />
                        <span>{area.title}</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${
                        isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                      }`}>
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Detailed */}
            {selectedTrainingForModal.toolsDetailed && selectedTrainingForModal.toolsDetailed.length > 0 && (
              <div className="space-y-3">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Wrench className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Tools & Frameworks Mastered</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {selectedTrainingForModal.toolsDetailed.map((tool, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border ${
                        isBatman 
                          ? 'bg-[#0B0B0F]/80 border-[#54202B]' 
                          : 'bg-[#030e16]/80 border-cyan-500/20'
                      }`}
                    >
                      <div className={`text-xs font-mono font-bold ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
                      }`}>
                        {tool.name}
                      </div>
                      <div className={`text-[11px] mt-1 font-light ${
                        isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                      }`}>
                        {tool.purpose}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Takeaway & Responsibilities */}
            {selectedTrainingForModal.coreTakeaway && (
              <div className="space-y-2">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Target className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Core Practical Takeaway</span>
                </div>
                <p className={`text-sm leading-relaxed font-light p-4 rounded-2xl border ${
                  isBatman 
                    ? 'text-[#E8DCC8] bg-[#0B0B0F]/80 border-[#54202B]' 
                    : 'text-slate-200 bg-[#030e16]/80 border-cyan-500/20'
                }`}>
                  {selectedTrainingForModal.coreTakeaway}
                </p>
              </div>
            )}

            {selectedTrainingForModal.keyResponsibilities && selectedTrainingForModal.keyResponsibilities.length > 0 && (
              <div className="space-y-3">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Key Responsibilities & Deliverables</span>
                </div>

                <div className="space-y-2">
                  {selectedTrainingForModal.keyResponsibilities.map((resp: string, idx: number) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isBatman 
                          ? 'bg-[#0B0B0F]/80 border-[#54202B] text-[#E8DCC8]' 
                          : 'bg-[#030e16]/80 border-cyan-500/20 text-slate-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'
                      }`} />
                      <span className="font-light">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <div className={`text-xs font-mono flex items-center gap-2 ${
                isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
              }`}>
                <span>VERIFIED ROLE:</span>
                <span className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'}`}>
                  {selectedTrainingForModal.role}
                </span>
              </div>

              <button
                onClick={() => setSelectedTrainingForModal(null)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-cinematic uppercase tracking-widest transition-all shadow-md cursor-pointer ${
                  isBatman
                    ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                    : 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-90 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                }`}
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FULLSCREEN POPUP MODAL 2: Certification Dossier Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-[28px] border-2 space-y-6 text-left transition-colors ${
              isBatman
                ? 'bg-gradient-to-b from-[#17171C] via-[#17171C] to-[#0B0B0F] border-[#A51C2D]/60 shadow-[0_0_60px_rgba(165,28,45,0.35)]'
                : 'bg-gradient-to-b from-[#051724] via-[#051724] to-[#030e16] border-cyan-400/60 shadow-[0_0_60px_rgba(6,182,212,0.35)]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing Accent Top Line */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent to-transparent ${
              isBatman 
                ? 'via-[#A51C2D] shadow-[0_0_15px_rgba(165,28,45,0.8)]' 
                : 'via-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]'
            }`} />

            {/* Modal Header */}
            <div className={`flex items-start justify-between pb-4 border-b ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <div className="flex items-center gap-3">
                {selectedCert.iconEmoji && (
                  <span className={`text-3xl p-2.5 rounded-2xl border shadow-inner ${
                    isBatman ? 'bg-[#310D18] border-[#A51C2D]/40' : 'bg-cyan-500/20 border-cyan-400/40'
                  }`}>
                    {selectedCert.iconEmoji}
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-cinematic uppercase tracking-widest ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                    }`}>
                      {selectedCert.issuer}
                    </span>
                    <span className={isBatman ? 'text-[#54202B]' : 'text-cyan-700'}>·</span>
                    <span className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                      {selectedCert.year}
                    </span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold font-cinematic uppercase tracking-wider mt-0.5 ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className={`p-2 rounded-full border transition-all cursor-pointer active:scale-95 ${
                  isBatman
                    ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-white border-[#54202B]'
                    : 'bg-[#041c2c] hover:bg-[#072d42] text-slate-400 hover:text-white border-cyan-500/20'
                }`}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Primary Overview */}
            <div className="space-y-2">
              <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
              }`}>
                <FileCheck className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>Certification Overview</span>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed font-light p-4 rounded-2xl border ${
                isBatman 
                  ? 'text-[#E8DCC8]/90 bg-[#0B0B0F]/80 border-[#54202B]' 
                  : 'text-slate-200 bg-[#030e16]/80 border-cyan-500/20'
              }`}>
                {selectedCert.description}
              </p>
            </div>

            {/* Detailed Context / Scope */}
            {selectedCert.detailedOverview && (
              <div className="space-y-2">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>Curriculum Scope & Technical Application</span>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-light p-4 rounded-2xl border ${
                  isBatman 
                    ? 'text-[#B9A1A0] bg-[#0B0B0F]/80 border-[#54202B]' 
                    : 'text-slate-300 bg-[#030e16]/80 border-cyan-500/20'
                }`}>
                  {selectedCert.detailedOverview}
                </p>
              </div>
            )}

            {/* What it supports in my profile */}
            {selectedCert.whatItSupports && selectedCert.whatItSupports.length > 0 && (
              <div className="space-y-3">
                <div className={`text-xs font-cinematic uppercase tracking-widest font-bold flex items-center gap-2 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  <Sparkles className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>What it supports in my profile:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCert.whatItSupports.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm shadow-sm ${
                        isBatman 
                          ? 'bg-[#0B0B0F]/90 border-[#54202B] text-[#E8DCC8]' 
                          : 'bg-[#030e16]/90 border-cyan-500/20 text-slate-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                        isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'
                      }`} />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Credential Footer */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <div className={`flex items-center gap-2 text-xs font-mono ${
                isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
              }`}>
                <span>Accredited Candidate:</span>
                <strong className={`font-semibold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>
                  Ellumalla Sonu
                </strong>
                <span className={isBatman ? 'text-[#54202B]' : 'text-cyan-700'}>·</span>
                <span className={`font-semibold flex items-center gap-1 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-emerald-400'
                }`}>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  Verified
                </span>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-cinematic uppercase tracking-widest transition-all shadow-md cursor-pointer ${
                  isBatman
                    ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                    : 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-90 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                }`}
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
