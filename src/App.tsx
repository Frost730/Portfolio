import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AuroraBackground } from './components/AuroraBackground';

import { projects } from './data/projects';
import type { Project } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Active section observer for Navbar scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Categories list for filtering
  const filterCategories = [
    'All',
    'AI / ML',
    'Computer Vision',
    'Full Stack',
    'Frontend',
    'Data / Analytics',
    'Game Development',
  ];

  // Category counts calculation
  const categoryCounts = filterCategories.reduce((acc, cat) => {
    if (cat === 'All') {
      acc[cat] = projects.length;
    } else {
      acc[cat] = projects.filter((p) => p.filterCategories.includes(cat)).length;
    }
    return acc;
  }, {} as Record<string, number>);

  // Filtered project list for unified showcase
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.filterCategories.includes(selectedCategory));

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Smooth Organic Aurora Background Animation */}
      <AuroraBackground />

      {/* Sticky Header */}
      <Navbar 
        activeSection={activeSection} 
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Unified Projects Section */}
        <Projects
          projects={filteredProjects}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={filterCategories}
          categoryCounts={categoryCounts}
          onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
        />

        {/* 5. Education Section */}
        <Education />

        {/* 6. Certifications Section */}
        <Certifications />

        {/* 7. Built in Public / GitHub Section */}
        <GithubSection />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </div>
  );
};

export default App;
