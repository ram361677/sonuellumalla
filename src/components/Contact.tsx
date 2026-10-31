import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Cybersecurity Opportunity / Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 lg:py-28 relative border-t overflow-hidden transition-colors duration-500 ${
        isBatman 
          ? 'border-[#54202B] bg-[#0B0B0F] film-grain' 
          : 'border-cyan-500/20 bg-[#030e16]'
      }`}
    >
      
      {/* Dramatic Atmosphere */}
      {isBatman ? (
        <>
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#6F101B]/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#310D18]/25 rounded-full blur-[140px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-cinematic uppercase tracking-widest mb-3 border ${
            isBatman
              ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
              : 'bg-[#051f2d] border-cyan-500/30 text-cyan-200'
          }`}>
            <Shield className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            <span>RECRUITER & DISPATCH</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest font-cinematic uppercase drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>
            CONNECT WITH SONU
          </h2>
          <p className={`max-w-2xl text-sm sm:text-base mt-3 font-light leading-relaxed ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Interested in cybersecurity internships, SOC monitoring, or security infrastructure collaborations? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Coordinates & Social Connects */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-7 rounded-3xl shadow-2xl space-y-6 border ${
              isBatman
                ? 'bg-[#17171C] border-[#54202B]'
                : 'bg-[#051724] border-cyan-500/25'
            }`}>
              
              <div className={`flex items-center gap-2 text-xs font-cinematic uppercase tracking-wider ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
              }`}>
                <Shield className={`w-4 h-4 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                <span>DIRECT RECRUITER CHANNELS</span>
              </div>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`group flex items-start gap-3.5 p-3.5 rounded-2xl transition-colors border ${
                  isBatman
                    ? 'bg-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D]'
                    : 'bg-[#030e16] border-cyan-500/20 hover:border-cyan-400'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 border ${
                  isBatman
                    ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                    : 'bg-[#042435] text-cyan-300 border-cyan-500/30'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Direct Email</div>
                  <div className={`text-sm font-semibold truncate transition-colors font-mono ${
                    isBatman 
                      ? 'text-[#E8DCC8] group-hover:text-white' 
                      : 'text-white group-hover:text-cyan-300'
                  }`}>
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className={`group flex items-start gap-3.5 p-3.5 rounded-2xl transition-colors border ${
                  isBatman
                    ? 'bg-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D]'
                    : 'bg-[#030e16] border-cyan-500/20 hover:border-cyan-400'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 border ${
                  isBatman
                    ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                    : 'bg-[#042435] text-cyan-300 border-cyan-500/30'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Telephone / WhatsApp</div>
                  <div className={`text-sm font-semibold transition-colors font-mono ${
                    isBatman 
                      ? 'text-[#E8DCC8] group-hover:text-white' 
                      : 'text-white group-hover:text-cyan-300'
                  }`}>
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className={`flex items-start gap-3.5 p-3.5 rounded-2xl border ${
                isBatman
                  ? 'bg-[#0B0B0F] border-[#54202B]'
                  : 'bg-[#030e16] border-cyan-500/20'
              }`}>
                <div className={`p-2.5 rounded-xl shrink-0 border ${
                  isBatman
                    ? 'bg-[#310D18] text-[#E8DCC8] border-[#54202B]'
                    : 'bg-[#042435] text-cyan-300 border-cyan-500/30'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-mono ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>Current Base</div>
                  <div className={`text-sm font-semibold ${isBatman ? 'text-[#E8DCC8]' : 'text-white'}`}>
                    {PERSONAL_INFO.location}
                  </div>
                  <div className={`text-[11px] font-mono mt-0.5 ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
                    Curtin University Dubai · Open to local & global relocation
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className={`text-xs font-cinematic uppercase tracking-widest mb-3 ${
                  isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                }`}>
                  PROFESSIONAL NETWORKS
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-colors border ${
                      isBatman
                        ? 'bg-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8] hover:text-white'
                        : 'bg-[#030e16] border-cyan-500/20 hover:border-cyan-400 text-slate-200 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className={`w-4 h-4 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`} />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-colors border ${
                      isBatman
                        ? 'bg-[#0B0B0F] border-[#54202B] hover:border-[#A51C2D] text-[#E8DCC8] hover:text-white'
                        : 'bg-[#030e16] border-cyan-500/20 hover:border-cyan-400 text-slate-200 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Github className={`w-4 h-4 ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`} />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl shadow-2xl border ${
              isBatman
                ? 'bg-[#17171C] border-[#54202B]'
                : 'bg-[#051724] border-cyan-500/25'
            }`}>
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border ${
                    isBatman
                      ? 'bg-[#310D18] border-[#A51C2D] text-[#E8DCC8] shadow-[0_0_25px_rgba(165,28,45,0.4)]'
                      : 'bg-[#042435] border-cyan-400 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                  }`}>
                    <CheckCircle2 className={`w-8 h-8 ${isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold font-cinematic uppercase tracking-wider ${
                    isBatman ? 'text-[#E8DCC8]' : 'text-white'
                  }`}>
                    Message Dispatched!
                  </h3>
                  <p className={`max-w-md mx-auto text-sm leading-relaxed font-light ${
                    isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                  }`}>
                    Thank you, <strong className={isBatman ? 'text-[#E8DCC8]' : 'text-white'}>{formData.name}</strong>. Your communication has been staged securely. Sonu will respond to <span className={`font-mono ${isBatman ? 'text-[#C45A50]' : 'text-cyan-400'}`}>{formData.email}</span> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Cybersecurity Opportunity', message: '' });
                      }}
                      className={`px-4 py-2 text-xs font-cinematic uppercase tracking-widest underline cursor-pointer ${
                        isBatman ? 'text-[#B9A1A0] hover:text-[#E8DCC8]' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-cinematic uppercase tracking-wider ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm font-sans transition-colors border focus:outline-none ${
                          isBatman
                            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] placeholder-[#B9A1A0]/40 focus:border-[#A51C2D]'
                            : 'bg-[#030e16] border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-cinematic uppercase tracking-wider ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>Your Professional Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm font-sans transition-colors border focus:outline-none ${
                          isBatman
                            ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] placeholder-[#B9A1A0]/40 focus:border-[#A51C2D]'
                            : 'bg-[#030e16] border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-cinematic uppercase tracking-wider ${
                      isBatman ? 'text-[#E8DCC8]' : 'text-white'
                    }`}>Inquiry Focus</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm font-sans transition-colors border focus:outline-none ${
                        isBatman
                          ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] placeholder-[#B9A1A0]/40 focus:border-[#A51C2D]'
                          : 'bg-[#030e16] border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-cinematic uppercase tracking-wider ${
                      isBatman ? 'text-[#E8DCC8]' : 'text-white'
                    }`}>Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sonu, we are reviewing your cybersecurity portfolio and would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm font-sans transition-colors border focus:outline-none resize-none ${
                        isBatman
                          ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8] placeholder-[#B9A1A0]/40 focus:border-[#A51C2D]'
                          : 'bg-[#030e16] border-cyan-500/25 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className={`text-[11px] font-mono ${
                      isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                    }`}>
                      Standard response latency: &lt; 24h
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 disabled:opacity-50 font-cinematic uppercase tracking-widest cursor-pointer ${
                        isBatman
                          ? 'text-[#E8DCC8] bg-[#A51C2D] hover:bg-[#C45A50] shadow-[0_0_20px_rgba(165,28,45,0.4)]'
                          : 'text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'DISPATCHING...' : 'SEND MESSAGE'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
