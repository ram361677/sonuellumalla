import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Compass } from 'lucide-react';

interface TealContactProps {
  onOpenResume: () => void;
}

export const TealContact: React.FC<TealContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="relative w-full pt-16 pb-14 px-6 sm:px-12 lg:px-16 border-t border-[#63a5e1]/30 bg-white/70 backdrop-blur-md text-[#193768] font-serif">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#63a5e1]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Contact Hub Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#63a5e1]/40 text-xs font-semibold text-[#193768] uppercase tracking-wider shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#429ac9]" />
            <span>DISPATCH & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#193768] tracking-tight font-serif drop-shadow-sm">
            CONNECT WITH SONU
          </h2>
          <p className="text-sm sm:text-base text-[#314a72] font-normal">
            Interested in cybersecurity internships, SOC monitoring, or security infrastructure collaborations? Reach out directly.
          </p>
        </div>

        {/* 3-Column Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="md:col-span-5 space-y-4">
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#63a5e1]/35 hover:border-[#63a5e1] shadow-sm hover:shadow-md transition-all block group"
            >
              <div className="p-2.5 rounded-xl bg-[#f0f6fc] text-[#429ac9] shrink-0 group-hover:bg-[#429ac9] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-[#429ac9] uppercase">DIRECT EMAIL</div>
                <div className="text-sm font-semibold text-[#193768] group-hover:text-[#429ac9] truncate transition-colors">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#63a5e1]/35 hover:border-[#63a5e1] shadow-sm hover:shadow-md transition-all block group"
            >
              <div className="p-2.5 rounded-xl bg-[#f0f6fc] text-[#429ac9] shrink-0 group-hover:bg-[#429ac9] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#429ac9] uppercase">TELEPHONE / WHATSAPP</div>
                <div className="text-sm font-semibold text-[#193768] group-hover:text-[#429ac9] transition-colors">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#63a5e1]/35 shadow-sm">
              <div className="p-2.5 rounded-xl bg-[#f0f6fc] text-[#429ac9] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#429ac9] uppercase">CURRENT LOCATION</div>
                <div className="text-sm font-semibold text-[#193768]">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs text-[#526f96] mt-0.5">
                  Available across UAE & Global Remote Roles
                </div>
              </div>
            </div>

            {/* Resume button & GitHub/LinkedIn Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-6 py-2.5 rounded-full btn-origin-primary text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                VIEW RESUME / CV
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-[#e2edf8] text-[#193768] border border-[#63a5e1]/40 transition-colors shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-[#e2edf8] text-[#193768] border border-[#63a5e1]/40 transition-colors shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-[28px] bg-white border-2 border-[#63a5e1]/35 shadow-[0_15px_40px_rgba(25,55,104,0.08)] space-y-5">
              
              <div className="border-b border-[#63a5e1]/20 pb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#193768] uppercase font-serif">
                  SEND DIRECT INQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-[#314a72]">
                  Leave a secure message for interview requests or project consultations.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#f0f6fc] border border-[#63a5e1]/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-[#193768] uppercase font-serif">
                    TRANSMISSION RECEIVED
                  </h4>
                  <p className="text-xs text-[#314a72]">
                    Thank you. Sonu has received your message and will respond shortly via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#429ac9] uppercase">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8fbfe] border border-[#63a5e1]/30 text-sm text-[#193768] focus:outline-none focus:border-[#429ac9] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#429ac9] uppercase">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8fbfe] border border-[#63a5e1]/30 text-sm text-[#193768] focus:outline-none focus:border-[#429ac9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#429ac9] uppercase">MESSAGE / SCOPE</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing cybersecurity role, internship opening, or technical project..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f8fbfe] border border-[#63a5e1]/30 text-sm text-[#193768] focus:outline-none focus:border-[#429ac9] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full btn-origin-primary text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>SEND TRANSMISSION</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer Base Note */}
        <div className="pt-8 border-t border-[#63a5e1]/25 flex flex-col sm:flex-row items-center justify-between text-xs text-[#526f96] gap-3">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#193768]">ELLUMALLA SONU</strong> · ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2">
            <span>CURTIN UNIVERSITY DUBAI</span>
            <span>·</span>
            <span>O R I G I N // SENTINEL</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
