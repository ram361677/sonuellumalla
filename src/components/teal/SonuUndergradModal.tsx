import React, { useState, useEffect } from 'react';
import { SonuBtechPortrait } from '../SonuBtechPortrait';
import { BtechCertificateModal } from './BtechCertificateModal';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Phone, 
  Camera, 
  Building2,
  Award,
  FileCheck,
  FileText,
  Linkedin,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { saveLargeFile, safeLocalStorageSet } from '../../utils/idbStorage';
import { useTheme } from '../../context/ThemeContext';

interface SonuUndergradModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SonuUndergradModal: React.FC<SonuUndergradModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isBtechCertModalOpen, setIsBtechCertModalOpen] = useState(false);
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
            : 'bg-[#030e16] border-emerald-500/40 text-slate-100 shadow-[0_25px_60px_rgba(3,14,22,0.95)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`relative z-10 px-6 py-4 border-b flex items-center justify-between ${
          isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#042019] border-emerald-500/25'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full animate-ping ${
              isBatman ? 'bg-[#A51C2D]' : 'bg-emerald-400'
            }`} />
            <span className={`text-xs tracking-widest uppercase font-bold font-cinematic ${
              isBatman ? 'text-[#E8DCC8]' : 'text-emerald-200'
            }`}>
              CARD 02 · UNDERGRADUATE SENTINEL // SONU ELLUMALLA
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-full border transition-colors cursor-pointer shadow-sm ${
              isBatman
                ? 'bg-[#17171C] hover:bg-[#310D18] text-[#B9A1A0] hover:text-[#E8DCC8] border-[#54202B]'
                : 'bg-[#031d18] hover:bg-[#07362b] text-slate-300 hover:text-white border-emerald-500/30'
            }`}
            aria-label="Close"
          >
            <X className={`w-5 h-5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="relative z-10 p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Top Profile Header */}
          <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b ${
            isBatman ? 'border-[#54202B]' : 'border-emerald-500/20'
          }`}>
            
            {/* Sonu's BTech Photo */}
            <div className="shrink-0 flex flex-col items-center gap-2.5">
              <div className="relative group">
                <div className={`w-44 h-56 sm:w-48 sm:h-60 rounded-3xl overflow-hidden border-2 shadow-md ${
                  isBatman ? 'border-[#54202B] bg-[#0B0B0F]' : 'border-emerald-500/35 bg-[#041c17]'
                }`}>
                  <SonuBtechPortrait className="w-full h-full" />
                </div>
                <div className={`absolute -bottom-2 inset-x-0 mx-auto w-fit px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 font-cinematic ${
                  isBatman 
                    ? 'bg-[#A51C2D] text-[#E8DCC8]' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    isBatman ? 'bg-[#E8DCC8]' : 'bg-slate-950'
                  }`} />
                  <span>B.TECH CSE</span>
                </div>
              </div>

              {/* Upload Original File Button */}
              <label className={`cursor-pointer text-xs flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm transition-all mt-2 active:scale-95 font-cinematic uppercase tracking-wider text-[11px] ${
                isBatman
                  ? 'text-[#E8DCC8] hover:text-white bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B]'
                  : 'text-emerald-200 hover:text-white bg-[#04241d] hover:bg-[#07362b] border-emerald-500/30'
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
                          safeLocalStorageSet('sonu_btech_photo', base64);
                          await saveLargeFile('sonu_btech_photo', base64);
                          window.dispatchEvent(new Event('sonu_btech_photo_updated'));
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <Camera className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span>Upload B.Tech Photo</span>
              </label>
            </div>

            {/* Academic & Personal Identification */}
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold mb-1 uppercase font-cinematic tracking-wider ${
                  isBatman
                    ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#04241d] border-emerald-500/30 text-emerald-300'
                }`}>
                  <GraduationCap className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <span>UNDERGRADUATE CANDIDATE</span>
                </div>
                <h2 className={`text-3xl sm:text-4xl font-bold uppercase font-cinematic tracking-widest mt-0.5 ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}>
                  SONU ELLUMALLA
                </h2>
                <div className={`text-sm font-semibold font-mono mt-0.5 ${
                  isBatman ? 'text-[#C45A50]' : 'text-emerald-400'
                }`}>
                  Bachelor of Technology (B.Tech) in Computer Science and Engineering
                </div>
                <div className={`inline-flex items-center gap-1.5 text-xs mt-1.5 px-3 py-1 rounded-full border font-bold uppercase shadow-sm font-cinematic tracking-wide ${
                  isBatman
                    ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                    : 'bg-[#04241d] border-emerald-500/30 text-emerald-200'
                }`}>
                  <Award className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <span>Overall CGPA: 7.47 / 10.0</span>
                </div>
              </div>

              {/* College & Timeline Coordinates */}
              <div className="grid grid-cols-1 gap-2.5 text-xs pt-1">
                
                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#041e18] border-emerald-500/25'
                }`}>
                  <Award className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-emerald-300/80'}`}>Academic Standing</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Overall CGPA: 7.47 / 10.0 (First Class)</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#041e18] border-emerald-500/25'
                }`}>
                  <Building2 className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-emerald-300/80'}`}>College</div>
                    <div className={`font-bold leading-tight ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Aditya Institute of Technology and Management</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#041e18] border-emerald-500/25'
                }`}>
                  <MapPin className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-emerald-300/80'}`}>Location</div>
                    <div className={`font-bold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>Tekkali, Srikakulam, Andhra Pradesh, India</div>
                  </div>
                </div>

                <div className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                  isBatman ? 'text-[#E8DCC8] bg-[#17171C] border-[#54202B]' : 'text-slate-100 bg-[#041e18] border-emerald-500/25'
                }`}>
                  <Calendar className={`w-4 h-4 shrink-0 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  <div>
                    <div className={`text-[10px] uppercase font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-emerald-300/80'}`}>Course Duration</div>
                    <div className={`font-bold ${isBatman ? 'text-[#C45A50]' : 'text-emerald-300'}`}>August 2022 – April 2026</div>
                  </div>
                </div>

                {/* College Website Link Button */}
                <a
                  href="https://www.adityatekkali.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl font-bold transition-all group mt-1 shadow-sm font-cinematic uppercase tracking-wider border ${
                    isBatman
                      ? 'bg-[#0B0B0F] hover:bg-[#310D18] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8]'
                      : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-90 text-slate-950 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  }`}
                >
                  <span className="text-xs">Visit College Website (adityatekkali.edu.in)</span>
                  <ExternalLink className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                    isBatman ? 'text-[#A51C2D]' : 'text-slate-950'
                  }`} />
                </a>

              </div>
            </div>

          </div>

          {/* Original B.Tech Certificate & Grade Memo */}
          <div className={`p-4 sm:p-5 rounded-2xl border-2 transition-all shadow-sm space-y-3 ${
            isBatman
              ? 'bg-[#17171C] border-[#54202B] hover:border-[#A51C2D]'
              : 'bg-[#04241d] border-emerald-500/30 hover:border-emerald-400/60'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FileCheck className={`w-5 h-5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span className={`text-xs font-bold uppercase tracking-widest font-cinematic ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-emerald-100'
                }`}>
                  OFFICIAL B.TECH DEGREE CERTIFICATE & GRADE MEMO (PDF)
                </span>
              </div>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase font-cinematic ${
                isBatman
                  ? 'text-[#E8DCC8] bg-[#310D18] border-[#54202B]'
                  : 'text-emerald-200 bg-[#031d18] border-emerald-500/30'
              }`}>
                CGPA: 7.47 · FIRST CLASS
              </span>
            </div>

            <p className={`text-xs leading-relaxed font-light ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              Verified Provisional Certificate (PC No: <span className={`font-mono font-bold ${isBatman ? 'text-[#C45A50]' : 'text-emerald-300'}`}>2026JUN19BT5617</span> | Sl No: <span className={`font-mono font-bold ${isBatman ? 'text-[#C45A50]' : 'text-emerald-300'}`}>006038</span>) and Consolidated Credit Memo (CGCM No: <span className={`font-mono font-bold ${isBatman ? 'text-[#C45A50]' : 'text-emerald-300'}`}>26577</span> | 160 Credits) issued by <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>Aditya Institute of Technology and Management</strong> affiliated to <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>JNTU Gurajada, Vizianagaram</strong>.
            </p>

            <button
              onClick={() => setIsBtechCertModalOpen(true)}
              className={`w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-cinematic ${
                isBatman
                  ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                  : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-90 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
              }`}
            >
              <FileText className={`w-4 h-4 ${isBatman ? 'text-[#E8DCC8]' : 'text-slate-950'}`} />
              <span>CLICK TO OPEN ORIGINAL B.TECH CERTIFICATE (PDF)</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Communication Channels */}
          <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 text-xs ${
            isBatman ? 'bg-[#17171C] border-[#54202B]' : 'bg-[#042019] border-emerald-500/25'
          }`}>
            <div className={`flex flex-wrap items-center gap-4 font-mono ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
            }`}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:underline">
                <Mail className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-emerald-500/40'}`}>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:underline">
                <Phone className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-emerald-500/40'}`}>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline" title="LinkedIn Profile">
                <Linkedin className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span>LinkedIn</span>
              </a>
              <span className={`hidden sm:inline ${isBatman ? 'text-[#54202B]' : 'text-emerald-500/40'}`}>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline" title="GitHub Profile">
                <Github className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                <span>GitHub</span>
              </a>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Recruitment%20Inquiry%20for%20Ellumalla%20Sonu%20(B.Tech%20CSE)`}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-cinematic transition-all shadow-md ${
                isBatman
                  ? 'bg-[#A51C2D] hover:bg-[#C45A50] text-[#E8DCC8]'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-90'
              }`}
            >
              Contact Candidate
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-between text-xs ${
          isBatman
            ? 'bg-[#17171C] border-[#54202B] text-[#B9A1A0]'
            : 'bg-[#031713] border-emerald-500/20 text-slate-400'
        }`}>
          <span>Aditya Institute of Technology and Management · Tekkali, AP, India</span>
          <button
            onClick={onClose}
            className={`cursor-pointer uppercase font-bold font-cinematic tracking-wider transition-colors ${
              isBatman ? 'text-[#C45A50] hover:text-[#E8DCC8]' : 'text-emerald-400 hover:text-emerald-200'
            }`}
          >
            Close Dossier
          </button>
        </div>

      </div>

      {/* Original B.Tech Certificate PDF Modal */}
      {isBtechCertModalOpen && (
        <BtechCertificateModal
          isOpen={isBtechCertModalOpen}
          onClose={() => setIsBtechCertModalOpen(false)}
        />
      )}

    </div>
  );
};
