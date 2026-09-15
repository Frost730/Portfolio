import React from 'react';
import { profile } from '../data/profile';
import { HeroProfileImage } from './HeroProfileImage';
import { 
  ArrowRight, 
  FileDown, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden text-left"
      aria-label="Hero Section"
    >
      {/* Subtle Ambient Radial Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Engineer Positioning & Information */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & Focus Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-dark-750 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse-subtle" />
                <span>M.Sc. Computer Science &bull; AI / ML &bull; Computer Vision</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-medium text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for ML &amp; AI Engineering Roles</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 tracking-tight">
                Machine Learning &amp; Computer Vision Enthusiast
              </p>
            </div>

            {/* Resume-Grounded Supporting Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.tagline} {profile.summary}
            </p>

            {/* Clean Location & Competency Chips */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5 text-slate-300 bg-dark-900 px-3 py-1.5 rounded-lg border border-dark-800">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-dark-900 px-3 py-1.5 rounded-lg border border-dark-800">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                Python &bull; PyTorch &bull; YOLOv8 &bull; React &bull; FastAPI
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-dark-900 px-3 py-1.5 rounded-lg border border-dark-800">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                English, Malayalam, Hindi
              </span>
            </div>

            {/* Hero CTAs: Clean & Fluid */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-slate-100 hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.resumePath}
                download="Sainadh_V_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900 hover:bg-dark-850 border border-dark-750 hover:border-slate-600 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-dark-900/80 hover:bg-dark-850 border border-dark-800 hover:border-dark-700 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Interactive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroProfileImage />
          </div>

        </div>
      </div>
    </section>
  );
};
