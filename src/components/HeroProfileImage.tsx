import React, { useState, useRef } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export const HeroProfileImage: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only perform 3D tilt on devices with mouse/fine pointer to avoid touch conflicts
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // Gentle max 8 deg
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="relative flex items-center justify-center select-none py-4 lg:py-0 w-full max-w-sm mx-auto">
      {/* Ambient background glow */}
      <div 
        className={`absolute -inset-3 sm:-inset-4 rounded-[40px] bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-emerald-500/15 blur-2xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-65 scale-100'
        }`}
      />

      {/* 3D Interactive Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${
            isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
          }`,
          transition: isHovered 
            ? 'transform 0.1s ease-out' 
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative w-64 sm:w-72 md:w-80 max-w-[calc(100vw-3rem)] aspect-[3/4] p-2 sm:p-2.5 rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-slate-700/50 via-dark-800/80 to-dark-900/90 border border-dark-700/80 shadow-2xl backdrop-blur-md cursor-pointer transition-shadow duration-500 group"
      >
        {/* Inner Border & Image Frame */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-[24px] overflow-hidden bg-dark-950 border border-white/10 shadow-inner">
          {/* Main User Portrait Image */}
          <img
            src={profile.image || './sainadh.jpg'}
            alt="Sainadh V - Machine Learning & Computer Vision"
            width={297}
            height={400}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_15%] scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="eager"
          />

          {/* Interactive Specular Glare Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
            }}
          />

          {/* Subtle bottom gradient vignette */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent pointer-events-none" />
        </div>

        {/* Floating Top Badge - Positioned safely for mobile screens */}
        <div className="absolute -top-3 left-1 sm:-left-3 z-20 flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-dark-900/95 border border-dark-700 text-[11px] sm:text-xs font-mono text-slate-200 shadow-xl backdrop-blur-md animate-float group-hover:border-sky-400/50 transition-colors">
          <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>Computer Vision &bull; AI</span>
        </div>

        {/* Floating Status Badge - Positioned safely for mobile screens */}
        <div className="absolute -bottom-3 right-1 sm:-right-3 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-dark-900/95 border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-emerald-300 shadow-xl backdrop-blur-md animate-float-delayed group-hover:border-emerald-400/60 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Available for Roles</span>
        </div>

        {/* Bottom Credential Tag inside frame */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-300 bg-dark-950/85 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-dark-750 backdrop-blur shadow">
          <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
          <span>M.Sc. CS &bull; 2026</span>
        </div>
      </div>
    </div>
  );
};
