import React from 'react';
import { 
  GraduationCap, 
  Workflow, 
  Cpu, 
  Languages, 
  Code 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden text-left" aria-label="About Me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
            Engineering Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-2 leading-relaxed">
            Bridging foundational machine learning theory with robust, deployable software systems.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="p-6 rounded-2xl bg-dark-900 border border-dark-750 text-slate-200 leading-relaxed shadow-sm">
              I am an <span className="text-white font-bold">M.Sc. Computer Science graduate</span> specializing in <span className="text-white font-bold">Computer Vision and Deep Learning</span>. My core focus lies in engineering practical, real-time object detection systems that solve real-world visual perception challenges.
            </p>

            <p>
              I take pride in working across the entire machine-learning lifecycle - from raw data acquisition, preprocessing, and exploratory image augmentation, to training deep convolutional models, evaluating precision/recall frontiers, and packaging models into accessible interactive interfaces.
            </p>

            <p>
              Rather than treating ML as an isolated notebook experiment, I couple models with modern software engineering practices. Using frameworks like <span className="text-slate-100 font-mono text-sm font-semibold">FastAPI</span>, <span className="text-slate-100 font-mono text-sm font-semibold">Streamlit</span>, and <span className="text-slate-100 font-mono text-sm font-semibold">React</span>, I build end-to-end architectures where AI models reliably serve end users with low latency and intuitive design.
            </p>

            {/* Languages & Target */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-900 px-3.5 py-2 rounded-xl border border-dark-750">
                <Languages className="w-4 h-4 text-sky-400" />
                <span>Languages:</span>
                <span className="text-white font-semibold">English, Malayalam, Hindi</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-dark-900 px-3.5 py-2 rounded-xl border border-dark-750">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Targeting:</span>
                <span className="text-emerald-400 font-semibold">Entry-level ML & AI Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Competency Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-slate-600 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-dark-850 text-sky-400 border border-dark-700">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Full ML Pipeline Ownership</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Data cleaning, augmentation (rotations, brightness, scaling), anchor box optimization, training with PyTorch & Ultralytics, and rigorous evaluation with mAP, precision, and recall.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-slate-600 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-dark-850 text-blue-400 border border-dark-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Real-Time Inference & Edge Focus</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Architecting lightweight models like YOLOv8n that achieve ~118 FPS inference speeds, making them viable for low-latency visual perception tasks and edge scenarios.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-slate-600 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-dark-850 text-indigo-400 border border-dark-700">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Modern Software Craftsmanship</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Developing responsive frontends with React, TypeScript, and Tailwind CSS, coupled with FastAPI microservices and local SQLite databases for privacy-first, zero-telemetry workflows.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};