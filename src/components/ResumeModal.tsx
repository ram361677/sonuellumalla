import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Code, Shield, FileText, ExternalLink, Calendar, UserCheck } from 'lucide-react';
import { PERSONAL_INFO, TRAINING_EXPERIENCES, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className={`relative w-full max-w-5xl my-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border transition-colors ${
          isBatman 
            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]' 
            : 'bg-[#030e16] border-cyan-500/30 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b ${
          isBatman ? 'border-[#54202B] bg-[#17171C]' : 'border-cyan-500/20 bg-[#061824]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border ${
              isBatman ? 'bg-[#310D18] text-[#A51C2D] border-[#54202B]' : 'bg-[#042435] text-cyan-400 border-cyan-500/30'
            }`}>
              <Shield className={`w-5 h-5 ${isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'}`} />
            </div>
            <div>
              <h3 className={`text-base font-bold tracking-widest font-cinematic uppercase ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                OFFICIAL RESUME · {PERSONAL_INFO.name}
              </h3>
              <div className={`text-xs font-mono ${
                isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
              }`}>
                CURTIN UNIVERSITY DUBAI · CYBERSECURITY & CS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className={`flex items-center p-1 rounded-xl border ${
              isBatman ? 'bg-[#0B0B0F] border-[#54202B]' : 'bg-[#030e16] border-cyan-500/25'
            }`}>
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                  activeTab === 'interactive'
                    ? isBatman
                      ? 'bg-[#A51C2D] text-[#E8DCC8]'
                      : 'bg-cyan-500 text-black'
                    : isBatman
                      ? 'text-[#B9A1A0] hover:text-[#E8DCC8]'
                      : 'text-slate-400 hover:text-white'
                }`}
              >
                Profile View
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1 ${
                  activeTab === 'pdf'
                    ? isBatman
                      ? 'bg-[#A51C2D] text-[#E8DCC8]'
                      : 'bg-cyan-500 text-black'
                    : isBatman
                      ? 'text-[#B9A1A0] hover:text-[#E8DCC8]'
                      : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="NEW_RESUME_SONU_ELLUMALLA.pdf"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer font-cinematic uppercase tracking-wider border ${
                isBatman
                  ? 'bg-[#310D18] hover:bg-[#A51C2D] text-[#E8DCC8] border-[#54202B]'
                  : 'bg-[#042435] hover:bg-cyan-600 text-cyan-200 border-cyan-500/30'
              }`}
              title="Download Original Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer font-cinematic uppercase tracking-wider border ${
                isBatman
                  ? 'bg-[#17171C] hover:bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                  : 'bg-[#042435] hover:bg-[#08334c] text-cyan-200 border-cyan-500/30'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-xl border cursor-pointer ${
                isBatman
                  ? 'text-[#B9A1A0] hover:text-[#E8DCC8] bg-[#17171C] hover:bg-[#310D18] border-[#54202B]'
                  : 'text-slate-400 hover:text-white bg-[#061824] hover:bg-[#0c2f47] border-cyan-500/20'
              }`}
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive High-Fidelity Resume Body */}
        {activeTab === 'interactive' && (
          <div className={`p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-7 ${
            isBatman ? 'text-[#E8DCC8]' : 'text-slate-100'
          }`}>
            
            {/* Header / Personal Details */}
            <div className={`pb-6 border-b flex flex-col md:flex-row justify-between gap-6 ${
              isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
            }`}>
              <div className="space-y-2">
                <h1 className={`text-3xl sm:text-4xl font-bold tracking-widest font-cinematic uppercase ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}>
                  {PERSONAL_INFO.name}
                </h1>
                <div className={`text-sm font-semibold font-mono ${
                  isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                }`}>
                  {PERSONAL_INFO.role}
                </div>
                <p className={`text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed font-light ${
                  isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                }`}>
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Direct Info Card */}
              <div className={`text-xs space-y-2 shrink-0 p-4 rounded-2xl border min-w-[260px] ${
                isBatman ? 'text-[#B9A1A0] bg-[#17171C] border-[#54202B]' : 'text-slate-300 bg-[#051724] border-cyan-500/25'
              }`}>
                <div className="flex items-center gap-2">
                  <Mail className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono hover:underline">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono hover:underline">{PERSONAL_INFO.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span className="font-mono">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span className="font-mono">DOB: {PERSONAL_INFO.dob} ({PERSONAL_INFO.nationality})</span>
                </div>
                <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] font-mono">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    GitHub: ram361677
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section (4 Qualifications) */}
            <div>
              <h4 className={`flex items-center gap-2 text-xs uppercase tracking-widest font-cinematic font-bold mb-3 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                <BookOpen className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>EDUCATION HISTORY (4 QUALIFICATIONS)</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {PERSONAL_INFO.education.map((edu, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${
                    isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className={`font-bold text-sm font-cinematic uppercase tracking-wide ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>{edu.degree}</span>
                      <span className={`font-mono font-semibold ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>{edu.period}</span>
                    </div>
                    <div className={`text-xs mt-1 font-semibold ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                      {edu.institution} · <span className="font-normal opacity-85">{edu.location}</span>
                    </div>
                    <div className={`text-xs mt-1.5 font-light leading-relaxed ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                      {edu.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships (All 5 Experiences) */}
            <div>
              <h4 className={`flex items-center gap-2 text-xs uppercase tracking-widest font-cinematic font-bold mb-3 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                <Briefcase className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>INTERNSHIPS & PROFESSIONAL EXPERIENCE (5 VIRTUAL & INDUSTRIAL ROLES)</span>
              </h4>
              <div className="space-y-3.5">
                {TRAINING_EXPERIENCES.map((exp, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl border ${
                    isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{exp.iconEmoji}</span>
                        <span className={`font-bold text-sm sm:text-base font-cinematic uppercase tracking-wide ${
                          isBatman ? 'text-[#E8DCC8]' : 'text-white'
                        }`}>
                          {exp.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono border ${
                          isBatman ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]' : 'bg-[#042435] text-cyan-300 border-cyan-500/30'
                        }`}>
                          {exp.duration}
                        </span>
                        <span className={`font-mono text-xs font-semibold ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className={`text-xs font-bold mt-1 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-300'}`}>
                      {exp.organization}
                    </div>
                    <p className={`text-xs mt-1.5 font-light leading-relaxed ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {exp.toolsUsed.map((tool) => (
                        <span key={tool} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isBatman ? 'bg-[#0B0B0F] border-[#54202B] text-[#B9A1A0]' : 'bg-[#030e16] border-cyan-500/20 text-slate-300'
                        }`}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (All 8 Credentials) */}
            <div>
              <h4 className={`flex items-center gap-2 text-xs uppercase tracking-widest font-cinematic font-bold mb-3 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                <Award className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>CERTIFICATIONS & CREDENTIALS (8 VERIFIED AWARDS)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className={`p-3.5 rounded-2xl border flex flex-col justify-between ${
                    isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{cert.iconEmoji}</span>
                        <span className={`font-mono text-[11px] font-bold ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>
                          {cert.year}
                        </span>
                      </div>
                      <h5 className={`font-bold text-xs mt-2 uppercase font-cinematic leading-snug ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        {cert.title}
                      </h5>
                      <div className={`text-[11px] mt-0.5 font-semibold ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                        {cert.issuer}
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-700/30 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-emerald-400">● Completed</span>
                      <span className={isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}>Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects (4 Resume Projects + Labs) */}
            <div>
              <h4 className={`flex items-center gap-2 text-xs uppercase tracking-widest font-cinematic font-bold mb-3 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                <Code className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>NOTABLE PROJECTS & ENGINEERING ARSENAL</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className={`p-4 rounded-2xl border flex flex-col justify-between ${
                    isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                          isBatman ? 'bg-[#310D18] text-[#E8DCC8]' : 'bg-[#042435] text-cyan-300'
                        }`}>
                          PROJECT {proj.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {proj.type}
                        </span>
                      </div>
                      <h5 className={`font-bold text-sm sm:text-base mt-2 uppercase font-cinematic leading-snug ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        {proj.title}
                      </h5>
                      <div className={`text-xs font-semibold mt-0.5 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>
                        {proj.subtitle}
                      </div>
                      <p className={`text-xs mt-1.5 font-light leading-relaxed line-clamp-3 ${
                        isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                      }`}>
                        {proj.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-700/30 flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isBatman ? 'bg-[#0B0B0F] border-[#54202B] text-[#B9A1A0]' : 'bg-[#030e16] border-cyan-500/20 text-slate-300'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Operating Systems Matrix */}
            <div>
              <h4 className={`flex items-center gap-2 text-xs uppercase tracking-widest font-cinematic font-bold mb-3 ${
                isBatman ? 'text-[#E8DCC8]' : 'text-white'
              }`}>
                <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>TECHNICAL SKILLS, PLATFORMS & TOOLSETS</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className={`p-4 rounded-2xl border ${
                  isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                }`}>
                  <span className={`font-cinematic uppercase tracking-wider font-bold block mb-1 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>PROGRAMMING & DEV:</span>
                  <p className={`font-light leading-relaxed ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                    Python, C, Java, C++, HTML, CSS, JavaScript, Pandas, MERN Stack, AI & Machine Learning
                  </p>
                </div>
                <div className={`p-4 rounded-2xl border ${
                  isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                }`}>
                  <span className={`font-cinematic uppercase tracking-wider font-bold block mb-1 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>SECURITY & RECON TOOLS:</span>
                  <p className={`font-light leading-relaxed ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                    N-map, Censys, Splunk, Spiderfoot, Maltego, The Harvester, Angry IP Scanner, Netdiscover, Telnet, Wireshark, Nessus, OpenVAS
                  </p>
                </div>
                <div className={`p-4 rounded-2xl border ${
                  isBatman ? 'bg-[#17171C]/70 border-[#54202B]' : 'bg-[#051724]/70 border-cyan-500/20'
                }`}>
                  <span className={`font-cinematic uppercase tracking-wider font-bold block mb-1 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>OS & DATABASES:</span>
                  <p className={`font-light leading-relaxed ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'}`}>
                    Windows, Kali Linux, Parrot OS, MySQL, MongoDB
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Known */}
            <div className={`pt-1 text-xs font-mono flex flex-wrap items-center gap-3 ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
            }`}>
              <span className={`font-bold uppercase ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>
                LANGUAGES KNOWN:
              </span>
              <span>English (Professional)</span>
              <span>•</span>
              <span>Telugu (Native)</span>
              <span>•</span>
              <span>Hindi (Fluent)</span>
            </div>

          </div>
        )}

        {/* Tab 2: Embedded Direct Resume PDF Viewer */}
        {activeTab === 'pdf' && (
          <div className="flex-1 min-h-[550px] p-4 flex flex-col">
            <div className={`mb-3 p-3 rounded-xl flex items-center justify-between text-xs border ${
              isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#051724] border-cyan-500/25'
            }`}>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Viewing Official Uploaded PDF: <strong>NEW_RESUME_SONU_ELLUMALLA.pdf</strong></span>
              </div>
              <a
                href={PERSONAL_INFO.resumePdfPath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline font-bold"
              >
                <span>Open in Full Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 min-h-[500px]">
              <iframe
                src={`${PERSONAL_INFO.resumePdfPath}#toolbar=1&navpanes=0`}
                className="w-full h-full min-h-[500px]"
                title="Resume PDF"
              />
            </div>
          </div>
        )}

        {/* Footer Bar */}
        <div className={`p-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#061824] border-cyan-500/20'
        }`}>
          <div className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
            <span>Base: {PERSONAL_INFO.location} · </span>
            <span className="text-emerald-400 font-bold">● Available for immediate commencement</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Ellumalla%20Sonu`}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all font-cinematic uppercase tracking-widest shadow-md cursor-pointer ${
                isBatman
                  ? 'text-[#E8DCC8] bg-[#A51C2D] hover:bg-[#C45A50]'
                  : 'text-black bg-cyan-400 hover:bg-cyan-300'
              }`}
            >
              Hire Candidate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
