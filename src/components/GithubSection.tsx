import React from 'react';
import { profile } from '../data/profile';
import { Terminal, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const GithubSection: React.FC = () => {
  return (
    <section className="py-20 relative" aria-label="Built in Public">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-dark-900 border border-dark-750 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700 text-xs font-mono text-slate-300 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Open Source</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Built in Public
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            My projects are available on GitHub, where you can explore the source code, architecture, and implementation details.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-slate-950" />
              <span>Visit GitHub Profile ↗</span>
            </a>

            <a
              href="https://github.com/Frost730?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-slate-600 transition-colors"
            >
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Explore All Repositories</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-dark-800 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>@Frost730</span>
            <span>&bull;</span>
            <span>Computer Vision &bull; Machine Learning</span>
            <span>&bull;</span>
            <span>MIT / Open Source</span>
          </div>

        </div>
      </div>
    </section>
  );
};