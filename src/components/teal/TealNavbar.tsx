import React from 'react';
import { Search, Shield } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TealNavbarProps {
  onOpenResume: () => void;
  onOpenSearch?: () => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

export const TealNavbar: React.FC<TealNavbarProps> = ({ 
  onOpenResume, 
  onOpenSearch, 
  activeTab, 
  onNavigate 
}) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'character-deck', label: 'Character' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'training', label: 'Training' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-12 py-3 backdrop-blur-md flex items-center justify-between transition-colors duration-400 border-b ${
      isBatman
        ? 'bg-[#0B0B0F]/92 border-[#54202B]/80 shadow-[0_4px_25px_rgba(0,0,0,0.6)]'
        : 'bg-[#05131c]/90 border-cyan-500/20 shadow-[0_4px_25px_rgba(3,14,22,0.8)]'
    }`}>
      {/* Brand / Logo Title */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2.5 text-left cursor-pointer group"
      >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 border ${
          isBatman
            ? 'bg-[#310D18] border-[#A51C2D]/60 text-[#E8DCC8] shadow-[0_0_12px_rgba(165,28,45,0.4)]'
            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.35)]'
        }`}>
          <Shield className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className={`text-base sm:text-lg font-bold tracking-wider uppercase font-cinematic transition-colors ${
            isBatman
              ? 'text-[#E8DCC8] group-hover:text-white'
              : 'text-white group-hover:text-cyan-300'
          }`}>
            SONU ELLUMALLA
          </span>
        </div>
      </button>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 sm:gap-7 text-xs sm:text-sm font-medium tracking-wider">
        {navItems.map((item) => {
          const isActive = activeTab === item.id || (activeTab === 'home' && item.id === 'home');
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-1 transition-colors cursor-pointer tracking-wider uppercase font-cinematic text-sm ${
                isBatman
                  ? (isActive ? 'text-[#C45A50] font-bold' : 'text-[#B9A1A0] hover:text-[#E8DCC8]')
                  : (isActive ? 'text-cyan-300 font-bold' : 'text-slate-400 hover:text-white')
              }`}
            >
              {item.label}
              {isActive && (
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                  isBatman
                    ? 'bg-[#A51C2D] shadow-[0_0_8px_rgba(165,28,45,0.9)]'
                    : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.85)]'
                }`} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Search & "For more info" */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Search / Shell Launcher */}
        <button
          onClick={onOpenSearch}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
            isBatman
              ? 'bg-[#17171C] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8]'
              : 'bg-[#0a202d] hover:bg-[#0e2c3d] border-cyan-500/25 hover:border-cyan-400/60 text-slate-200'
          }`}
          title="Search / Open Tactical Terminal"
        >
          <Search className={`w-3.5 h-3.5 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
          <span className="hidden sm:inline tracking-wide font-mono">Terminal</span>
        </button>

        {/* Resume Button */}
        <button
          onClick={onOpenResume}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-cinematic transition-all cursor-pointer border ${
            isBatman
              ? 'bg-gradient-to-r from-[#6F101B] via-[#A51C2D] to-[#310D18] hover:opacity-95 text-[#E8DCC8] border-[#A51C2D]/70 shadow-[0_0_15px_rgba(165,28,45,0.4)]'
              : 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 text-cyan-300 hover:text-white border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
          }`}
        >
          For more info
        </button>
      </div>
    </header>
  );
};
