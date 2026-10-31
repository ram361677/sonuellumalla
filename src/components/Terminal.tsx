import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Terminal: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [bootCompleted, setBootCompleted] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const initialBootSequence = isBatman
    ? [
        '> initializing batcomputer tactical mainframe...',
        '> loading security arsenal [Nmap, Splunk, SpiderFoot, Kali Linux, Python]... OK',
        '> scanning repositories [Zero Trust Sentinel, Cyber Anomaly Detector]... OK',
        '> loading certifications [Cisco Jr Analyst, Hacker School, IIT Kharagpur]... OK',
        '> verifying academic credentials [Curtin University Dubai · Master of CyberSecurity]... OK',
        '> tactical system status: SECURE & READY'
      ]
    : [
        '> initializing cyber sentinel tactical mainframe...',
        '> loading security arsenal [Nmap, Splunk, SpiderFoot, Kali Linux, Python]... OK',
        '> scanning repositories [Zero Trust Sentinel, Cyber Anomaly Detector]... OK',
        '> loading certifications [Cisco Jr Analyst, Hacker School, IIT Kharagpur]... OK',
        '> verifying academic credentials [Curtin University Dubai · Master of CyberSecurity]... OK',
        '> tactical system status: ONLINE & SECURE'
      ];

  // Auto-typing boot sequence
  useEffect(() => {
    setOutputLines([]);
    setBootCompleted(false);
    let currentIdx = 0;
    const timer = setInterval(() => {
      if (currentIdx < initialBootSequence.length) {
        const nextLine = initialBootSequence[currentIdx];
        setOutputLines((prev) => [...prev, nextLine]);
        currentIdx++;
      } else {
        setBootCompleted(true);
        clearInterval(timer);
      }
    }, 350);

    return () => clearInterval(timer);
  }, [theme]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputLines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const userPromptLine = `$ ${cmd}`;
    let responseLines: string[] = [];

    switch (trimmed) {
      case 'help':
        responseLines = [
          'AVAILABLE SYSTEM COMMANDS:',
          '  whoami      - Display professional profile & background',
          '  skills      - List core cybersecurity and technical arsenal',
          '  projects    - Show tactical engineering and security repositories',
          '  certs       - Display verified certifications and workshops',
          '  contact     - Reveal verified email, telephone, and location',
          '  clear       - Reset terminal buffer'
        ];
        break;

      case 'whoami':
        responseLines = [
          `OPERATIVE: ${PERSONAL_INFO.name}`,
          `SPECIALIZATION: Master of CyberSecurity, Curtin University Dubai`,
          `UNDERGRAD: B.Tech in Computer Science & Engineering, AITAM`,
          `FOCUS: Network Reconnaissance, Threat Hunting, OSINT, Defensive Hardening`,
          `LOCATION: ${PERSONAL_INFO.location}`
        ];
        break;

      case 'skills':
        responseLines = [
          'SYSTEM ARSENAL & SKILLS:',
          '  [TOOLS]: Nmap, Censys, Splunk, SpiderFoot, Maltego, theHarvester, Angry IP, Netdiscover, Telnet',
          '  [LANGUAGES]: Python, C, C++, Java, HTML, CSS, JavaScript, SQL',
          '  [SYSTEMS]: Kali Linux, Parrot OS, Windows (WSL & PowerShell)',
          '  [DATABASE]: MySQL, Relational Database Management'
        ];
        break;

      case 'projects':
        responseLines = [
          'TACTICAL REPOSITORIES:',
          '  01. Advanced Password Analyzer & Cracker (Python, Hashlib, Zxcvbn)',
          '  02. Intrusion Detection Sentinel (Python, Scapy, Socket)',
          '  03. Cybersecurity Defense Chatbot (Python, NLP, Regex)',
          '  04. Steganography Vault (Python, Cryptography, OpenCV)'
        ];
        break;

      case 'certs':
        responseLines = [
          'VERIFIED CREDENTIALS:',
          '  - Cisco Junior Cybersecurity Analyst Career Path (Cisco)',
          '  - Cybersecurity Professional Training (Hacker School, 180 hrs)',
          '  - Ethical Hacking & Security Workshop (IIT Kharagpur)',
          '  - Core Python & Cybersecurity Foundations (Curtin University Dubai)',
          '  - AI Foundation & Threat Detection Tools'
        ];
        break;

      case 'contact':
        responseLines = [
          'DIRECT DISPATCH CHANNELS:',
          `  Email:    ${PERSONAL_INFO.email}`,
          `  Phone:    ${PERSONAL_INFO.phone}`,
          `  LinkedIn: ${PERSONAL_INFO.linkedin}`,
          `  GitHub:   ${PERSONAL_INFO.github}`,
          `  Location: ${PERSONAL_INFO.location}`
        ];
        break;

      case 'clear':
        setOutputLines([]);
        setInputValue('');
        return;

      default:
        responseLines = [
          `zsh: command not found: ${cmd}`,
          "Type 'help' to view the list of available commands."
        ];
        break;
    }

    setOutputLines((prev) => [...prev, userPromptLine, ...responseLines]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'certs', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-6 relative bg-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left space-y-2">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-wider shadow-sm font-cinematic border ${
            isBatman
              ? 'bg-[#17171C] text-[#E8DCC8] border-[#54202B]'
              : 'bg-[#051f2d] text-cyan-200 border-cyan-500/30'
          }`}>
            <TerminalIcon className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            <span>INTERACTIVE TACTICAL SHELL</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold uppercase font-cinematic tracking-widest leading-none drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>
            CYBERSECURITY TERMINAL
          </h2>
          <p className={`text-xs sm:text-sm font-light max-w-xl leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Query system records, inspect tool configurations, and test defensive telemetry in real-time.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className={`rounded-3xl shadow-[0_20px_50px_rgba(11,11,15,0.95)] overflow-hidden border ${
          isBatman
            ? 'bg-[#0B0B0F] border-[#54202B]'
            : 'bg-[#020d15] border-cyan-500/30'
        }`}>
          
          {/* Terminal Window Chrome / Title Bar */}
          <div className={`px-5 py-3.5 border-b flex items-center justify-between ${
            isBatman
              ? 'bg-[#17171C] border-[#54202B]'
              : 'bg-[#061824] border-cyan-500/25'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full inline-block ${
                isBatman ? 'bg-[#A51C2D] shadow-[0_0_8px_rgba(165,28,45,0.6)]' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
              }`} />
              <span className={`w-3 h-3 rounded-full inline-block ${
                isBatman ? 'bg-[#C45A50]' : 'bg-teal-400'
              }`} />
              <span className={`w-3 h-3 rounded-full inline-block ${
                isBatman ? 'bg-[#54202B]' : 'bg-emerald-400'
              }`} />
              <span className={`text-xs ml-2 hidden sm:inline font-mono ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
              }`}>
                {isBatman ? 'sonu@batcomputer-sentinel: ~ (zsh)' : 'sonu@curtin-sentinel: ~ (zsh)'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <Shield className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span className={`hidden sm:inline uppercase tracking-widest font-cinematic text-xs ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
              }`}>
                DEFENSE INTEGRITY: 100%
              </span>
            </div>
          </div>

          {/* Terminal Screen Canvas */}
          <div className={`p-6 text-xs sm:text-sm min-h-[300px] max-h-[440px] overflow-y-auto custom-scrollbar space-y-2 font-mono ${
            isBatman
              ? 'bg-[#0B0B0F] text-[#E8DCC8]'
              : 'bg-[#020d15] text-slate-200'
          }`}>
            
            {/* Output lines */}
            {outputLines.map((line, i) => {
              const isPrompt = line.startsWith('$');
              const isHighlight = line.includes('READY') || line.includes('OK') || line.includes('SECURE') || line.includes('ONLINE');
              
              let textColor = isBatman ? 'text-[#B9A1A0]' : 'text-slate-400';
              if (isPrompt) {
                textColor = isBatman ? 'text-[#C45A50] font-bold' : 'text-cyan-400 font-bold';
              } else if (isHighlight) {
                textColor = isBatman ? 'text-[#E8DCC8] font-semibold' : 'text-emerald-400 font-semibold';
              }

              return (
                <div key={i} className={`leading-relaxed ${textColor}`}>
                  {line}
                </div>
              );
            })}

            {/* Input Prompt Row */}
            {bootCompleted && (
              <div className={`flex items-center gap-2 pt-2 ${
                isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'
              }`}>
                <span className="font-bold">$</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type command or click quick action below..."
                  className={`flex-1 bg-transparent focus:outline-none text-xs sm:text-sm font-mono ${
                    isBatman 
                      ? 'text-[#E8DCC8] placeholder-[#B9A1A0]/40' 
                      : 'text-white placeholder-slate-500'
                  }`}
                  autoFocus
                />
                <button
                  onClick={() => handleCommand(inputValue)}
                  className={`p-1.5 rounded-lg cursor-pointer transition-all border ${
                    isBatman
                      ? 'bg-[#310D18] hover:bg-[#A51C2D] text-[#E8DCC8] border-[#54202B]'
                      : 'bg-[#042435] hover:bg-cyan-600 text-cyan-200 border-cyan-500/30'
                  }`}
                  title="Run command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Action Badges */}
          <div className={`p-3.5 border-t flex flex-wrap items-center gap-2 ${
            isBatman
              ? 'bg-[#17171C] border-[#54202B]'
              : 'bg-[#061824] border-cyan-500/20'
          }`}>
            <span className={`text-xs mr-1 uppercase font-cinematic tracking-widest text-[11px] ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
            }`}>
              QUICK COMMANDS:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                  isBatman
                    ? 'bg-[#310D18] hover:bg-[#A51C2D] text-[#E8DCC8] border-[#54202B]'
                    : 'bg-[#072535] hover:bg-[#0c3a54] text-cyan-200 border-cyan-500/30'
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
