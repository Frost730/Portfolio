import React, { useEffect, useState } from 'react';

interface BackgroundGlitchProps {
  trigger: string | number; // changes when navigating between sections
}

export const BackgroundGlitch: React.FC<BackgroundGlitchProps> = ({ trigger }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setIsGlitching(true);
    const timeout = setTimeout(() => {
      setIsGlitching(false);
    }, 420);

    return () => clearTimeout(timeout);
  }, [trigger]);

  if (!isGlitching) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Fast, subtle digital scanline beam sweep */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-sky-400/10 to-transparent blur-sm animate-glitch-scanline" />

      {/* 2. Top-half horizontal slice displacement (Cyan tint) */}
      <div 
        className="absolute inset-x-0 top-[28%] h-14 bg-gradient-to-r from-transparent via-sky-500/15 to-transparent blur-[2px] animate-glitch-slice-1"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      />

      {/* 3. Mid-lower horizontal slice displacement (Indigo tint) */}
      <div 
        className="absolute inset-x-0 top-[62%] h-16 bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent blur-[2px] animate-glitch-slice-2"
        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)' }}
      />

      {/* 4. Subtle RGB chromatic edge glow pulse */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5 opacity-50 animate-glitch-flash" />

      {/* 5. Fine scanline raster pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(56, 189, 248, 0.08) 0px, rgba(56, 189, 248, 0.08) 1px, transparent 1px, transparent 4px)',
        }}
      />
    </div>
  );
};
