import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickMetrics } from './components/QuickMetrics';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FlagshipProjects } from './components/FlagshipProjects';
import { LiveProjects } from './components/LiveProjects';
import { AdditionalProjects } from './components/AdditionalProjects';
import { ProjectFilter } from './components/ProjectFilter';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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

  // Flagship projects (Layer 1)
  const studyPilot = projects.find((p) => p.id === 'studypilot')!;
  const trafficSign = projects.find((p) => p.id === 'traffic-sign-detection')!;

  // Live deployed projects (Layer 2)
  const liveProjects = projects.filter((p) => p.layer === 2);

  // Additional projects (Layer 3)
  const additionalProjects = projects.filter((p) => p.layer === 3);

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

  // Filtered lists for the project showcase
  const filteredLive = selectedCategory === 'All'
    ? liveProjects
    : liveProjects.filter((p) => p.filterCategories.includes(selectedCategory));

  const filteredAdditional = selectedCategory === 'All'
    ? additionalProjects
    : additionalProjects.filter((p) => p.filterCategories.includes(selectedCategory));

  const showFlagships = selectedCategory === 'All' || 
    (trafficSign.filterCategories.includes(selectedCategory) || studyPilot.filterCategories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. YOLOv8n Metrics Strip */}
        <QuickMetrics />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* Unified Project Showcase Area */}
        <div id="projects-container" className="relative pt-12">
          
          {/* Filtering Controls */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilter
              categories={filterCategories}
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </div>

          {/* 5. Flagship Projects (Layer 1) */}
          {showFlagships && (
            <FlagshipProjects
              studyPilot={studyPilot}
              trafficSign={trafficSign}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
            />
          )}

          {/* 6. Live Deployed Projects (Layer 2) */}
          {filteredLive.length > 0 && (
            <LiveProjects
              projects={filteredLive}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
            />
          )}

          {/* 7. Additional Projects (Layer 3) */}
          {filteredAdditional.length > 0 && (
            <AdditionalProjects
              projects={filteredAdditional}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
            />
          )}
        </div>

        {/* 8. Education Section */}
        <Education />

        {/* 9. Certifications Section */}
        <Certifications />

        {/* 10. Built in Public / GitHub Section */}
        <GithubSection />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
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
