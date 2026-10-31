import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const TickerRibbon: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const items = [
    'SONU ELLUMALLA',
    'MASTER OF CYBERSECURITY',
    'CURTIN UNIV DUBAI',
    'ETHICAL HACKER',
    'SOC ANALYST',
    'NETWORK DEFENSE',
    'AI SECURITY RESEARCHER',
    'B.TECH CSE CGPA 7.47'
  ];

  return (
    <div className={`w-full py-3.5 border-y font-mono overflow-hidden select-none shadow-inner tracking-widest transition-colors duration-500 ${
      isBatman
        ? 'bg-[#10070B]/95 border-[#54202B] text-[#E8DCC8]'
        : 'bg-[#030c14]/95 border-cyan-500/20 text-cyan-300'
    }`}>
      <div className="animate-ticker flex items-center gap-10">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-10 text-xs sm:text-sm tracking-[0.25em] font-bold whitespace-nowrap uppercase">
            <span className={`transition-colors ${
              isBatman ? 'text-[#E8DCC8] hover:text-[#C45A50]' : 'text-cyan-200 hover:text-white'
            }`}>
              {text}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${
              isBatman
                ? 'bg-[#A51C2D] shadow-[0_0_8px_rgba(165,28,45,0.9)]'
                : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
};
