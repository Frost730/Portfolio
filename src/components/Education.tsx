import React from 'react';
import { profile } from '../data/profile';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative text-left section-render-opt" aria-label="Education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base text-slate-400 mt-2">
            Rigorous academic foundations in computer science, algorithms, computer vision, and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-dark-750 ml-4 sm:ml-6 space-y-8">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark-950 border-2 border-slate-500 group-hover:border-sky-400 transition-all duration-300" />

              <div className="p-6 rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300 max-w-3xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-850 border border-dark-700 font-mono text-xs text-slate-300 font-medium">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    {edu.year}
                  </span>

                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>{edu.degree}</span>
                </h3>

                <p className="text-sm text-slate-300 font-medium mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {edu.university}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};