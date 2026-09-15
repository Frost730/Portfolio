import React, { useEffect } from 'react';
import type { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-900 border border-dark-750 shadow-2xl p-6 sm:p-8 text-left text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-dark-850 text-slate-400 hover:text-white hover:bg-dark-800 border border-dark-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 pb-6 border-b border-dark-750">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-sky-400 px-2 py-0.5 rounded bg-dark-850 border border-dark-700">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-sm text-slate-300 font-medium mt-0.5">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Action Buttons Bar */}
        <div className="py-4 flex flex-wrap items-center gap-3 border-b border-dark-800">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Open Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-850 hover:bg-dark-800 border border-dark-750 hover:border-slate-600 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Code ↗</span>
            </a>
          )}

          {!project.live && (
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
              Source repository deployment
            </span>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-6">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
              Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-5 rounded-2xl bg-dark-950 border border-dark-800">
              <h3 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Key Performance Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-dark-900 border border-dark-750 font-mono">
                    <div className="text-xl font-extrabold text-white">{m.value}</div>
                    <div className="text-xs font-semibold text-sky-300 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution */}
          {project.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-dark-950 border border-dark-800">
                <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> The Problem
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-950 border border-dark-800">
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> The Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 font-semibold">
              Key Capabilities &amp; Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-dark-950 border border-dark-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Flow */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 font-semibold">
                Architecture Flow
              </h3>
              <div className="space-y-2">
                {project.architecture.flow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-dark-950 border border-dark-800 text-xs font-mono">
                    <span className="w-5 h-5 rounded bg-dark-850 text-sky-400 border border-dark-750 flex items-center justify-center font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 text-slate-300 border border-dark-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-dark-750 flex items-center justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-dark-850 hover:bg-dark-800 border border-dark-700 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};