import React, { useState } from 'react';
import { Shield, Lock, Activity, Eye, Cpu, Database, CheckCircle, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'soc' | 'red' | 'ai'>('soc');

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-[#0a0f18] to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
            PROFILE & VISION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            WHO AM I?
          </h2>
        </div>

        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Short Text & Personal Trajectory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-4">
              <p>
                I'm a cybersecurity student and aspiring cybersecurity professional with a strong interest in ethical hacking, network security, SOC operations, vulnerability assessment, and AI-powered security solutions.
              </p>
              <p className="text-slate-400">
                I enjoy learning through practical projects and security labs, and I'm continuously developing my technical skills to prepare for a career in cybersecurity.
              </p>
            </div>

            {/* Core Philosophy Triad */}
            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">SOC Operations & Blue Team Defense</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      Deep log correlation in Splunk, packet dissection with Wireshark, triage playbooks, and rapid incident isolation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Ethical Hacking & Vulnerability Assessment</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      Hands-on vulnerability scanning using Nessus and OpenVAS, OSINT discovery, and defensive hardening.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">AI-Powered Security & Automation</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      Building intelligent models for password entropy audits, intrusion pattern detection, and incident response chatbots.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500">Degree:</span> <span className="text-slate-300 font-medium">Master of CyberSecurity (Curtin)</span>
              </div>
              <div aria-hidden="true" className="text-slate-700">·</div>
              <div>
                <span className="text-slate-500">Base:</span> <span className="text-slate-300 font-medium">Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Cybersecurity Graphic / SOC Sentinel Panel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-2xl overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider">
                    SOC THREAT RADAR // LIVE TELEMETRY
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  NODE: ACTIVE
                </div>
              </div>

              {/* Graphic Radar Simulation */}
              <div className="relative h-64 sm:h-72 w-full flex items-center justify-center bg-slate-950/80 rounded-xl border border-slate-800/60 overflow-hidden">
                {/* Concentric radar circles */}
                <div className="absolute w-56 h-56 rounded-full border border-emerald-500/10" />
                <div className="absolute w-40 h-40 rounded-full border border-emerald-500/15" />
                <div className="absolute w-24 h-24 rounded-full border border-emerald-500/20" />
                
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800/60" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800/60" />

                {/* Animated Rotating Radar Sweep */}
                <div 
                  className="absolute w-56 h-56 rounded-full origin-center pointer-events-none animate-[spin_8s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(52, 211, 153, 0.35) 0deg, rgba(52, 211, 153, 0.05) 60deg, transparent 90deg, transparent 360deg)'
                  }}
                />

                {/* Center Core Node */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <Shield className="w-5 h-5" />
                </div>

                {/* Mock Detected Network Nodes */}
                <div className="absolute top-14 left-20 flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-700/80 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Wireshark TAP · 0% Loss</span>
                </div>

                <div className="absolute bottom-12 right-16 flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-700/80 text-[10px] font-mono text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Splunk SIEM · Ingesting</span>
                </div>

                <div className="absolute top-20 right-14 flex items-center gap-1.5 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-700/80 text-[10px] font-mono text-slate-300">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Nessus Audit · Clean</span>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800/80 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <div className="text-[11px] text-slate-500">CVE AUDIT</div>
                  <div className="text-sm font-bold text-emerald-400 tabular-nums">100% SCAN</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <div className="text-[11px] text-slate-500">ATTACK VECTORS</div>
                  <div className="text-sm font-bold text-cyan-400 tabular-nums">0 BREACH</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <div className="text-[11px] text-slate-500">ACADEMIC CGPA</div>
                  <div className="text-sm font-bold text-white tabular-nums">7.47 / 10</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
