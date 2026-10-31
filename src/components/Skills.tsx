import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Shield, Terminal, Cpu, Globe, Wrench, Search, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: 'All Disciplines', icon: Sparkles },
    { id: 'CYBERSECURITY', label: 'Cybersecurity', icon: Shield },
    { id: 'TOOLS', label: 'Tools & Scanners', icon: Wrench },
    { id: 'PROGRAMMING', label: 'Programming', icon: Terminal },
    { id: 'AI', label: 'AI & Machine Learning', icon: Cpu },
    { id: 'WEB', label: 'Web Technologies', icon: Globe },
  ];

  // Flatten and filter skills
  const allFilteredSkills = SKILL_CATEGORIES.flatMap((cat) => 
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.category,
      categoryLabel: cat.title
    }))
  ).filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.categoryName === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
              ARSENAL & COMPETENCIES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              TECHNICAL SKILLS
            </h2>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, skills, languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Interactive Category Tabs (Compliant: functional buttons with segmented background) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-x-auto custom-scrollbar mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {allFilteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/80 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Header with Name & Category Separator */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mt-0.5">
                    <span>{skill.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400/90">{skill.level}</span>
                  </div>
                </div>

                {/* Subtle Proficiency Indicator */}
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {skill.description}
              </p>

              {/* Bottom Subtle hairline bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>LAB TESTED</span>
                <span className="group-hover:text-slate-300 transition-colors">READY FOR PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {allFilteredSkills.length === 0 && (
          <div className="py-16 text-center text-slate-500 font-mono text-xs">
            No matching competencies found for "{searchQuery}". Try searching for "Python", "Splunk", or "Wireshark".
          </div>
        )}

      </div>
    </section>
  );
};
