import React from 'react';
import type { Project } from '../types';
import { HeartPulse, CheckCircle2, Maximize2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface AdditionalProjectsProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const AdditionalProjects: React.FC<AdditionalProjectsProps> = ({
  projects,
  onOpenCaseStudy
}) => {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 relative bg-dark-950 border-t border-dark-800 text-left" aria-label="Additional Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
            Layer 3 &bull; Specialized Full-Stack Applications
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Healthcare &amp; Management Systems
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Domain-specific platforms focused on healthcare workflows and administrative systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-dark-900 border border-dark-750 p-6 flex flex-col justify-between hover:border-slate-600 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-sky-400 font-bold px-2 py-0.5 rounded bg-dark-850 border border-dark-750">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-dark-850 text-indigo-400 border border-dark-750">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="space-y-1.5 mb-4">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-950 text-slate-400 border border-dark-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-slate-600 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub ↗</span>
                  </a>
                )}

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-sky-300 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};