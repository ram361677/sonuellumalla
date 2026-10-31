import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal as TerminalIcon, 
  Sparkles, 
  ChevronDown, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  BookOpen,
  Award,
  Wrench,
  Send,
  Eye,
  X,
  FileText,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, TRAINING_EXPERIENCES } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { SKILL_STAGES } from '../teal/TealSkillsNetwork';
import { SonuPortrait } from '../SonuPortrait';

interface AdventureRoadmapProps {
  onOpenResume: () => void;
  onOpenProjectDemo: (p: Project) => void;
  onOpenTerminal: () => void;
  onOpenSonuSentinel: () => void;
}

export const AdventureRoadmap: React.FC<AdventureRoadmapProps> = ({
  onOpenResume,
  onOpenProjectDemo,
  onOpenTerminal,
  onOpenSonuSentinel
}) => {
  // Modal / detail states for each adventure level
  const [activeLevelModal, setActiveLevelModal] = useState<string | null>(null);
  const [selectedSkillStage, setSelectedSkillStage] = useState(SKILL_STAGES[0]);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative select-none font-serif">
      
      {/* ============================================================== */}
      {/* 1. TOP HEADER / HERO: SUMMIT WITH TORCH TRAVELER & MOUNTAINS */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-between pt-6 pb-20 px-4 sm:px-8 overflow-hidden">
        
        {/* Floating Glowing Cyan Crystals in the Sky */}
        <div className="absolute top-20 left-[10%] w-10 sm:w-14 animate-crystal-1 pointer-events-none drop-shadow-[0_0_25px_rgba(56,189,248,0.9)]">
          <svg viewBox="0 0 100 160" className="w-full">
            <polygon points="50,0 85,45 70,140 50,160 30,140 15,45" fill="#38bdf8" />
            <polygon points="50,0 85,45 50,160" fill="#0284c7" opacity="0.75" />
            <polygon points="50,0 30,140 50,160" fill="#7dd3fc" opacity="0.6" />
          </svg>
        </div>

        <div className="absolute top-16 right-[12%] w-9 sm:w-12 animate-crystal-2 pointer-events-none drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
          <svg viewBox="0 0 100 160" className="w-full">
            <polygon points="50,0 90,50 65,145 50,160 35,145 10,50" fill="#38bdf8" />
            <polygon points="50,0 90,50 50,160" fill="#0284c7" opacity="0.75" />
            <polygon points="50,0 35,145 50,160" fill="#bae6fd" opacity="0.5" />
          </svg>
        </div>

        <div className="absolute top-44 right-[25%] w-6 sm:w-8 animate-crystal-3 pointer-events-none drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
          <svg viewBox="0 0 100 160" className="w-full">
            <polygon points="50,0 80,45 65,135 50,150 35,135 20,45" fill="#7dd3fc" />
          </svg>
        </div>

        {/* Top Navbar Row */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/40 border border-blue-400 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              ES.
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase hidden sm:inline">
              SONU · ADVENTURE
            </span>
          </div>

          {/* Social Quick Icons (Matching screenshot: GitHub, LinkedIn, Gamepad, Mail) */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900 border border-blue-500/30 text-blue-200 hover:text-white transition-all shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900 border border-blue-500/30 text-blue-200 hover:text-white transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900 border border-blue-500/30 text-blue-200 hover:text-white transition-all shadow-sm cursor-pointer"
              title="Open Cybersecurity Shell"
            >
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900 border border-blue-500/30 text-blue-200 hover:text-white transition-all shadow-sm"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="relative z-20 text-center max-w-3xl mx-auto space-y-3 mt-8">
          <div className="text-sm sm:text-base text-blue-200 font-semibold tracking-wider uppercase font-serif drop-shadow">
            HI, I'M
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white font-serif tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            ELLUMALLA SONU
          </h1>

          <div className="text-xs sm:text-sm md:text-base font-bold text-cyan-300 uppercase tracking-widest font-serif drop-shadow">
            MASTER OF CYBERSECURITY · DEFENSIVE SENTINEL & AI SECURITY
          </div>

          <p className="text-xs sm:text-sm text-blue-200/90 font-normal max-w-lg mx-auto pt-1 leading-relaxed">
            I build and safeguard resilient digital frontiers from idea to reality. Curtin University Dubai postgraduate specializing in SOC threat hunting, ethical hacking, and intelligent defense pipelines.
          </p>
        </div>

        {/* 3D Mountain Pedestal with Glowing Portal & Traveler with Torch */}
        <div className="relative w-full max-w-4xl h-[280px] sm:h-[340px] mt-4 flex items-end justify-center pointer-events-none">
          
          {/* Icy Blue Mountains Backdrop */}
          <svg viewBox="0 0 1000 350" className="w-full h-full object-cover">
            {/* Distant Mountain Peaks */}
            <polygon points="0,350 150,110 320,350" fill="#1e2e6b" opacity="0.6" />
            <polygon points="120,350 280,60 480,350" fill="#2d428f" opacity="0.75" />
            <polygon points="280,60 320,120 280,100" fill="#7dd3fc" opacity="0.8" />
            
            <polygon points="550,350 750,50 920,350" fill="#2d428f" opacity="0.75" />
            <polygon points="750,50 780,110 750,95" fill="#7dd3fc" opacity="0.8" />
            <polygon points="720,350 870,120 1000,350" fill="#1e2e6b" opacity="0.6" />

            {/* Glowing Frost Pedestal with Circular Emblem (Left side) */}
            <circle cx="320" cy="220" r="45" fill="none" stroke="#38bdf8" strokeWidth="12" opacity="0.85" filter="drop-shadow(0 0 15px #38bdf8)" />
            <path d="M320,175 A45,45 0 0,1 365,220" fill="none" stroke="#ffffff" strokeWidth="12" />
            
            {/* Pedestal platform base */}
            <ellipse cx="320" cy="270" rx="65" ry="20" fill="#223377" stroke="#38bdf8" strokeWidth="3" />
            <ellipse cx="320" cy="285" rx="75" ry="22" fill="#162052" />

            {/* Winding Blue River through snowy mountains */}
            <path 
              d="M480,320 C420,290 400,240 450,210 C500,180 580,200 620,170 L650,200 C580,240 500,250 510,320 Z" 
              fill="#38bdf8" 
              opacity="0.7" 
              filter="drop-shadow(0 0 15px #0284c7)"
            />

            {/* Cliff Edge Promontory where traveler stands */}
            <path 
              d="M320,350 C380,280 440,260 520,260 C600,260 650,290 720,350 Z" 
              fill="#0d1b4c" 
            />

            {/* Traveler Silhouette */}
            {/* Body & Cloak */}
            <circle cx="500" cy="210" r="14" fill="#04081c" />
            <path d="M486,220 C480,260 520,260 514,220 Z" fill="#04081c" />
            {/* Raised arm holding torch */}
            <line x1="510" y1="225" x2="535" y2="195" stroke="#04081c" strokeWidth="6" strokeLinecap="round" />
            {/* Torch Staff */}
            <line x1="535" y1="215" x2="535" y2="175" stroke="#78350f" strokeWidth="4" />
            
            {/* Glowing Torch Flame (Animated) */}
            <ellipse cx="535" cy="170" rx="9" ry="14" fill="#f97316" className="animate-torch" />
            <ellipse cx="535" cy="170" rx="5" ry="8" fill="#fef08a" />
          </svg>

          {/* Wooden Signpost "SCROLL DOWN" */}
          <div 
            onClick={() => scrollToSection('level-01')}
            className="absolute bottom-4 left-[34%] sm:left-[36%] z-30 pointer-events-auto cursor-pointer group transform hover:scale-105 transition-all"
          >
            <div className="px-3.5 py-1.5 rounded-lg bg-[#78350f] border-2 border-[#b45309] text-amber-200 text-[10px] font-black uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.8)] flex items-center gap-1.5 font-serif">
              <span>SCROLL DOWN</span>
              <ChevronDown className="w-3 h-3 text-amber-300 animate-bounce" />
            </div>
            {/* Signpost post */}
            <div className="w-2 h-4 bg-[#78350f] mx-auto border-x border-[#451a03]" />
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 2. THE CONTINUOUS WINDING ADVENTURE TRAIL & LEVELS */}
      {/* ============================================================== */}
      <div className="w-full max-w-4xl mx-auto px-4 relative pb-28">

        {/* Central Winding Stepping Stone Trail Background SVG */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 800 2400" 
            preserveAspectRatio="none"
          >
            {/* Glowing Path Ribbon */}
            <path
              d="M400,20 Q320,120 280,240 T420,540 T600,820 T360,1180 T540,1540 T320,1920 T400,2280"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4"
              strokeDasharray="8 8"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* LEVEL 01: ABOUT ME (Glowing Purple Cavern) */}
        {/* ------------------------------------------------------------ */}
        <div id="level-01" className="relative z-10 pt-16 pb-20 flex flex-col md:flex-row items-center gap-8">
          
          {/* Left: 3D Glowing Purple Cave Graphics & Signpost */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start relative">
            
            {/* Level 01 Signpost */}
            <div className="mb-2 flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1b4b] border-2 border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="text-[11px] font-bold text-purple-200 tracking-wider uppercase font-serif">
                LEVEL 01
              </span>
            </div>

            {/* Glowing Purple Cavern */}
            <div className="relative w-64 h-48 sm:w-72 sm:h-52 rounded-3xl bg-[#090b24] border-2 border-purple-500/40 p-4 shadow-[0_0_40px_rgba(168,85,247,0.35)] flex items-center justify-center overflow-hidden group hover:border-purple-400 transition-all">
              
              {/* Cave Entrance Arch */}
              <div className="w-40 h-40 rounded-t-full bg-gradient-to-b from-[#7e22ce] via-[#3b0764] to-[#120524] shadow-[inset_0_0_30px_rgba(192,132,252,0.8)] flex flex-col items-center justify-center relative">
                {/* Purple Crystal Stalactites */}
                <div className="absolute top-0 inset-x-8 flex justify-between">
                  <div className="w-3 h-7 bg-purple-300 rounded-b-full shadow-[0_0_8px_#c084fc]" />
                  <div className="w-4 h-9 bg-purple-400 rounded-b-full shadow-[0_0_10px_#c084fc]" />
                  <div className="w-3 h-6 bg-purple-300 rounded-b-full shadow-[0_0_8px_#c084fc]" />
                </div>
                
                <span className="text-3xl mt-4 filter drop-shadow">👤</span>
                <span className="text-[10px] text-purple-200 font-bold uppercase tracking-widest mt-1">
                  CANDIDATE LAIR
                </span>
              </div>

            </div>

            {/* Stepping Stones Snake out from Cave */}
            <div className="flex gap-2 mt-4 ml-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-2.5 rounded-full bg-slate-800 border border-purple-400/50 shadow-[0_0_8px_rgba(168,85,247,0.4)]" 
                />
              ))}
            </div>

          </div>

          {/* Right: Level 01 Content Card */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-serif">
                // ACTIVE SENTINEL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-serif tracking-tight">
              ABOUT ME
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Passionate about cybersecurity, ethical hacking, threat intelligence, and AI-driven defense mechanisms. Currently pursuing <strong className="text-white">Master of CyberSecurity at Curtin University Dubai</strong>, holding a <strong className="text-white">B.Tech in Computer Science and Engineering</strong> (CGPA 7.47).
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['Curtin Univ Dubai', 'B.Tech CSE 7.47 CGPA', 'SOC Threat Hunting', 'Ethical Hacking'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-purple-200">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenSonuSentinel()}
                className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <span>EXPLORE ME</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* LEVEL 02: SKILLS (Glowing Cyan / Blue Cavern) */}
        {/* ------------------------------------------------------------ */}
        <div id="level-02" className="relative z-10 py-20 flex flex-col md:flex-row-reverse items-center gap-8">
          
          {/* Right: 3D Glowing Cyan Cave & Lantern Signpost */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-end relative">
            
            {/* Level 02 Signpost */}
            <div className="mb-2 flex items-center gap-2 px-3 py-1 rounded-md bg-[#082f49] border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-bold text-cyan-200 tracking-wider uppercase font-serif">
                LEVEL 02
              </span>
            </div>

            {/* Glowing Cyan Cavern */}
            <div className="relative w-64 h-48 sm:w-72 sm:h-52 rounded-3xl bg-[#090b24] border-2 border-cyan-500/40 p-4 shadow-[0_0_40px_rgba(56,189,248,0.35)] flex items-center justify-center overflow-hidden group hover:border-cyan-400 transition-all">
              
              <div className="w-40 h-40 rounded-t-full bg-gradient-to-b from-[#0284c7] via-[#082f49] to-[#041324] shadow-[inset_0_0_30px_rgba(56,189,248,0.8)] flex flex-col items-center justify-center relative">
                {/* Cyan Crystal Stalactites */}
                <div className="absolute top-0 inset-x-8 flex justify-between">
                  <div className="w-3 h-8 bg-cyan-300 rounded-b-full shadow-[0_0_8px_#38bdf8]" />
                  <div className="w-4 h-10 bg-cyan-200 rounded-b-full shadow-[0_0_10px_#38bdf8]" />
                  <div className="w-3 h-7 bg-cyan-300 rounded-b-full shadow-[0_0_8px_#38bdf8]" />
                </div>
                
                <span className="text-3xl mt-4 filter drop-shadow">🧊</span>
                <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-widest mt-1">
                  SKILL SANCTUARY
                </span>
              </div>

            </div>

            {/* Stepping Stones Snake out from Cave */}
            <div className="flex gap-2 mt-4 mr-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-2.5 rounded-full bg-slate-800 border border-cyan-400/50 shadow-[0_0_8px_rgba(56,189,248,0.4)]" 
                />
              ))}
            </div>

          </div>

          {/* Left: Level 02 Content Card */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-serif">
                // ARSENAL & TOOLKIT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-serif tracking-tight">
              TECHNICAL SKILLS
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Here are my verified tools, programming languages, operating systems, and automated defense environments engineered for cyber operations.
            </p>

            {/* 5 Core Skill Pillars */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-cyan-500/30">
                <span className="font-bold text-cyan-300 uppercase block font-serif">🐍 Programming</span>
                <span className="text-[11px] text-slate-300">Python, C, Java, C++</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-cyan-500/30">
                <span className="font-bold text-cyan-300 uppercase block font-serif">🛡️ Security Tools</span>
                <span className="text-[11px] text-slate-300">Nmap, Splunk, Censys</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-cyan-500/30">
                <span className="font-bold text-cyan-300 uppercase block font-serif">💻 Operating Sys</span>
                <span className="text-[11px] text-slate-300">Kali Linux, Windows, Parrot</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-cyan-500/30">
                <span className="font-bold text-cyan-300 uppercase block font-serif">🤖 Web & AI</span>
                <span className="text-[11px] text-slate-300">HTML, CSS, JS, AI/ML</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveLevelModal('skills')}
                className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <span>VIEW SKILLS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* LEVEL 03: MY WORK / PROJECTS (Glowing Warm Amber / Gold Cavern) */}
        {/* ------------------------------------------------------------ */}
        <div id="level-03" className="relative z-10 py-20 flex flex-col md:flex-row items-center gap-8">
          
          {/* Left: 3D Glowing Gold Cave & Wooden Signpost */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start relative">
            
            {/* Level 03 Signpost */}
            <div className="mb-2 flex items-center gap-2 px-3 py-1 rounded-md bg-[#451a03] border-2 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-[11px] font-bold text-amber-200 tracking-wider uppercase font-serif">
                LEVEL 03
              </span>
            </div>

            {/* Glowing Amber Cavern */}
            <div className="relative w-64 h-48 sm:w-72 sm:h-52 rounded-3xl bg-[#090b24] border-2 border-amber-500/40 p-4 shadow-[0_0_40px_rgba(245,158,11,0.35)] flex items-center justify-center overflow-hidden group hover:border-amber-400 transition-all">
              
              <div className="w-40 h-40 rounded-t-full bg-gradient-to-b from-[#d97706] via-[#78350f] to-[#1c0a02] shadow-[inset_0_0_30px_rgba(251,191,36,0.8)] flex flex-col items-center justify-center relative">
                {/* Gold Crystal Stalactites */}
                <div className="absolute top-0 inset-x-8 flex justify-between">
                  <div className="w-3 h-8 bg-amber-300 rounded-b-full shadow-[0_0_8px_#fbbf24]" />
                  <div className="w-4 h-10 bg-amber-200 rounded-b-full shadow-[0_0_10px_#fbbf24]" />
                  <div className="w-3 h-7 bg-amber-300 rounded-b-full shadow-[0_0_8px_#fbbf24]" />
                </div>
                
                <span className="text-3xl mt-4 filter drop-shadow">🎮</span>
                <span className="text-[10px] text-amber-200 font-bold uppercase tracking-widest mt-1">
                  PROJECT ARSENAL
                </span>
              </div>

            </div>

            {/* Stepping Stones Snake out from Cave */}
            <div className="flex gap-2 mt-4 ml-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-2.5 rounded-full bg-slate-800 border border-amber-400/50 shadow-[0_0_8px_rgba(245,158,11,0.4)]" 
                />
              ))}
            </div>

          </div>

          {/* Right: Level 03 Content Card */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif">
                // LAB REPOSITORIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-serif tracking-tight">
              MY WORK & PROJECTS
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Check out my selected projects, live interactive simulations, cryptographic entropy analyzers, and automated incident response systems.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              {PROJECTS.slice(0, 3).map(p => (
                <div 
                  key={p.id}
                  onClick={() => onOpenProjectDemo(p)}
                  className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-400/60 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div>
                    <span className="font-bold text-white group-hover:text-amber-300 transition-colors uppercase block font-serif">
                      {p.title}
                    </span>
                    <span className="text-[11px] text-slate-400">{p.subtitle}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                    Demo ↗
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveLevelModal('projects')}
                className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* LEVEL 04: GAME DEV & ACADEMICS (Glowing Ruby Altar with Sword in Stone) */}
        {/* ------------------------------------------------------------ */}
        <div id="level-04" className="relative z-10 py-20 flex flex-col md:flex-row-reverse items-center gap-8">
          
          {/* Right: Glowing Ruby Altar with Sword in Stone */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-end relative">
            
            {/* Level 04 Signpost */}
            <div className="mb-2 flex items-center gap-2 px-3 py-1 rounded-md bg-[#4c0519] border-2 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.5)]">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
              <span className="text-[11px] font-bold text-rose-200 tracking-wider uppercase font-serif">
                LEVEL 04
              </span>
            </div>

            {/* Glowing Ruby Altar with Sword in Stone */}
            <div className="relative w-64 h-48 sm:w-72 sm:h-52 rounded-3xl bg-[#090b24] border-2 border-rose-500/40 p-4 shadow-[0_0_40px_rgba(244,63,94,0.35)] flex items-center justify-center overflow-hidden group hover:border-rose-400 transition-all">
              
              <div className="w-40 h-40 rounded-t-full bg-gradient-to-b from-[#e11d48] via-[#881337] to-[#1c040d] shadow-[inset_0_0_30px_rgba(251,113,133,0.8)] flex flex-col items-center justify-center relative">
                
                {/* 3D Sword in Stone SVG */}
                <svg viewBox="0 0 100 120" className="w-20 h-24 drop-shadow-[0_0_12px_#f43f5e]">
                  {/* Sword Hilt */}
                  <rect x="46" y="10" width="8" height="24" fill="#fbbf24" rx="2" />
                  <rect x="30" y="34" width="40" height="6" fill="#f59e0b" rx="2" />
                  <circle cx="50" cy="8" r="5" fill="#f43f5e" />
                  {/* Glowing Blade */}
                  <polygon points="45,40 55,40 53,85 50,95 47,85" fill="#ffffff" />
                  <polygon points="48,40 52,40 51,85 50,92 49,85" fill="#f43f5e" opacity="0.8" />
                  {/* Stone Pedestal */}
                  <polygon points="20,95 80,95 90,115 10,115" fill="#334155" />
                  <polygon points="25,95 75,95 70,105 30,105" fill="#475569" />
                </svg>

                <span className="text-[10px] text-rose-200 font-bold uppercase tracking-widest mt-1">
                  ACADEMIC SHRINE
                </span>
              </div>

            </div>

            {/* Stepping Stones Snake out from Altar */}
            <div className="flex gap-2 mt-4 mr-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-2.5 rounded-full bg-slate-800 border border-rose-400/50 shadow-[0_0_8px_rgba(244,63,94,0.4)]" 
                />
              ))}
            </div>

          </div>

          {/* Left: Level 04 Content Card */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest font-serif">
                // CREDENTIALS & AUDITS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-serif tracking-tight">
              EDUCATION & CERTIFICATIONS
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Academic pedigree from Curtin University Dubai (Master of CyberSecurity) and B.Tech in CSE (CGPA 7.47), backed by Cisco Networking Academy and Hacker School credentials.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-rose-500/30 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white uppercase block font-serif">Curtin University Dubai</span>
                  <span className="text-[11px] text-rose-300">Master of CyberSecurity (2026 – 2027)</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 uppercase">Current</span>
              </div>

              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-rose-500/30 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white uppercase block font-serif">B.Tech in CSE</span>
                  <span className="text-[11px] text-slate-300">KGRCET · CGPA 7.47 (2020 – 2024)</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 uppercase">Completed</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveLevelModal('certs')}
                className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <span>INSPECT CREDENTIALS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* LEVEL 05: EXPERIENCE & TRAINING (Glowing Emerald Cavern) */}
        {/* ------------------------------------------------------------ */}
        <div id="level-05" className="relative z-10 py-20 flex flex-col md:flex-row items-center gap-8">
          
          {/* Left: 3D Glowing Emerald Cave & Signpost */}
          <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start relative">
            
            {/* Level 05 Signpost */}
            <div className="mb-2 flex items-center gap-2 px-3 py-1 rounded-md bg-[#064e3b] border-2 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-emerald-200 tracking-wider uppercase font-serif">
                LEVEL 05
              </span>
            </div>

            {/* Glowing Emerald Cavern */}
            <div className="relative w-64 h-48 sm:w-72 sm:h-52 rounded-3xl bg-[#090b24] border-2 border-emerald-500/40 p-4 shadow-[0_0_40px_rgba(16,185,129,0.35)] flex items-center justify-center overflow-hidden group hover:border-emerald-400 transition-all">
              
              <div className="w-40 h-40 rounded-t-full bg-gradient-to-b from-[#059669] via-[#064e3b] to-[#022c22] shadow-[inset_0_0_30px_rgba(52,211,153,0.8)] flex flex-col items-center justify-center relative">
                {/* Emerald Crystal Stalactites */}
                <div className="absolute top-0 inset-x-8 flex justify-between">
                  <div className="w-3 h-8 bg-emerald-300 rounded-b-full shadow-[0_0_8px_#34d399]" />
                  <div className="w-4 h-10 bg-emerald-200 rounded-b-full shadow-[0_0_10px_#34d399]" />
                  <div className="w-3 h-7 bg-emerald-300 rounded-b-full shadow-[0_0_8px_#34d399]" />
                </div>
                
                <span className="text-3xl mt-4 filter drop-shadow">💼</span>
                <span className="text-[10px] text-emerald-200 font-bold uppercase tracking-widest mt-1">
                  EXP CAVERN
                </span>
              </div>

            </div>

            {/* Stepping Stones Snake out from Cave */}
            <div className="flex gap-2 mt-4 ml-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-2.5 rounded-full bg-slate-800 border border-emerald-400/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]" 
                />
              ))}
            </div>

          </div>

          {/* Right: Level 05 Content Card */}
          <div className="w-full md:w-1/2 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-serif">
                // INDUSTRY OPERATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-serif tracking-tight">
              EXPERIENCE & TRAINING
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              My hands-on journey so far, industry internships, tools worked with in live environments, and operational defensive workflows.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              {TRAINING_EXPERIENCES.map((exp, i) => (
                <div key={i} className="p-3 rounded-xl bg-blue-950/70 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white uppercase font-serif">{exp.role}</span>
                    <span className="text-[10px] text-emerald-300 font-bold">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{exp.organization}</div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveLevelModal('training')}
                className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <span>JOURNEY DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* FINAL LEVEL: THE ADVENTURE MAP & CONTACT DISPATCH */}
        {/* ------------------------------------------------------------ */}
        <div id="final-level" className="relative z-10 pt-20 pb-12 flex flex-col items-center space-y-12">
          
          {/* Signpost: FINAL LEVEL */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#1e293b] border-2 border-amber-400/80 shadow-[0_0_20px_rgba(251,191,36,0.6)]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-black text-amber-300 tracking-widest uppercase font-serif">
              FINAL LEVEL // DESTINATION REACHED
            </span>
          </div>

          {/* ========================================================== */}
          {/* THE ADVENTURE MAP (PARCHMENT BLUEPRINT SCROLL) */}
          {/* ========================================================== */}
          <div className="w-full max-w-3xl rounded-[32px] bg-gradient-to-b from-[#172554] via-[#0f172a] to-[#020617] border-2 border-blue-400/60 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
            
            {/* Top Map Title */}
            <div className="text-center space-y-1 pb-6 border-b border-blue-500/20">
              <div className="text-xs font-bold tracking-widest text-cyan-300 uppercase font-serif flex items-center justify-center gap-1.5">
                <Compass className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>THE ADVENTURE MAP</span>
              </div>
              <p className="text-xs text-slate-300">Milestone Roadmap: From Foundations to Enterprise Defense</p>
            </div>

            {/* 5 Milestone Roadmap Nodes (Matching screenshot: Idea, Design, You Are Here, Develop, Launch) */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 text-center">
              
              {/* Milestone 1: IDEA */}
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-400/60 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <span className="text-xl">💡</span>
                </div>
                <div className="text-xs font-bold text-white uppercase font-serif">IDEA</div>
                <div className="text-[11px] text-slate-400">Concept & Research</div>
              </div>

              {/* Milestone 2: DESIGN */}
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-900/60 border border-blue-400/60 flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  <span className="text-xl">🛡️</span>
                </div>
                <div className="text-xs font-bold text-white uppercase font-serif">DESIGN</div>
                <div className="text-[11px] text-slate-400">Security Architecture</div>
              </div>

              {/* Milestone 3: YOU ARE HERE (Central Glowing Beacon) */}
              <div className="flex flex-col items-center space-y-2 p-2 relative">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 border-2 border-amber-200 flex items-center justify-center text-slate-950 font-black shadow-[0_0_30px_rgba(245,158,11,0.9)] animate-bounce">
                  <MapPin className="w-7 h-7 fill-current text-[#451a03]" />
                </div>
                <div className="text-xs font-black text-amber-300 uppercase tracking-wider font-serif">
                  YOU ARE HERE
                </div>
                <div className="text-[10px] text-amber-200/90 font-bold">READY TO DEPLOY</div>
              </div>

              {/* Milestone 4: DEVELOP */}
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-400/60 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <span className="text-xl">⚙️</span>
                </div>
                <div className="text-xs font-bold text-white uppercase font-serif">DEVELOP</div>
                <div className="text-[11px] text-slate-400">Hardening & Triage</div>
              </div>

              {/* Milestone 5: LAUNCH */}
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-12 h-12 rounded-2xl bg-rose-900/60 border border-rose-400/60 flex items-center justify-center text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="text-xs font-bold text-white uppercase font-serif">LAUNCH</div>
                <div className="text-[11px] text-slate-400">Zero-Trust Operations</div>
              </div>

            </div>

          </div>

          {/* ========================================================== */}
          {/* LET'S CREATE YOUR NEXT ADVENTURE (CONTACT & BACKPACK HUB) */}
          {/* ========================================================== */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-blue-500/20">
            
            {/* Left Column: Heading & Coordinates */}
            <div className="md:col-span-6 space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-serif tracking-tight leading-tight">
                LET'S CREATE YOUR NEXT ADVENTURE.
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>

                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Curtin University Dubai, UAE & Hyderabad</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="px-6 py-2.5 rounded-full btn-adventure-primary text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  VIEW RESUME / CV
                </button>
              </div>
            </div>

            {/* Right Column: 3D Adventurer's Backpack & Glowing Lantern Graphic */}
            <div className="md:col-span-6 flex items-center justify-center relative">
              <div className="relative w-56 h-48 flex items-center justify-center">
                
                {/* Glowing Lantern on Wooden Post */}
                <div className="absolute right-4 bottom-2 flex flex-col items-center">
                  <div className="w-12 h-14 rounded-xl bg-amber-500/20 border-2 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.9)] flex items-center justify-center">
                    <span className="text-2xl filter drop-shadow">🏮</span>
                  </div>
                  <div className="w-2.5 h-10 bg-[#78350f]" />
                </div>

                {/* 3D Traveler's Leather Backpack */}
                <div className="w-36 h-36 rounded-3xl bg-[#78350f] border-2 border-[#b45309] shadow-[0_15px_30px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between p-3 relative group hover:scale-105 transition-transform">
                  {/* Rolled Bedroll / Parchment Top */}
                  <div className="w-28 h-6 rounded-full bg-[#d97706] border border-[#fef08a] shadow-inner" />
                  {/* Leather Straps with Brass Buckles */}
                  <div className="w-full flex justify-between px-2">
                    <div className="w-3 h-16 bg-[#451a03] rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-300 rounded-sm" />
                    </div>
                    <div className="w-3 h-16 bg-[#451a03] rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-300 rounded-sm" />
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-200 font-bold uppercase tracking-widest font-serif">
                    SENTINEL PACK
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Copyright Note */}
          <div className="pt-10 text-xs text-slate-500 uppercase tracking-widest font-serif">
            © {new Date().getFullYear()} ELLUMALLA SONU · ALL RIGHTS RESERVED
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* ADVENTURE DETAIL MODALS */}
      {/* ============================================================== */}
      {activeLevelModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 font-serif"
          onClick={() => setActiveLevelModal(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-[32px] bg-[#0d1b4c] border-2 border-blue-400 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6 text-left text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-blue-500/30">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-serif tracking-tight">
                {activeLevelModal === 'skills' && 'TECHNICAL ARSENAL // SKILLS DETAILS'}
                {activeLevelModal === 'projects' && 'FEATURED PROJECTS // LAB REPOSITORIES'}
                {activeLevelModal === 'certs' && 'VERIFIED CREDENTIALS // EDUCATION & CERTIFICATIONS'}
                {activeLevelModal === 'training' && 'EXPERIENCE & TRAINING // ENTERPRISE OUTCOMES'}
              </h3>
              <button
                onClick={() => setActiveLevelModal(null)}
                className="p-1.5 rounded-full bg-blue-950 hover:bg-blue-900 border border-blue-400 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: SKILLS */}
            {activeLevelModal === 'skills' && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 pb-2">
                  {SKILL_STAGES.map(st => (
                    <button
                      key={st.id}
                      onClick={() => setSelectedSkillStage(st)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                        selectedSkillStage.id === st.id 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-blue-950/80 text-blue-200 border border-blue-500/30'
                      }`}
                    >
                      {st.spelling}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#091238] border border-blue-500/30 space-y-3">
                  <h4 className="text-base font-bold text-cyan-300 uppercase font-serif">
                    {selectedSkillStage.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedSkillStage.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {selectedSkillStage.skills.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/20 space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{s.iconEmoji}</span>
                          <span>{s.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                          {s.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Body: PROJECTS */}
            {activeLevelModal === 'projects' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECTS.map(p => (
                    <div 
                      key={p.id}
                      className="p-5 rounded-2xl bg-[#091238] border border-amber-500/30 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-amber-400 font-mono">{p.number}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                            {p.type}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white uppercase font-serif">{p.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                      </div>

                      <button
                        onClick={() => {
                          setActiveLevelModal(null);
                          onOpenProjectDemo(p);
                        }}
                        className="mt-3 w-full py-2 rounded-xl btn-adventure-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>LAUNCH DEMO</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Body: CERTS */}
            {activeLevelModal === 'certs' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS.map(c => (
                    <div key={c.id} className="p-4 rounded-2xl bg-[#091238] border border-rose-500/30 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-rose-300 uppercase font-serif">{c.issuer}</span>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 uppercase">
                          Verified
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase font-serif">{c.title}</h4>
                      <p className="text-xs text-slate-300">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Body: TRAINING */}
            {activeLevelModal === 'training' && (
              <div className="space-y-4">
                {TRAINING_EXPERIENCES.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#091238] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-emerald-300 uppercase font-serif">{t.role}</h4>
                      <span className="text-xs text-slate-400 font-bold">{t.period}</span>
                    </div>
                    <div className="text-xs text-slate-300 font-bold">{t.organization}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Close Button */}
            <div className="pt-4 border-t border-blue-500/30 flex justify-end">
              <button
                onClick={() => setActiveLevelModal(null)}
                className="px-6 py-2 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
