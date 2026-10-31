import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Mail, 
  Phone,
  Camera,
  CheckCircle2,
  FileCheck,
  Linkedin,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SonuPortrait } from '../SonuPortrait';
import { saveLargeFile, safeLocalStorageSet } from '../../utils/idbStorage';
import { useTheme } from '../../context/ThemeContext';

interface SonuActiveSentinelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SonuActiveSentinelModal: React.FC<SonuActiveSentinelModalProps> = ({
  isOpen,
  onClose
}) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const [customBgUrl, setCustomBgUrl] = useState<string | null>(() => {
    return localStorage.getItem('sonu_custom_bg_url') || null;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const courseSubjects = [
    { code: 'COMP6001', name: 'Advanced Computer Security', focus: 'Threat modeling, kernel exploitation & defensive mitigations' },
    { code: 'NETW6002', name: 'Network Security Architecture', focus: 'Packet telemetry, firewall segmentation & zero-trust paradigms' },
    { code: 'INFO6003', name: 'Cyber Incident Response & Forensics', focus: 'SIEM event correlation, memory volatile capture & chain of custody' },
    { code: 'COMP6004', name: 'Applied Cryptography & Privacy', focus: 'Public-key cryptosystems, post-quantum ciphers & secure hashing' },
    { code: 'ISYS6005', name: 'Information Security Governance & Compliance', focus: 'NIST CSF, ISO/IEC 27001, audit frameworks & risk assessment' },
    { code: 'COMP6006', name: 'Ethical Hacking & Penetration Testing', focus: 'Offensive reconnaissance, privilege escalation & MITRE mapping' },
    { code: 'NETW6007', name: 'Cloud Infrastructure Security', focus: 'AWS/GCP IAM policy hardening, container runtime security & VPC design' },
    { code: 'COMP6008', name: 'Machine Learning for Cybersecurity', focus: 'Anomaly detection heuristics, adversarial ML & AI intrusion triage' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl my-auto border-2 rounded-[32px] overflow-hidden flex flex-col max-h-[90vh] transition-colors ${
          isBatman
            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] shadow-[0_25px_60px_rgba(11,11,15,0.95)]'
            : 'bg-[#030e16] border-cyan-500/30 text-slate-100 shadow-[0_25px_60px_rgba(3,14,22,0.95)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Atmosphere Image */}
        {customBgUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none filter blur-sm"
            style={{ backgroundImage: `url(${customBgUrl})` }}
          />
        )}

        {/* Modal Top Bar */}
        <div className={`relative z-10 flex items-center justify-between px-6 py-4 border-b ${
          isBatman ? 'border-[#54202B] bg-[#17171C]' : 'border-cyan-500/20 bg-[#061824]'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border uppercase tracking-wider font-cinematic ${
              isBatman 
                ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]' 
                : 'bg-[#042435] text-cyan-200 border-cyan-500/30'
            }`}>
              CARD 01 · MASTER'S CANDIDATE
            </span>
            <h3 className={`text-base sm:text-lg font-bold truncate max-w-md uppercase font-cinematic tracking-wide ${
              isBatman ? 'text-[#E8DCC8]' : 'text-white'
            }`}>
              CURTIN UNIVERSITY DUBAI DOSSIER
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all cursor-pointer text-xs font-bold font-cinematic uppercase ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                : 'bg-[#061824] hover:bg-[#0c2f47] text-slate-300 hover:text-white border-cyan-500/25'
            }`}
            aria-label="Close"
          >
            <X className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            <span>CLOSE</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="relative z-10 p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Top Profile Header */}
          <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 sm:p-6 rounded-3xl border shadow-sm ${
            isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#051724] border-cyan-500/25'
          }`}>
            
            {/* Sonu's Photo */}
            <div className="shrink-0 flex flex-col items-center gap-2.5">
              <div className="relative group">
                <div className={`w-44 h-56 sm:w-48 sm:h-60 rounded-3xl overflow-hidden border-2 shadow-md ${
                  isBatman ? 'border-[#54202B] bg-[#0B0B0F]' : 'border-cyan-500/30 bg-[#030e16]'
                }`}>
                  <SonuPortrait className="w-full h-full" />
                </div>
                <div className={`absolute -bottom-2 inset-x-0 mx-auto w-fit px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 font-cinematic ${
                  isBatman
                    ? 'bg-[#A51C2D] text-[#E8DCC8]'
                    : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    isBatman ? 'bg-[#E8DCC8]' : 'bg-slate-950'
                  }`} />
                  <span>ACTIVE SENTINEL</span>
                </div>
              </div>

              {/* Upload Original File Button */}
              <label className={`cursor-pointer text-xs flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm transition-all mt-2 active:scale-95 font-cinematic uppercase tracking-wider text-[11px] ${
                isBatman
                  ? 'text-[#E8DCC8] hover:text-white bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B]'
                  : 'text-cyan-200 hover:text-white bg-[#041c2c] hover:bg-[#072d42] border-cyan-500/30'
              }`}>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = async (event) => {
                        const base64 = event.target?.result as string;
                        if (base64) {
                          safeLocalStorageSet('sonu_profile_photo', base64);
                          await saveLargeFile('sonu_profile_photo', base64);
                          window.dispatchEvent(new Event('sonu_photo_updated'));
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <Camera className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>Upload Original Photo</span>
              </label>
            </div>

            {/* Academic & Personal Identification */}
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold mb-1 uppercase font-cinematic tracking-wider ${
                  isBatman
                    ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#042435] border-cyan-500/30 text-cyan-300'
                }`}>
                  <GraduationCap className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span>POSTGRADUATE CANDIDATE</span>
                </div>
                <h2 className={`text-3xl sm:text-4xl font-bold uppercase tracking-widest font-cinematic drop-shadow-sm ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}>
                  SONU ELLUMALLA
                </h2>
                <div className={`text-sm font-semibold font-mono mt-0.5 ${
                  isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                }`}>
                  Pursuing · Master of Cybersecurity
                </div>
              </div>

              {/* College & Timeline Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                
                <div className={`flex items-center gap-2 p-2.5 rounded-xl border shadow-sm ${
                  isBatman ? 'text-[#E8DCC8] bg-[#0B0B0F] border-[#54202B]' : 'text-slate-200 bg-[#030e16] border-cyan-500/20'
                }`}>
                  <GraduationCap className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Current University</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Curtin University Dubai</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2 p-2.5 rounded-xl border shadow-sm ${
                  isBatman ? 'text-[#E8DCC8] bg-[#0B0B0F] border-[#54202B]' : 'text-slate-200 bg-[#030e16] border-cyan-500/20'
                }`}>
                  <MapPin className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Location</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Academic City, Dubai, UAE</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2 p-2.5 rounded-xl border shadow-sm ${
                  isBatman ? 'text-[#E8DCC8] bg-[#0B0B0F] border-[#54202B]' : 'text-slate-200 bg-[#030e16] border-cyan-500/20'
                }`}>
                  <Calendar className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Course Duration</div>
                    <div className={`font-bold ${isBatman ? 'text-[#C45A50]' : 'text-cyan-300'}`}>August 2026 – July 2027</div>
                  </div>
                </div>

                {/* College Website Link Button */}
                <a
                  href="https://curtindubai.ac.ae/"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-2.5 rounded-xl font-bold transition-all shadow-md group font-cinematic uppercase tracking-wider ${
                    isBatman
                      ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                      : 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:opacity-90 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                  }`}
                >
                  <span className="text-xs">VISIT COLLEGE WEBSITE</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

              </div>
            </div>

          </div>

          {/* Current Course Subjects */}
          <div className={`p-5 sm:p-6 rounded-3xl border shadow-sm space-y-3 ${
            isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#051724] border-cyan-500/25'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <h3 className={`text-xs sm:text-sm font-bold uppercase tracking-widest font-cinematic ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                }`}>
                  MASTER OF CYBERSECURITY · COURSE CURRICULUM (8 SUBJECTS)
                </h3>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase font-cinematic ${
                isBatman 
                  ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]' 
                  : 'bg-[#042435] text-cyan-200 border-cyan-500/30'
              }`}>
                Curtin Dubai Syllabus
              </span>
            </div>

            {/* Core Topics Focus */}
            <div className={`p-3.5 rounded-2xl border ${
              isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/20'
            }`}>
              <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block mb-1 ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
              }`}>
                Core Topics:
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
              }`}>
                Penetration testing, secure DevOps, network defense, data security, intrusion detection, and securing hardware and operating systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {courseSubjects.map((sub, i) => (
                <div 
                  key={sub.code}
                  className={`p-3.5 rounded-2xl border transition-colors space-y-1 shadow-sm ${
                    isBatman
                      ? 'bg-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D]'
                      : 'bg-[#030e16] border-cyan-500/20 hover:border-cyan-400/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-bold uppercase ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>{sub.code}</span>
                    <span className={`text-[10px] font-semibold ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>UNIT 0{i + 1}</span>
                  </div>
                  <div className={`text-xs sm:text-sm font-bold uppercase font-cinematic tracking-wide ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    {sub.name}
                  </div>
                  <div className={`text-xs font-light leading-relaxed pt-0.5 ${
                    isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                  }`}>
                    {sub.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className={`relative z-10 px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#061824] border-cyan-500/20'
        }`}>
          <div className={`flex items-center gap-4 text-xs font-mono ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            <a href={`mailto:${PERSONAL_INFO.email}`} className={`flex items-center gap-1.5 transition-colors ${
              isBatman ? 'hover:text-[#E8DCC8]' : 'hover:text-cyan-300'
            }`}>
              <Mail className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className={`flex items-center gap-1.5 transition-colors ${
              isBatman ? 'hover:text-[#E8DCC8]' : 'hover:text-cyan-300'
            }`}>
              <Phone className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${
                isBatman ? 'hover:text-[#E8DCC8]' : 'hover:text-cyan-300'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${
                isBatman ? 'hover:text-[#E8DCC8]' : 'hover:text-cyan-300'
              }`}
              title="GitHub Profile"
            >
              <Github className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className={`w-full sm:w-auto px-7 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-cinematic transition-all shadow-md cursor-pointer ${
              isBatman
                ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                : 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-90 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            }`}
          >
            CLOSE WINDOW
          </button>
        </div>

      </div>
    </div>
  );
};
