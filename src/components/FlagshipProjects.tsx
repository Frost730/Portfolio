import React from 'react';
import type { Project } from '../types';
import { 
  ArrowUpRight, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Zap, 
  BarChart3,
  GitBranch
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface FlagshipProjectsProps {
  studyPilot: Project;
  trafficSign: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const FlagshipProjects: React.FC<FlagshipProjectsProps> = ({
  studyPilot,
  trafficSign,
  onOpenCaseStudy,
}) => {
  return (
    <section id="featured" className="py-20 relative text-left" aria-label="Flagship Implementations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
            Layer 1 &bull; Core Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
            In-depth engineering implementations combining real-time computer vision pipelines, custom neural training, and production-grade Retrieval-Augmented Generation (RAG).
          </p>
        </div>

        <div className="space-y-16">
          
          {/* ============================================================ */}
          {/* FLAGSHIP 1: Traffic Sign Detection Using YOLOv8n */}
          {/* ============================================================ */}
          <article 
            className="rounded-3xl bg-dark-900 border border-dark-750 p-6 sm:p-10 hover:border-slate-600 transition-all duration-300 shadow-xl"
            aria-labelledby="traffic-sign-title"
          >
            {/* Card Header & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-dark-800">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  FLAGSHIP 01 &bull; COMPUTER VISION
                </span>
                <span className="text-xs font-mono text-slate-400">
                  5,011 Images &bull; 21 Classes
                </span>
              </div>

              <div className="flex items-center gap-3">
                {trafficSign.github && (
                  <a
                    href={trafficSign.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-dark-800 hover:bg-dark-750 hover:text-white border border-dark-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
                <button
                  onClick={() => onOpenCaseStudy(trafficSign)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-slate-100 hover:bg-white transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-950" />
                  <span>Technical Case Study</span>
                </button>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-6 mb-6">
              <h3 id="traffic-sign-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {trafficSign.title}
              </h3>
              <p className="text-sm font-mono text-sky-400 mt-1">
                {trafficSign.subtitle} &bull; {trafficSign.category}
              </p>
              <p className="text-base text-slate-300 mt-3 leading-relaxed max-w-4xl">
                {trafficSign.description}
              </p>
            </div>

            {/* Verified Metrics Dashboard Grid */}
            {trafficSign.metrics && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
                {trafficSign.metrics.map((m, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-dark-950/70 border border-dark-800 flex flex-col justify-between"
                  >
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>{m.label}</span>
                      <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-2 mb-1">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 leading-snug">
                      {m.description}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl bg-dark-950/50 border border-dark-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {trafficSign.details?.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-950/50 border border-dark-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Implemented Solution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {trafficSign.details?.solution}
                </p>
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            {trafficSign.architecture && (
              <div className="p-5 rounded-xl bg-dark-950/40 border border-dark-800 my-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>End-to-End Pipeline Architecture</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                  {trafficSign.architecture.flow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-dark-850 border border-dark-750 text-slate-200 font-medium">
                        {step}
                      </span>
                      {idx < trafficSign.architecture!.flow.length - 1 && (
                        <span className="text-slate-400">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Capabilities Checklist */}
            <div className="my-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Key Technical Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {trafficSign.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags & Card Actions */}
            <div className="pt-6 border-t border-dark-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {trafficSign.tags.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-300 border border-dark-750"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenCaseStudy(trafficSign)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-dark-800 hover:bg-dark-750 border border-dark-700 transition-colors"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>
          </article>


          {/* ============================================================ */}
          {/* FLAGSHIP 2: StudyPilot - AI Study Assistant */}
          {/* ============================================================ */}
          <article 
            className="rounded-3xl bg-dark-900 border border-dark-750 p-6 sm:p-10 hover:border-slate-600 transition-all duration-300 shadow-xl"
            aria-labelledby="studypilot-title"
          >
            {/* Card Header & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-dark-800">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  FLAGSHIP 02 &bull; AI / RAG &bull; FULL STACK
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Zero-Config Local SQLite Architecture
                </span>
              </div>

              <div className="flex items-center gap-3">
                {studyPilot.github && (
                  <a
                    href={studyPilot.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-dark-800 hover:bg-dark-750 hover:text-white border border-dark-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
                <button
                  onClick={() => onOpenCaseStudy(studyPilot)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-slate-100 hover:bg-white transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-950" />
                  <span>Technical Case Study</span>
                </button>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-6 mb-6">
              <h3 id="studypilot-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {studyPilot.title}
              </h3>
              <p className="text-sm font-mono text-indigo-400 mt-1">
                {studyPilot.subtitle} &bull; {studyPilot.category}
              </p>
              <p className="text-base text-slate-300 mt-3 leading-relaxed max-w-4xl">
                {studyPilot.description}
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl bg-dark-950/50 border border-dark-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studyPilot.details?.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-950/50 border border-dark-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Implemented Solution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {studyPilot.details?.solution}
                </p>
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            {studyPilot.architecture && (
              <div className="p-5 rounded-xl bg-dark-950/40 border border-dark-800 my-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                  <span>RAG System Pipeline</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                  {studyPilot.architecture.flow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-dark-850 border border-dark-750 text-slate-200 font-medium">
                        {step}
                      </span>
                      {idx < studyPilot.architecture!.flow.length - 1 && (
                        <span className="text-slate-400">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Capabilities Checklist */}
            <div className="my-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Key Platform Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {studyPilot.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags & Card Actions */}
            <div className="pt-6 border-t border-dark-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {studyPilot.tags.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-300 border border-dark-750"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenCaseStudy(studyPilot)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-dark-800 hover:bg-dark-750 border border-dark-700 transition-colors"
                >
                  <span>View Technical Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
