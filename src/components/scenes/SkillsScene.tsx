import React, { useState } from 'react';
import { Shield, Terminal, Cpu, Check, Wrench, X } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

interface SkillsSceneProps {
  onSelectCategory?: (category: string) => void;
}

export const SkillsScene: React.FC<SkillsSceneProps> = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const pillars = [
    {
      id: 'soc',
      title: 'SOC & BLUE TEAM',
      role: 'Security Operations & Monitoring',
      description: 'Log aggregation, threat hunting, alert triage in Splunk, Wireshark packet dissection, and incident response playbooks.',
      tools: ['Wireshark', 'Splunk SIEM', 'Log Correlation', 'Network Security', 'SOC Tier-1 Triage', 'Traffic Analysis'],
      icon: Shield
    },
    {
      id: 'pentest',
      title: 'ETHICAL HACKER',
      role: 'Penetration Testing & Assessment',
      description: 'Systematic vulnerability assessment using Nessus and OpenVAS, OSINT mapping with Censys, Spiderfoot, Maltego, and Kali Linux.',
      tools: ['Kali Linux', 'Nessus', 'OpenVAS', 'N-map', 'Censys', 'Spiderfoot', 'The Harvester', 'Angry IP Scanner'],
      icon: Terminal
    },
    {
      id: 'ai-dev',
      title: 'AI & PROGRAMMING',
      role: 'Security Automation & Dev',
      description: 'Python socket programming, machine learning anomaly detection, Gemini API integration, and cryptographic entropy algorithms.',
      tools: ['Python 3', 'C Programming', 'Machine Learning', 'Gemini API', 'MySQL', 'C++ Basics', 'HTML/CSS/JS'],
      icon: Cpu
    }
  ];

  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#180a2b] via-[#24103c] to-[#120622] text-white">
      
      {/* Top Section Header with Generous Margins */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-pink-300 border border-white/20">
          <Wrench className="w-3.5 h-3.5 text-pink-400" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight drop-shadow-md">
          TECHNICAL ARSENAL
        </h2>
        <p className="text-sm sm:text-base text-purple-200/90 font-light leading-relaxed max-w-xl mx-auto">
          Core proficiencies, defense frameworks, and security tooling mastered through enterprise internships and university research:
        </p>
      </div>

      {/* 3 Prominent Cards Grid with Generous Gaps (Matching Screenshot 7) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto w-full">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#e7d2fb] via-[#dcbcf7] to-[#d0a7f2] text-slate-900 shadow-xl border-2 border-white flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 min-h-[340px] space-y-6"
            >
              {/* Card Header & Description */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#210935] font-display">
                    {pillar.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-purple-900/10 text-purple-950">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wide">
                  {pillar.role}
                </div>

                <p className="text-xs sm:text-sm text-[#2b1042] font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Graphic Silhouette / Tools Teaser */}
              <div className="pt-3 border-t border-purple-400/40 flex flex-wrap gap-1.5">
                {pillar.tools.slice(0, 4).map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-white/70 text-[11px] font-mono text-purple-950 font-semibold shadow-xs">
                    {t}
                  </span>
                ))}
              </div>

              {/* Red Pill Button (Screenshot 7 "MORE" button) */}
              <button
                onClick={() => setActiveModal(pillar.id)}
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#e52b38] hover:bg-[#d0202d] rounded-2xl border border-white/50 shadow-[0_6px_20px_rgba(229,43,56,0.5)] transform active:scale-95 transition-all text-center"
              >
                EXPLORE ARSENAL
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar with Generous Margin */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <span>KALI LINUX · WIRESHARK · SPLUNK · NESSUS · PYTHON</span>
        <span>AUDITED & LAB-TESTED</span>
      </div>

      {/* Expanded Skills Detail Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md flex items-center justify-center"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-purple-500/40 text-white shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white font-display">
                {pillars.find(p => p.id === activeModal)?.title}
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">
                PRACTICAL SKILLS & TOOLSETS:
              </span>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {pillars.find(p => p.id === activeModal)?.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 text-xs">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-slate-200">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {pillars.find(p => p.id === activeModal)?.description}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
