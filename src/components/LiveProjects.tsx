import React from 'react';
import type { Project } from '../types';
import { 
  ExternalLink, 
  Sparkles, 
  Maximize2, 
  Film, 
  Gamepad2, 
  Wallet, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface LiveProjectsProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const LiveProjects: React.FC<LiveProjectsProps> = ({ projects, onOpenCaseStudy }) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'cineanime-vault':
        return <Film className="w-5 h-5 text-sky-400" />;
      case 'gamevault':
        return <Gamepad2 className="w-5 h-5 text-indigo-400" />;
      case 'personal-expense-tracker':
        return <Wallet className="w-5 h-5 text-emerald-400" />;
      case 'flappy-bird-remastered':
        return <Flame className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-dark-900/30 border-t border-dark-800" aria-label="Live Deployed Applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
            Layer 2 &bull; Deployed Web Applications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Live Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-2">
            Production-ready web applications deployed with 100% client-side privacy, offline PWA architectures, and interactive analytics.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-xl"
            >
              <div>
                {/* Clean Browser Header */}
                <div className="px-5 py-3.5 bg-dark-950 border-b border-dark-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="ml-2 font-mono text-xs text-slate-400 font-medium">
                      {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    {project.number}
                  </span>
                </div>

                {/* Card Top Title Banner */}
                <div className="p-6 border-b border-dark-800 bg-dark-900/60">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-sky-400 font-semibold mb-1">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-dark-850 border border-dark-750 shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                  </div>
                </div>

                {/* Description & Features */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 4 Key Features */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                      Key Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-dark-950 p-2.5 rounded-xl border border-dark-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950 text-slate-400 border border-dark-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="p-6 pt-0 border-t border-dark-800 mt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {/* LIVE DEMO (Visually Prominent CTA) */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
                      title={`Open Live Demo of ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* GITHUB BUTTON */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-dark-850 hover:bg-dark-800 border border-dark-750 hover:border-slate-600 hover:text-white transition-colors"
                      title={`View ${project.title} source code`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                {/* Case Study Modal Trigger */}
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-300 transition-colors p-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};