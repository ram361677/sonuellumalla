import React, { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, Shield, AlertTriangle, CheckCircle, Terminal, Play, Pause, RefreshCw, Send, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto font-sans">
      <div 
        className={`relative w-full max-w-4xl my-auto border-2 rounded-[28px] overflow-hidden flex flex-col max-h-[90vh] transition-colors ${
          isBatman
            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] shadow-[0_25px_60px_rgba(11,11,15,0.95)]'
            : 'bg-[#030e16] border-cyan-500/30 text-slate-100 shadow-[0_25px_60px_rgba(3,14,22,0.95)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isBatman ? 'border-[#54202B] bg-[#17171C]' : 'border-cyan-500/20 bg-[#061824]'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider font-cinematic border ${
              isBatman
                ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                : 'bg-[#042435] text-cyan-300 border-cyan-500/30'
            }`}>
              PROJECT {project.number}
            </span>
            <h3 className={`text-base sm:text-lg font-bold truncate max-w-md uppercase font-cinematic tracking-wide ${
              isBatman ? 'text-[#E8DCC8]' : 'text-white'
            }`}>
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full border transition-colors ${
                isBatman
                  ? 'text-[#E8DCC8] hover:text-white bg-[#310D18] hover:bg-[#A51C2D] border-[#54202B]'
                  : 'text-cyan-200 hover:text-white bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/30'
              }`}
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isBatman
                  ? 'text-[#B9A1A0] hover:text-white bg-[#17171C] hover:bg-[#310D18] border-[#54202B]'
                  : 'text-slate-400 hover:text-white bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/20'
              }`}
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className={`text-xs uppercase tracking-widest font-bold mb-2 font-cinematic ${
              isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
            }`}>
              SYSTEM ARCHITECTURE & METHODOLOGY
            </h4>
            <p className={`text-sm leading-relaxed font-light ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, i) => (
              <div 
                key={i} 
                className={`flex items-start gap-2.5 p-3.5 rounded-2xl border ${
                  isBatman ? 'bg-[#17171C]/80 border-[#54202B]' : 'bg-[#051724] border-cyan-500/25'
                }`}
              >
                <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'
                }`} />
                <span className={`text-xs leading-normal font-light ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-slate-200'
                }`}>{feat}</span>
              </div>
            ))}
          </div>

          {/* Interactive Live Demo Container */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse ${
                  isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
                }`} />
                <span className={`text-xs font-bold uppercase tracking-wider font-cinematic ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}>
                  INTERACTIVE LAB SIMULATOR
                </span>
              </div>
              <span className={`text-[11px] uppercase font-mono ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`}>
                CLIENT-SIDE ENGINE ACTIVE
              </span>
            </div>

            {project.demoType === 'password' && <PasswordAnalyzerDemo />}
            {project.demoType === 'ids' && <IDSSimulatorDemo />}
            {project.demoType === 'chatbot' && <ChatbotSimulatorDemo />}
            {project.demoType === 'medical' && <MedicalAnalyzerDemo />}
            {project.demoType === 'plant' && <AgriAIDemo />}
            {project.demoType === 'doctor' && <BookDoctorDemo />}
          </div>

          {/* Technologies Used */}
          <div className={`pt-4 border-t ${isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'}`}>
            <div className={`text-xs uppercase font-bold tracking-widest mb-2 font-cinematic ${
              isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
            }`}>
              TECHNOLOGIES & PROTOCOLS
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 rounded-full text-xs font-mono border ${
                    isBatman 
                      ? 'bg-[#17171C] text-[#E8DCC8] border-[#54202B]' 
                      : 'bg-[#051724] text-cyan-200 border-cyan-500/25'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#061824] border-cyan-500/20'
        }`}>
          <span className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
            Designed & Developed by Sonu Ellumalla
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 px-6 py-2 text-xs font-bold rounded-full transition-transform hover:scale-105 uppercase font-cinematic tracking-wider shadow-md ${
              isBatman
                ? 'text-[#E8DCC8] bg-[#A51C2D] hover:bg-[#C45A50]'
                : 'text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-90 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Open Source Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// DEMO 1: AI Password Analyzer
const PasswordAnalyzerDemo: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const [password, setPassword] = useState('Passw0rd#2026!');
  const [showPlain, setShowPlain] = useState(false);

  // Entropy Calculation: E = L * log2(R)
  const calculateMetrics = (pwd: string) => {
    let poolSize = 0;
    if (/[a-z]/.test(pwd)) poolSize += 26;
    if (/[A-Z]/.test(pwd)) poolSize += 26;
    if (/[0-9]/.test(pwd)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;

    const length = pwd.length;
    const entropy = length > 0 && poolSize > 0 ? Math.round(length * Math.log2(poolSize)) : 0;

    let strength: 'Weak' | 'Moderate' | 'Strong' | 'Elite' = 'Weak';
    let crackTime = 'Instant (< 1 second)';

    if (entropy > 80 && length >= 14) {
      strength = 'Elite';
      crackTime = '~ 3.4 Million Years';
    } else if (entropy > 60 && length >= 10) {
      strength = 'Strong';
      crackTime = '~ 420 Centuries';
    } else if (entropy > 40 && length >= 8) {
      strength = 'Moderate';
      crackTime = '~ 3 Days to 2 Weeks';
    } else {
      strength = 'Weak';
      crackTime = 'Under 4 minutes on 8x RTX 4090 GPU';
    }

    return { entropy, strength, crackTime, poolSize };
  };

  const { entropy, strength, crackTime } = calculateMetrics(password);

  const presets = [
    'admin123',
    'Sonu@Cyber2026!',
    'Correct-Horse-Battery-Staple-99#',
    'xK9$mQ2!wL8#vP4'
  ];

  return (
    <div className={`p-5 rounded-2xl border space-y-4 text-xs ${
      isBatman 
        ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' 
        : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      <div className="space-y-1.5">
        <label className={`flex items-center justify-between ${isBatman ? 'text-[#E8DCC8]' : 'text-slate-200'}`}>
          <span className={`uppercase font-bold font-cinematic tracking-wider ${
            isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
          }`}>Test Password / Passphrase:</span>
          <span className={`text-[11px] ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Zero telemetry leaves browser</span>
        </label>
        <div className="relative">
          <input
            type={showPlain ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl text-sm font-mono focus:outline-none border ${
              isBatman
                ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] focus:border-[#A51C2D]'
                : 'bg-[#030e16] border-cyan-500/30 text-white focus:border-cyan-400'
            }`}
          />
          <button
            onClick={() => setShowPlain(!showPlain)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${
              isBatman ? 'text-[#C45A50] hover:text-[#E8DCC8]' : 'text-cyan-400 hover:text-white'
            }`}
          >
            {showPlain ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Preset test buttons */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className={`text-[11px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Load test preset:</span>
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => setPassword(p)}
            className={`px-3 py-1 rounded-full text-[11px] transition-colors cursor-pointer font-mono border ${
              isBatman
                ? 'bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#030e16] hover:bg-[#072435] border-cyan-500/30 text-cyan-200'
            }`}
          >
            {p.substring(0, 14)}...
          </button>
        ))}
      </div>

      {/* Score Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className={`p-3 rounded-2xl border text-center ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
        }`}>
          <div className={`text-[10px] uppercase font-bold font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>SHANNON ENTROPY</div>
          <div className={`text-lg font-bold mt-1 tabular-nums font-mono ${
            isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'
          }`}>{entropy} bits</div>
        </div>

        <div className={`p-3 rounded-2xl border text-center ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
        }`}>
          <div className={`text-[10px] uppercase font-bold font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>STRENGTH CLASS</div>
          <div className={`text-lg font-bold mt-1 uppercase font-cinematic tracking-wider ${
            strength === 'Elite' ? 'text-emerald-400' :
            strength === 'Strong' ? (isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300') :
            strength === 'Moderate' ? (isBatman ? 'text-[#C45A50]' : 'text-amber-400') : (isBatman ? 'text-[#A51C2D]' : 'text-orange-400')
          }`}>
            {strength}
          </div>
        </div>

        <div className={`p-3 rounded-2xl border text-center col-span-2 ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
        }`}>
          <div className={`text-[10px] uppercase font-bold font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>ESTIMATED BRUTE FORCE CRACK TIME</div>
          <div className={`text-sm font-bold mt-1.5 truncate font-mono ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>{crackTime}</div>
        </div>
      </div>

      {/* Recommendations */}
      <div className={`p-3.5 rounded-2xl border space-y-1 text-[11px] ${
        isBatman ? 'bg-[#0B0B0F]/80 border-[#54202B] text-[#B9A1A0]' : 'bg-[#030e16]/80 border-cyan-500/20 text-slate-300'
      }`}>
        <span className={`font-bold block uppercase font-cinematic tracking-wider ${
          isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
        }`}>AI Security Recommendations:</span>
        {password.length < 14 && <div>• Increase character count to at least 14 characters or utilize a 4-word Diceware passphrase.</div>}
        {!/[^a-zA-Z0-9]/.test(password) && <div>• Append non-alphanumeric punctuation symbols to expand pool space.</div>}
        {/(admin|password|1234|qwerty)/i.test(password) && (
          <div className={isBatman ? 'text-[#A51C2D]' : 'text-amber-400'}>• High-risk common dictionary sequence detected! Replace immediately.</div>
        )}
        {password.length >= 14 && entropy >= 70 && (
          <div className={isBatman ? 'text-[#E8DCC8]' : 'text-emerald-400'}>• Excellent entropy. Resilient against GPU cluster dictionary and mask attacks.</div>
        )}
      </div>
    </div>
  );
};

