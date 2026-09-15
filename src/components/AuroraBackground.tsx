import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC = () => {
  const ribbon1Ref = useRef<HTMLDivElement>(null);
  const ribbon2Ref = useRef<HTMLDivElement>(null);
  const ribbon3Ref = useRef<HTMLDivElement>(null);
  const ribbon4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (ribbon1Ref.current) {
            ribbon1Ref.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
          }
          if (ribbon2Ref.current) {
            ribbon2Ref.current.style.transform = `translate3d(0, ${y * -0.07}px, 0)`;
          }
          if (ribbon3Ref.current) {
            ribbon3Ref.current.style.transform = `translate3d(0, ${y * 0.07}px, 0)`;
          }
          if (ribbon4Ref.current) {
            ribbon4Ref.current.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-dark-950"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* Deep Space Base Tint */}
      <div className="absolute inset-0 bg-[#060810]" />

      {/* Aurora Ribbon 1 - Cyan / Sky Blue Wave */}
      <div
        ref={ribbon1Ref}
        className="absolute -top-[25%] -left-[15%] w-[85vw] h-[80vh] rounded-full blur-[110px] sm:blur-[140px] animate-aurora-1 opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.45) 0%, rgba(56, 189, 248, 0.25) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Aurora Ribbon 2 - Emerald / Mint Northern Flare */}
      <div
        ref={ribbon2Ref}
        className="absolute top-[20%] -right-[15%] w-[75vw] h-[75vh] rounded-full blur-[120px] sm:blur-[150px] animate-aurora-2 opacity-25 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.40) 0%, rgba(20, 184, 166, 0.25) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Aurora Ribbon 3 - Deep Indigo / Violet Arc */}
      <div
        ref={ribbon3Ref}
        className="absolute top-[55%] -left-[10%] w-[80vw] h-[70vh] rounded-full blur-[130px] sm:blur-[160px] animate-aurora-3 opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.35) 0%, rgba(99, 102, 241, 0.22) 50%, transparent 75%)',
          willChange: 'transform',
        }}
      />

      {/* Aurora Ribbon 4 - Teal & Soft Aqua lower horizon */}
      <div
        ref={ribbon4Ref}
        className="absolute -bottom-[20%] right-[5%] w-[70vw] h-[65vh] rounded-full blur-[120px] sm:blur-[150px] animate-aurora-1 opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(45, 212, 191, 0.35) 0%, rgba(14, 165, 233, 0.2) 50%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Soft Matrix Grid for Depth */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Dark Ambient Edge Falloff */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/60 pointer-events-none" />
    </div>
  );
};
