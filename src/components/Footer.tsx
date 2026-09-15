import React from 'react';
import { profile } from '../data/profile';
import { FileDown, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Flagship Projects', href: '#featured' },
    { label: 'Live Apps', href: '#live-projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-left pt-14 pb-10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-dark-800 items-start">
          
          {/* Brand & Engineer Overview */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span className="text-xl font-extrabold text-white tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              M.Sc. Computer Science &bull; Machine Learning &amp; Computer Vision Enthusiast
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Grounded in practical machine learning, custom object detection pipelines, and full-stack software architecture. Based in {profile.location}.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Connect &amp; Assets
            </div>
            <div className="flex flex-col gap-2 text-xs font-medium">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>github.com/Frost730</span>
              </a>

              {profile.linkedin && profile.linkedin !== 'LINKEDIN_URL' ? (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <LinkedinIcon className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn (Available on request)</span>
                </span>
              )}

              <a
                href={profile.resumePath}
                download="Sainadh_V_Resume.pdf"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors pt-1"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Sainadh V. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-500">&bull;</span>
            <span className="text-slate-400">Machine Learning &amp; Computer Vision</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-750 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
