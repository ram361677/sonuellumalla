import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Shield, CheckCircle2 } from 'lucide-react';

interface ContactSceneProps {
  onOpenResume: () => void;
}

export const ContactScene: React.FC<ContactSceneProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#1c082e] via-[#240a3c] to-[#10031c] text-white">
      
      {/* Background Graphic Lines & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[120px]" />
      </div>

      {/* Top Banner / Sail Cloth Badge with Generous Margins */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3 mb-14 sm:mb-16">
        <div className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-pink-500/20 border border-pink-400/40 text-xs font-mono text-pink-200">
          SECURE COMMUNICATIONS · LET'S CONNECT
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight leading-none">
          ENGAGEMENT & DISPATCH
        </h2>
        <p className="text-sm sm:text-base text-purple-200/90 font-light max-w-lg">
          Interested in cybersecurity internships, SOC positions, or security audits? Let's discuss.
        </p>
      </div>

      {/* Main 3-Zone Contact Hub with Generous Gaps (Matching Screenshot 8) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto w-full items-start">
        
        {/* Left Column: Brand Logo & Networks */}
        <div className="md:col-span-4 text-left space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e52b38] to-purple-700 flex items-center justify-center text-white shadow-lg border border-white/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black uppercase tracking-tight text-white font-display">
                ELLUMALLA SONU
              </div>
              <div className="text-xs font-mono text-pink-300">
                CYBERSECURITY SPECIALIST
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-purple-200/80 font-light leading-relaxed">
            Available for immediate recruitment, internship commencement, and remote or hybrid security collaboration.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all transform hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-pink-300" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all transform hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-200" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all transform hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Center Column: Direct Telephone & Physical Address */}
        <div className="md:col-span-4 text-left space-y-5 bg-white/5 p-6 rounded-3xl border border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-pink-400 block font-bold">
              DIRECT TELEPHONE / WHATSAPP:
            </span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-sm sm:text-base font-bold text-white hover:text-pink-300 transition-colors font-mono"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-pink-400 block font-bold">
              CURRENT RESIDENCE:
            </span>
            <div className="text-xs sm:text-sm text-slate-200 leading-normal">
              Dubai, United Arab Emirates <br />
              <span className="text-purple-300 font-mono text-xs">Curtin University Dubai</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenResume}
              className="w-full py-3 px-4 rounded-2xl bg-[#e52b38] hover:bg-[#d0202d] text-white text-xs sm:text-sm font-black uppercase tracking-wider border border-white/30 shadow-md transition-all active:scale-95 hover:scale-102"
            >
              VIEW FULL CV / RESUME
            </button>
          </div>
        </div>

        {/* Right Column: Direct Message Dispatch */}
        <div className="md:col-span-4 text-left space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-pink-400 block font-bold">
            DIRECT INBOX DISPATCH:
          </span>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold text-white">Dispatched!</div>
              <div className="text-xs text-emerald-200 font-mono">Sonu will reply shortly.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name / Organization"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 font-sans"
              />
              <input
                type="email"
                required
                placeholder="Your Professional Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 font-sans"
              />
              <textarea
                rows={3}
                placeholder="Your message or job brief..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-400 font-sans resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider border border-white/30 flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Copyright Strip with Generous Margin */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-purple-300/60 pt-8 mt-14 border-t border-white/10 gap-3">
        <div>
          © 2026 Ellumalla Sonu | All rights reserved
        </div>
        <div>
          Dubai, UAE · Curtin University Dubai · B.Tech (CSE) 7.47
        </div>
      </div>

    </div>
  );
};
