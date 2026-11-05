import React, { useState, useEffect } from 'react';
import { TenthCertificateModal } from './TenthCertificateModal';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Phone, 
  School,
  Award,
  FileCheck,
  FileText,
  Linkedin,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

interface SonuTenthSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SonuTenthSchoolModal: React.FC<SonuTenthSchoolModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isTenthCertModalOpen, setIsTenthCertModalOpen] = useState(false);
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 p-3 sm:p-6 bg-black/90 backdrop-blur-md flex items-center justify-center overflow-y-auto font-sans"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-2xl my-auto rounded-[32px] border-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh] transition-colors ${
          isBatman
            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
            : 'bg-[#030e16] border-teal-500/40 text-slate-100 shadow-[0_25px_60px_rgba(3,14,22,0.95)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`relative z-10 px-6 py-4 border-b flex items-center justify-between ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#031d20] border-teal-500/25'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full animate-ping ${
              isBatman ? 'bg-[#A51C2D]' : 'bg-teal-400'
            }`} />
            <span className={`text-xs tracking-widest uppercase font-bold font-cinematic ${
              isBatman ? 'text-[#E8DCC8]' : 'text-teal-200'
            }`}>
              CARD 04 · SECONDARY SCHOOLING (10TH) // SONU ELLUMALLA
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer shadow-sm ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-[#E8DCC8] border-[#54202B]'
                : 'bg-[#02181b] hover:bg-[#06282c] text-slate-300 hover:text-white border-teal-500/30'
            }`}
            aria-label="Close"
          >
            <X className={`w-5 h-5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="relative z-10 p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Top Profile Header */}
          <div className={`pb-6 border-b ${
            isBatman ? 'border-[#54202B]' : 'border-teal-500/20'
          }`}>
            {/* Academic Identification */}
            <div className="space-y-3 text-left">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold mb-1 uppercase font-cinematic tracking-wider ${
                  isBatman
                    ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#032024] border-teal-500/30 text-teal-300'
                }`}>
                  <GraduationCap className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <span>SECONDARY EDUCATION (SSC)</span>
                </div>
                <h2 className={`text-3xl sm:text-4xl font-bold uppercase font-cinematic tracking-widest mt-0.5 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}>
                  SONU ELLUMALLA
                </h2>
                <div className={`text-sm font-semibold font-mono mt-0.5 ${
                  isBatman ? 'text-[#C45A50]' : 'text-teal-400'
                }`}>
                  Secondary School Certificate (SSC) · Sri Chaitanya School, Palasa
                </div>
                <div className={`inline-flex items-center gap-1.5 text-xs mt-1.5 px-3 py-1 rounded-full border font-bold uppercase shadow-sm font-cinematic tracking-wide ${
                  isBatman
                    ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#032024] border-teal-500/30 text-teal-200'
                }`}>
                  <Award className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <span>Scored: 92% (First Division)</span>
                </div>
              </div>

              {/* School Coordinates */}
              <div className="grid grid-cols-1 gap-2.5 text-xs pt-1">
                
                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#031d20] border-teal-500/25'
                }`}>
                  <Award className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-teal-300/80'}`}>Academic Standing</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Scored 92% · State Board SSC (Board of Secondary Education, AP)</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#031d20] border-teal-500/25'
                }`}>
                  <School className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-teal-300/80'}`}>School</div>
                    <div className={`font-bold leading-tight ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Sri Chaitanya School, Palasa</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#031d20] border-teal-500/25'
                }`}>
                  <MapPin className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-teal-300/80'}`}>Location</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Palasa, Andhra Pradesh, India</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#031d20] border-teal-500/25'
                }`}>
                  <Calendar className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-teal-300/80'}`}>Completed Year</div>
                    <div className={`font-bold ${isBatman ? 'text-[#C45A50]' : 'text-teal-300'}`}>Completed in 2020 (June 2019 – April 2020)</div>
                  </div>
                </div>

                {/* School Website Link Button */}
                <a
                  href="https://srichaitanyaschool.net/"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl font-bold transition-all group mt-1 shadow-sm font-cinematic uppercase tracking-wider border ${
                    isBatman
                      ? 'bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8]'
                      : 'bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:opacity-90 text-slate-950 border-teal-400/50 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                  }`}
                >
                  <span className="text-xs">Visit School Portal (srichaitanyaschool.net)</span>
                  <ExternalLink className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                    isBatman ? 'text-[#A51C2D]' : 'text-slate-950'
                  }`} />
                </a>

              </div>
            </div>

          </div>

          {/* OFFICIAL SECONDARY SCHOOL CERTIFICATE (10TH SSC MEMO) VIEW */}
          <div className={`p-4 sm:p-5 rounded-2xl border-2 transition-all shadow-sm space-y-3 ${
            isBatman
              ? 'bg-[#17171C] border-[#54202B] hover:border-[#A51C2D]'
              : 'bg-[#032328] border-teal-500/30 hover:border-teal-400/60'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FileCheck className={`w-5 h-5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                <span className={`text-xs font-bold uppercase tracking-widest font-cinematic ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-teal-100'
                }`}>
                  OFFICIAL SECONDARY SCHOOL CERTIFICATE (10TH SSC MEMO)
                </span>
              </div>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase font-cinematic ${
                isBatman
                  ? 'text-[#E8DCC8] bg-[#310D18] border-[#54202B]'
                  : 'text-teal-200 bg-[#02181b] border-teal-500/30'
              }`}>
                SCORE: 92% · FIRST DIVISION
              </span>
            </div>

            <p className={`text-xs leading-relaxed font-light ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              Verified Secondary School Certificate (SSC Public Examination · Roll No: <span className={`font-mono font-bold ${isBatman ? 'text-[#C45A50]' : 'text-teal-300'}`}>2019106038</span>) issued by <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>Sri Chaitanya School, Palasa</strong> under the <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>Board of Secondary Education, Andhra Pradesh</strong>.
            </p>

            <button
              onClick={() => setIsTenthCertModalOpen(true)}
              className={`w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-cinematic ${
                isBatman
                  ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                  : 'bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:opacity-90 text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.4)]'
              }`}
            >
              <FileText className={`w-4 h-4 ${isBatman ? 'text-[#E8DCC8]' : 'text-slate-950'}`} />
              <span>CLICK TO OPEN ORIGINAL 10TH CERTIFICATE (PDF / MARKS MEMO)</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Communication Channels */}
          <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 text-xs ${
            isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#031d20] border-teal-500/25'
          }`}>
            <div className={`flex flex-wrap items-center gap-4 font-mono ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:underline">
                <Mail className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-teal-500/40'}`}>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:underline">
                <Phone className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-teal-500/40'}`}>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline" title="LinkedIn Profile">
                <Linkedin className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                <span>LinkedIn</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-teal-500/40'}`}>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline" title="GitHub Profile">
                <Github className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-teal-400'}`} />
                <span>GitHub</span>
              </a>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20Ellumalla%20Sonu%20(Secondary%20School%20%26%20Academics)`}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-cinematic transition-all shadow-md ${
                isBatman
                  ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:opacity-90'
              }`}
            >
              Contact Candidate
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`relative z-10 px-6 py-4 border-t flex items-center justify-between text-xs ${
          isBatman
            ? 'bg-[#17171C] border-[#54202B] text-[#B9A1A0]'
            : 'bg-[#02181b] border-teal-500/20 text-slate-400'
        }`}>
          <span>Sri Chaitanya School · Palasa, Andhra Pradesh, India</span>
          <button
            onClick={onClose}
            className={`cursor-pointer uppercase font-bold font-cinematic tracking-wider transition-colors ${
              isBatman ? 'text-[#C45A50] hover:text-[#E8DCC8]' : 'text-teal-400 hover:text-teal-200'
            }`}
          >
            Close Details
          </button>
        </div>

      </div>

      {/* Full-Screen 10th Secondary School Certificate Modal */}
      {isTenthCertModalOpen && (
        <TenthCertificateModal
          isOpen={isTenthCertModalOpen}
          onClose={() => setIsTenthCertModalOpen(false)}
        />
      )}

    </div>
  );
};
