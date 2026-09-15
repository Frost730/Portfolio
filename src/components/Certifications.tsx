import React from 'react';
import { profile } from '../data/profile';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-dark-950 border-t border-dark-800 text-left" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
            Industry Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Specialized coursework in predictive modeling, machine learning, and full-stack software development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {profile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-dark-850 border border-dark-700 text-sky-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  {cert.focus}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mt-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Curriculum</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};