import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types/portfolio';
import { Award, CheckCircle2, Clock, ShieldCheck, X, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-[#0c101a] to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
              VERIFIED CREDENTIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-400 font-mono">
            Formal technical certifications and university workshops across ethical hacking, machine learning, and systems security.
          </p>
        </div>

        {/* Digital Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => {
            const isInProgress = cert.status === 'In Progress';
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isInProgress
                    ? 'bg-slate-900/60 border-dashed border-amber-500/40 hover:border-amber-400'
                    : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-slate-800 hover:border-emerald-500/60 hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)]'
                }`}
              >
                {/* Certificate Corner Flourish */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-slate-700/60 rounded-tr-lg group-hover:border-emerald-400/80 transition-colors" />

                <div>
                  {/* Issuer and Status Badge */}
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-slate-400 font-medium truncate max-w-[150px]">
                      {cert.issuer}
                    </span>
                    {isInProgress ? (
                      <span className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                        <Clock className="w-3 h-3" />
                        In Progress
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Year */}
                  <div className="text-xs font-mono text-slate-500 mt-2">
                    Conferred: <span className="text-slate-300">{cert.year}</span>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </span>
                  <Award className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Inspection Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  DIGITAL CREDENTIAL DOSSIER
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">{selectedCert.issuer}</div>
              <h3 className="text-xl font-bold text-white font-display">{selectedCert.title}</h3>
              <div className="text-xs font-mono text-emerald-400 mt-1">Conferred: {selectedCert.year}</div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedCert.description}
              </div>

              {selectedCert.detailedOverview && (
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedCert.detailedOverview}
                </div>
              )}

              {selectedCert.whatItSupports && selectedCert.whatItSupports.length > 0 && (
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    What it supports in my profile:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCert.whatItSupports.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
              <span>Candidate: <strong className="text-white">Ellumalla Sonu</strong></span>
              <span className="text-emerald-400 font-semibold">{selectedCert.status}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
