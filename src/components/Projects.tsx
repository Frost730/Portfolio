import React from 'react';
import type { Project } from '../types';
import { ProjectFilter } from './ProjectFilter';
import { 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  Film, 
  Gamepad2, 
  Wallet, 
  Flame, 
  HeartPulse,
  Eye,
  Brain,
  CheckCircle2, 
  BarChart3,
  ArrowUpRight,
  GitBranch
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  projects: Project[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
  categoryCounts: Record<string, number>;
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  selectedCategory,
  onSelectCategory,
  categories,
  categoryCounts,
  onOpenCaseStudy,
}) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'traffic-sign-detection':
        return <Eye className="w-5 h-5 text-sky-400" />;
      case 'studypilot':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'cineanime-vault':
        return <Film className="w-5 h-5 text-sky-400" />;
      case 'gamevault':
        return <Gamepad2 className="w-5 h-5 text-indigo-400" />;
      case 'personal-expense-tracker':
        return <Wallet className="w-5 h-5 text-emerald-400" />;
      case 'flappy-bird-remastered':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'careflow-kiosk':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative bg-dark-900/30 border-t border-dark-800 text-left section-render-opt"
      aria-label="Projects Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
            A comprehensive showcase of computer vision systems, Retrieval-Augmented Generation (RAG) platforms, and production web applications.
          </p>
        </div>

        {/* Category Filter */}
        <ProjectFilter
          categories={categories}
          activeCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          categoryCounts={categoryCounts}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isFlagship = project.layer === 1;

            return (
              <article
                key={project.id}
                className={`rounded-3xl bg-dark-900 border border-dark-750 p-6 sm:p-8 hover:border-slate-600 transition-all duration-300 shadow-xl flex flex-col justify-between group ${
                  isFlagship ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  {/* Top Bar / Category Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-dark-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-dark-850 border border-dark-700">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                            isFlagship 
                              ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                              : 'bg-dark-800 text-slate-300 border border-dark-700'
                          }`}>
                            {isFlagship ? 'FLAGSHIP' : project.live ? 'LIVE APP' : 'SYSTEM'} &bull; {project.number}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 block mt-0.5">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3 text-slate-950" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-dark-800 hover:bg-dark-750 hover:text-white border border-dark-700 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                          <span>Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5 mb-4">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Flagship Metrics (if present, like YOLOv8n) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                      {project.metrics.map((m, idx) => (
                        <div 
                          key={idx} 
                          className="p-3.5 rounded-xl bg-dark-950/70 border border-dark-800 flex flex-col justify-between"
                        >
                          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                            <span>{m.label}</span>
                            <BarChart3 className="w-3 h-3 text-sky-400" />
                          </div>
                          <div className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-1.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Architecture Flow Preview (for flagships) */}
                  {isFlagship && project.architecture && (
                    <div className="p-4 rounded-xl bg-dark-950/50 border border-dark-800 my-4">
                      <div className="text-xs font-mono text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                        <span>Pipeline Flow</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-300">
                        {project.architecture.flow.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span className="px-2.5 py-1 rounded-md bg-dark-850 border border-dark-750 text-slate-200">
                              {step}
                            </span>
                            {idx < project.architecture!.flow.length - 1 && (
                              <span className="text-slate-500">&rarr;</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Capabilities Checklist */}
                  <div className="my-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Case Study Trigger */}
                <div className="pt-5 mt-4 border-t border-dark-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-800 text-slate-300 border border-dark-750"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-200 bg-dark-800 hover:bg-dark-750 hover:text-white border border-dark-700 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                    <span>Case Study</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
