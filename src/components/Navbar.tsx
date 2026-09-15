import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen to Escape when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Featured', href: '#featured' },
    { label: 'Projects', href: '#projects-container' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-dark-950/95 backdrop-blur-md border-b border-dark-800 shadow-md py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
            aria-label="Sainadh V - Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-dark-900 border border-dark-700 text-white font-mono font-bold text-sm group-hover:border-slate-500 transition-colors">
              {profile.initials}
            </div>
            <div className="text-left">
              <span className="font-semibold text-sm tracking-tight text-white block">
                {profile.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 block leading-tight hidden xs:block">
                ML &bull; Computer Vision
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/80 px-3 py-1.5 rounded-full border border-dark-800" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-dark-850 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={profile.resumePath}
              download="Sainadh_V_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-dark-900 hover:bg-dark-850 border border-dark-750 hover:border-slate-600 transition-colors"
              title="Download Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
              title="Visit GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-950" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-dark-850 border border-dark-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-800 bg-dark-950 shadow-2xl py-5 px-5 max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1 text-left" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-dark-900 active:bg-dark-850 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-400 text-xs font-mono">&rarr;</span>
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-dark-800 flex flex-col gap-2.5">
                <a
                  href={profile.resumePath}
                  download="Sainadh_V_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-dark-900 border border-dark-750"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-950 bg-white"
                >
                  <GithubIcon className="w-4 h-4 text-slate-950" />
                  <span>GitHub (@Frost730)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay when mobile drawer is open */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
