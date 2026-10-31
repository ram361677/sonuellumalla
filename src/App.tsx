import React, { useState } from 'react';
import { TealNavbar } from './components/teal/TealNavbar';
import { TealHero } from './components/teal/TealHero';
import { TickerRibbon } from './components/teal/TickerRibbon';
import { TealCharacterDeck } from './components/teal/TealCharacterDeck';
import { TealSkillsNetwork } from './components/teal/TealSkillsNetwork';
import { CharacterDetailModal } from './components/teal/CharacterDetailModal';
import { SonuActiveSentinelModal } from './components/teal/SonuActiveSentinelModal';
import { Projects } from './components/Projects';
import { TealTrainingCerts } from './components/teal/TealTrainingCerts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Terminal } from './components/Terminal';
import { ResumeModal } from './components/ResumeModal';
import { useTheme } from './context/ThemeContext';
import { CYBER_CHARACTERS, CyberCharacter } from './data/characterData';
import { Terminal as TerminalIcon, X, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  // Active character state (Default: Sonu)
  const [activeCharacter, setActiveCharacter] = useState<CyberCharacter>(
    () => CYBER_CHARACTERS.find(c => c.id === 'sonu') || CYBER_CHARACTERS[0]
  );
  const [inspectCharacter, setInspectCharacter] = useState<CyberCharacter | null>(null);
  const [isSonuModalOpen, setIsSonuModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center select-text relative font-sans overflow-x-hidden transition-colors duration-500 ${
      isBatman ? 'bg-[#0B0B0F] text-[#E8DCC8] film-grain' : 'bg-[#030e16] text-slate-100'
    }`}>
      
      {/* Top Floating Navbar (Home, Character, Skills, Projects, Training, Contact, Theme Switcher, Search, For more info) */}
      <TealNavbar
        activeTab={activeTab}
        onNavigate={(tab) => scrollTo(tab)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSearch={() => setIsTerminalModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="w-full flex flex-col items-center">
        
        {/* 1. HERO SECTION (SONU ELLUMALLA) */}
        <TealHero
          onNextDetailClick={() => scrollTo('character-deck')}
        />

        {/* 2. TICKER MARQUEE RIBBON 1 */}
        <TickerRibbon />

        {/* 3. "Character to play" 3-CARD IN-PLACE DECK */}
        <TealCharacterDeck
          activeCharacterId={activeCharacter.id}
          onCharacterChange={(char) => setActiveCharacter(char)}
        />

        {/* 4. TECHNICAL SKILLS: Connected Radial Network */}
        <TealSkillsNetwork />

        {/* 5. TICKER MARQUEE RIBBON 2 */}
        <TickerRibbon />

        {/* 6. FEATURED PROJECTS ARSENAL */}
        <Projects />

        {/* 7. PROFESSIONAL TRAINING & CERTIFICATIONS */}
        <TealTrainingCerts />

        {/* 8. INTERACTIVE CYBERSECURITY TERMINAL SHELL */}
        <div id="terminal" className={`w-full py-16 px-6 sm:px-12 border-y transition-colors duration-500 ${
          isBatman 
            ? 'bg-[#08080C] border-[#54202B]' 
            : 'bg-[#020b12] border-cyan-500/20'
        }`}>
          <div className="max-w-5xl mx-auto">
            <Terminal />
          </div>
        </div>

        {/* 9. CONTACT & RECRUITER DISPATCH */}
        <Contact />

        {/* 10. FOOTER */}
        <Footer />

      </main>

      {/* Floating Action: Quick Shell Launch & Back to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">

        <button
          onClick={() => setIsTerminalModalOpen(true)}
          className={`p-3 rounded-full shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer border ${
            isBatman
              ? 'bg-[#17171C]/95 hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8] shadow-[0_0_20px_rgba(165,28,45,0.35)]'
              : 'bg-[#061824]/95 hover:bg-[#0b283b] border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
          }`}
          title="Open Cybersecurity Shell"
        >
          <TerminalIcon className={`w-5 h-5 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-3 rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95 cursor-pointer border ${
            isBatman
              ? 'bg-[#17171C]/95 hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
              : 'bg-[#061824]/95 hover:bg-[#0b283b] border-cyan-500/25 text-slate-400 hover:text-white'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Sonu's Active Sentinel University & Subjects Modal */}
      <SonuActiveSentinelModal
        isOpen={isSonuModalOpen}
        onClose={() => setIsSonuModalOpen(false)}
      />

      {/* Character Dossier Modal */}
      {inspectCharacter && (
        <CharacterDetailModal
          character={inspectCharacter}
          onClose={() => setInspectCharacter(null)}
          onSelectCharacter={(char) => {
            setActiveCharacter(char);
            setInspectCharacter(null);
          }}
        />
      )}

      {/* Recruiter Resume Modal */}
      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

      {/* Floating Interactive Terminal Modal */}
      {isTerminalModalOpen && (
        <div 
          className="fixed inset-0 z-50 p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md flex items-center justify-center overflow-y-auto"
          onClick={() => setIsTerminalModalOpen(false)}
        >
          <div 
            className="w-full max-w-3xl my-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTerminalModalOpen(false)}
              className="absolute -top-10 right-0 p-1.5 text-white/80 hover:text-white rounded-lg bg-black/40 hover:bg-black/60 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <Terminal />
          </div>
        </div>
      )}

    </div>
  );
}