// DEMO 2: AI Intrusion Detection Simulator
const IDSSimulatorDemo: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const [isRunning, setIsRunning] = useState(true);
  const [attackType, setAttackType] = useState<'brute' | 'syn' | 'ddos' | 'normal'>('brute');
  const [logs, setLogs] = useState<Array<{ time: string; ip: string; port: number; event: string; status: 'BLOCKED' | 'FLAGGED' | 'ALLOWED'; severity: 'CRITICAL' | 'WARN' | 'INFO' }>>([
    { time: '14:22:01', ip: '192.168.1.104', port: 22, event: 'SSH Failed Auth (18 attempts/sec)', status: 'BLOCKED', severity: 'CRITICAL' },
    { time: '14:22:03', ip: '10.0.4.15', port: 80, event: 'HTTP GET /api/v1/health', status: 'ALLOWED', severity: 'INFO' },
    { time: '14:22:07', ip: '45.33.32.156', port: 443, event: 'Port Scan: SYN Sweep [1-1024]', status: 'FLAGGED', severity: 'WARN' }
  ]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const now = new Date().toTimeString().split(' ')[0];
      const randomIP = `185.${Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      
      let newLog;
      if (attackType === 'brute') {
        newLog = { time: now, ip: randomIP, port: 22, event: 'SSH Brute-Force Signature Triggered', status: 'BLOCKED' as const, severity: 'CRITICAL' as const };
      } else if (attackType === 'syn') {
        newLog = { time: now, ip: randomIP, port: Math.floor(Math.random() * 1000) + 1, event: 'Anomalous SYN packet flag sequence (Nmap scan)', status: 'FLAGGED' as const, severity: 'WARN' as const };
      } else if (attackType === 'ddos') {
        newLog = { time: now, ip: randomIP, port: 80, event: 'High packet volume threshold exceeded (> 10k pps)', status: 'BLOCKED' as const, severity: 'CRITICAL' as const };
      } else {
        newLog = { time: now, ip: '10.0.2.88', port: 443, event: 'TLS 1.3 Normal Client Hello Handshake', status: 'ALLOWED' as const, severity: 'INFO' as const };
      }

      setLogs((prev) => [newLog, ...prev.slice(0, 5)]);
    }, 2200);

    return () => clearInterval(interval);
  }, [isRunning, attackType]);

  return (
    <div className={`p-5 rounded-2xl border space-y-3 text-xs ${
      isBatman 
        ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' 
        : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      <div className={`flex flex-wrap items-center justify-between gap-2 pb-2 border-b ${
        isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
      }`}>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border cursor-pointer font-cinematic uppercase tracking-wider ${
              isBatman
                ? 'bg-[#0B0B0F] hover:bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                : 'bg-[#042435] hover:bg-[#073044] text-cyan-200 border-cyan-500/30'
            }`}
          >
            {isRunning ? (
              <Pause className={`w-3.5 h-3.5 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
            ) : (
              <Play className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            )}
            <span>{isRunning ? 'PAUSE STREAM' : 'RESUME'}</span>
          </button>
          <span className={`text-[11px] font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
            Status: {isRunning ? 'Monitoring live flows' : 'Halted'}
          </span>
        </div>

        {/* Attack Vector Selector */}
        <div className="flex items-center gap-1">
          <span className={`text-[11px] hidden sm:inline uppercase font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>Inject Vector:</span>
          {(['brute', 'syn', 'ddos', 'normal'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setAttackType(mode)}
              className={`px-3 py-0.5 rounded-full text-[10px] uppercase font-bold transition-colors cursor-pointer font-mono ${
                attackType === mode
                  ? (isBatman ? 'bg-[#A51C2D] text-[#E8DCC8]' : 'bg-cyan-500 text-slate-950 font-bold shadow-md')
                  : (isBatman ? 'bg-[#0B0B0F] text-[#B9A1A0] hover:text-[#E8DCC8] border border-[#54202B]' : 'bg-[#030e16] text-slate-300 hover:text-cyan-200 border border-cyan-500/25')
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Live Log Stream Table */}
      <div className="space-y-1.5 font-mono">
        {logs.map((log, i) => (
          <div 
            key={i} 
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2.5 rounded-xl border ${
              isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`tabular-nums ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>{log.time}</span>
              <span className={`font-bold ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-300'}`}>{log.ip}:{log.port}</span>
              <span className={`text-xs font-normal ${isBatman ? 'text-[#E8DCC8]' : 'text-slate-200'}`}>{log.event}</span>
            </div>
            <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold w-fit uppercase ${
              log.status === 'BLOCKED'
                ? (isBatman ? 'bg-[#310D18] text-[#E8DCC8] border border-[#A51C2D]' : 'bg-cyan-950/80 text-cyan-200 border border-cyan-500/40')
                : log.status === 'FLAGGED'
                ? (isBatman ? 'bg-[#17171C] text-[#C45A50] border border-[#54202B]' : 'bg-amber-950/60 text-amber-300 border border-amber-500/40')
                : (isBatman ? 'bg-[#17171C] text-[#B9A1A0] border border-[#54202B]' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40')
            }`}>
              {log.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// DEMO 3: AI Cybersecurity Chatbot
const ChatbotSimulatorDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am Sonu\'s Tactical Security Advisor. Ask me about threat incident response, vulnerability triage, or mitigation playbooks.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (query?: string) => {
    const textToSend = query || input;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    setInput('');

    setTimeout(() => {
      let botReply = '';
      const lower = textToSend.toLowerCase();
      if (lower.includes('powershell') || lower.includes('encoded')) {
        botReply = '🚨 PowerShell Triage Protocol: 1) Extract encoded payload via base64 -d. 2) Inspect for IEX (Invoke-Expression), DownloadString, or memory-injection APIs. 3) Cross-reference originating PID and parent process (e.g., word.exe spawning powershell.exe is MITRE T1059.001). 4) Isolate host immediately.';
      } else if (lower.includes('ransomware') || lower.includes('containment')) {
        botReply = '🛡️ Immediate Ransomware Checklist: 1) Sever network interfaces (disable NIC & Wi-Fi) to stop lateral spread. 2) Preserve memory state for volatility forensics. 3) Identify patient zero via SIEM SMB/RDP event spikes. 4) Validate immutable offline backups.';
      } else {
        botReply = '🔍 Analysis: Under SOC Tier-1 guidelines, evaluate the telemetry indicators against MITRE ATT&CK techniques, verify IOC reputational scores via VirusTotal & Censys, and record event timestamps in the incident ticketing system.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  return (
    <div className={`p-4 rounded-2xl border space-y-3 text-xs ${
      isBatman ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      {/* Quick Prompts */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className={`text-[11px] uppercase font-cinematic ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Quick scenario:</span>
        <button
          onClick={() => handleSend('How to triage suspicious base64 PowerShell command?')}
          className={`px-3 py-1 rounded-full border text-[11px] cursor-pointer transition-colors ${
            isBatman 
              ? 'bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]' 
              : 'bg-[#030e16] hover:bg-[#072435] border-cyan-500/30 text-cyan-200'
          }`}
        >
          Suspicious PowerShell
        </button>
        <button
          onClick={() => handleSend('Immediate containment steps for suspected ransomware?')}
          className={`px-3 py-1 rounded-full border text-[11px] cursor-pointer transition-colors ${
            isBatman 
              ? 'bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B] text-[#E8DCC8]' 
              : 'bg-[#030e16] hover:bg-[#072435] border-cyan-500/30 text-cyan-200'
          }`}
        >
          Ransomware Containment
        </button>
      </div>

      {/* Messages */}
      <div className={`h-44 overflow-y-auto space-y-2 p-3 rounded-2xl border custom-scrollbar ${
        isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/25'
      }`}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
              m.sender === 'user' 
                ? (isBatman ? 'bg-[#A51C2D] text-[#E8DCC8] font-medium shadow-md' : 'bg-cyan-500 text-slate-950 font-bold shadow-md')
                : (isBatman ? 'bg-[#17171C] text-[#B9A1A0] border border-[#54202B] font-light' : 'bg-[#072030] text-slate-200 border border-cyan-500/25 font-light')
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask a security question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className={`flex-1 px-4 py-2.5 rounded-full text-xs focus:outline-none border ${
            isBatman 
              ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] focus:border-[#A51C2D] placeholder:text-[#B9A1A0]/40' 
              : 'bg-[#030e16] border-cyan-500/30 text-white focus:border-cyan-400 placeholder:text-slate-500'
          }`}
        />
        <button
          onClick={() => handleSend()}
          className={`p-2.5 rounded-full font-bold cursor-pointer transition-transform hover:scale-105 shadow-md ${
            isBatman 
              ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]' 
              : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// DEMO 4: Medical Analyzer Demo
const MedicalAnalyzerDemo: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  return (
    <div className={`p-4 rounded-2xl border space-y-3 text-xs ${
      isBatman ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      <div className={`font-bold uppercase font-cinematic tracking-wider ${
        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
      }`}>Sample Clinical Document Parser:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className={`p-3.5 rounded-2xl border ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
        }`}>
          <div className={`text-[10px] uppercase font-bold font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>Fasting Blood Glucose</div>
          <div className={`text-sm font-bold tabular-nums mt-0.5 font-mono ${
            isBatman ? 'text-[#A51C2D]' : 'text-amber-400'
          }`}>126 mg/dL (Elevated)</div>
          <div className={`text-[11px] mt-1 font-light leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Plain Language: Above normal standard range (70-99 mg/dL). Indicates prediabetes or glucose intolerance requiring dietary consultation.
          </div>
        </div>
        <div className={`p-3.5 rounded-2xl border ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
        }`}>
          <div className={`text-[10px] uppercase font-bold font-cinematic ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>Total Cholesterol / HDL Ratio</div>
          <div className={`text-sm font-bold tabular-nums mt-0.5 font-mono ${
            isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
          }`}>3.8 (Normal Optimal)</div>
          <div className={`text-[11px] mt-1 font-light leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Plain Language: Well within healthy cardiovascular boundary (below 5.0). Good balance of protective cholesterol.
          </div>
        </div>
      </div>
    </div>
  );
};

// DEMO 5: AgriAI Plant Disease Demo
const AgriAIDemo: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  return (
    <div className={`p-4 rounded-2xl border space-y-2 text-xs ${
      isBatman ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      <div className={`font-bold uppercase font-cinematic tracking-wider ${
        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
      }`}>Computer Vision Pathogen Classifier:</div>
      <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
        isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
      }`}>
        <div>
          <div className={`font-bold uppercase font-cinematic tracking-wider ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>Tomato Late Blight (Phytophthora infestans)</div>
          <div className={`text-[11px] mt-0.5 font-light ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>Confidence: 98.4% · Detected via Mobile RGB camera</div>
        </div>
        <span className={`px-3 py-1 rounded-full font-bold uppercase text-[10px] font-cinematic border ${
          isBatman 
            ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]' 
            : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
        }`}>
          DIAGNOSED
        </span>
      </div>
    </div>
  );
};

// DEMO 6: Book a Doctor Using MERN Simulator
const BookDoctorDemo: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Chen · Preventive Medicine');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [patientName, setPatientName] = useState('John Doe');
  const [bookedRecord, setBookedRecord] = useState<{
    _id: string;
    doctor: string;
    patient: string;
    slot: string;
    dbStatus: string;
    sanitized: boolean;
  } | null>(null);

  const handleBook = () => {
    setBookedRecord({
      _id: `ObjectId("${Math.random().toString(16).substring(2, 10)}${Math.random().toString(16).substring(2, 10)}")`,
      doctor: selectedDoctor,
      patient: patientName.trim() || 'Anonymous Patient',
      slot: selectedSlot,
      dbStatus: '201 CREATED · MongoDB Replica Set Confirmed',
      sanitized: true
    });
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 text-xs ${
      isBatman ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' : 'bg-[#051724] border-cyan-500/30 text-slate-100'
    }`}>
      <div className="flex items-center justify-between">
        <span className={`font-bold uppercase font-cinematic tracking-wider ${
          isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
        }`}>
          MERN STACK · MONGODB TRANSACTION SIMULATOR
        </span>
        <span className="font-mono text-[10px] text-emerald-400">
          ● REST API v1.4 LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Doctor Select */}
        <div>
          <label className={`block text-[10px] uppercase font-mono mb-1 ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>
            Consulting Specialist
          </label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className={`w-full p-2 rounded-xl text-xs border focus:outline-none ${
              isBatman
                ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#030e16] border-cyan-500/30 text-white'
            }`}
          >
            <option value="Dr. Sarah Chen · Preventive Medicine">Dr. Sarah Chen · Preventive Medicine</option>
            <option value="Dr. Arjun Patel · Cardiology & Diagnostics">Dr. Arjun Patel · Cardiology</option>
            <option value="Dr. Elena Rostova · Neurology Specialist">Dr. Elena Rostova · Neurology</option>
          </select>
        </div>

        {/* Time Slot */}
        <div>
          <label className={`block text-[10px] uppercase font-mono mb-1 ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>
            Time Slot
          </label>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className={`w-full p-2 rounded-xl text-xs border focus:outline-none ${
              isBatman
                ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#030e16] border-cyan-500/30 text-white'
            }`}
          >
            <option value="09:00 AM">09:00 AM (Available)</option>
            <option value="10:30 AM">10:30 AM (Available)</option>
            <option value="02:15 PM">02:15 PM (Available)</option>
            <option value="04:45 PM">04:45 PM (Available)</option>
          </select>
        </div>

        {/* Patient Name */}
        <div>
          <label className={`block text-[10px] uppercase font-mono mb-1 ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
          }`}>
            Patient Name (Sanitized)
          </label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter patient name..."
            className={`w-full p-2 rounded-xl text-xs border focus:outline-none ${
              isBatman
                ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
                : 'bg-[#030e16] border-cyan-500/30 text-white'
            }`}
          />
        </div>
      </div>

      <button
        onClick={handleBook}
        className={`w-full py-2.5 rounded-xl font-bold font-cinematic uppercase tracking-widest text-xs transition-all cursor-pointer shadow-md ${
          isBatman
            ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
            : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
        }`}
      >
        Execute POST /api/appointments (MongoDB Write)
      </button>

      {bookedRecord && (
        <div className={`p-3.5 rounded-xl font-mono text-[11px] space-y-1.5 border ${
          isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/30'
        }`}>
          <div className="flex items-center justify-between text-emerald-400 font-bold">
            <span>HTTP STATUS: {bookedRecord.dbStatus}</span>
            <span>XSS/NoSQL Protected: YES</span>
          </div>
          <div className={`text-slate-400 pt-1 border-t ${isBatman ? 'border-slate-800' : 'border-slate-800/80'}`}>
            <span className={isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}>// MongoDB Document Inserted:</span>
            <pre className="mt-1 text-[10px] text-slate-300 whitespace-pre-wrap">
{JSON.stringify(bookedRecord, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

