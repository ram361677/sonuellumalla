import React from 'react';
import { Shield, FileText } from 'lucide-react';

interface SceneNavbarProps {
  currentScene: number;
  onNavigate: (index: number) => void;
  onOpenResume: () => void;
}

export const SceneNavbar: React.FC<SceneNavbarProps> = ({ currentScene, onNavigate, onOpenResume }) => {
  return (
    <nav className="absolute top-0 inset-x-0 z-30 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between pointer-events-auto">
      
      {/* Left Links */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-black uppercase tracking-wider">
        <button
          onClick={() => onNavigate(1)}
          className={`transition-all hover:scale-105 ${
            currentScene === 1 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavigate(3)}
          className={`transition-all hover:scale-105 ${
            currentScene === 3 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          SKILLS
        </button>
        <button
          onClick={() => onNavigate(4)}
          className={`hidden md:inline transition-all hover:scale-105 ${
            currentScene === 4 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          TRAINING
        </button>
      </div>

      {/* Center Brand Logo (Matching the iconic center logo in Screenshots 1, 2, 8) */}
      <button
        onClick={() => onNavigate(0)}
        className="flex items-center gap-2 group transform hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-pink-500 via-[#e52b38] to-purple-800 flex items-center justify-center text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] border border-white/40">
          <Shield className="w-5 h-5 fill-current/20" />
        </div>
        <span className="font-black uppercase tracking-tighter text-sm sm:text-base text-white font-display hidden sm:inline drop-shadow">
          SONU
        </span>
      </button>

      {/* Right Links */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-black uppercase tracking-wider">
        <button
          onClick={() => onNavigate(5)}
          className={`transition-all hover:scale-105 ${
            currentScene === 5 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          PROJECTS
        </button>
        <button
          onClick={() => onNavigate(6)}
          className={`hidden md:inline transition-all hover:scale-105 ${
            currentScene === 6 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          CERTS
        </button>
        <button
          onClick={() => onNavigate(7)}
          className={`transition-all hover:scale-105 ${
            currentScene === 7 
              ? 'text-white underline underline-offset-4 decoration-2 decoration-pink-400 font-extrabold' 
              : 'text-purple-200/80 hover:text-white'
          }`}
        >
          CONTACT
        </button>
      </div>

    </nav>
  );
};
