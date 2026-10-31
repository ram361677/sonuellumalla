import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Award, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const CertsScene: React.FC = () => {
  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-[#1c0b30] via-[#260f3e] to-[#130522] text-white">
      
      {/* Top Header with Generous Margins */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 sm:mb-16 border-b border-white/10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-pink-300 font-bold block">
            CREDENTIALS & AUDITS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight leading-none">
            CERTIFICATIONS
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-emerald-400">
          <Award className="w-4 h-4" />
          <span>CISCO · HACKER SCHOOL · IIT KHARAGPUR</span>
        </div>
      </div>

      {/* Grid of Digital Certificates with Generous Gaps */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full py-2">
        {CERTIFICATIONS.slice(0, 6).map((cert) => {
          const isInProgress = cert.status === 'In Progress';
          return (
            <div
              key={cert.id}
              className="group p-6 sm:p-7 rounded-3xl bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-pink-400/80 transition-all flex flex-col justify-between space-y-6 transform hover:-translate-y-1.5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-300 font-semibold truncate max-w-[150px]">
                    {cert.issuer}
                  </span>
                  {isInProgress ? (
                    <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5" /> In Progress
                    </span>
                  ) : (
                    <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-black uppercase text-white font-display leading-snug line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-purple-200/80">
                <span>Conferred: {cert.year}</span>
                <span className="text-pink-300 font-bold group-hover:translate-x-1 transition-transform">
                  CREDENTIAL
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar with Generous Margin */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-purple-300/75 pt-8 mt-12 border-t border-white/10">
        <span>COMPTIA SECURITY+ · CISCO NETWORKING ACADEMY</span>
        <span>VERIFIED ACADEMIC PROFILE</span>
      </div>

    </div>
  );
};
