import React from 'react';
import { skillCategories } from '../data/skills';
import { 
  Eye, 
  Cpu, 
  Code2, 
  Layout, 
  Terminal, 
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-900/30 border-t border-dark-800 section-render-opt" aria-label="Technical Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
              Core Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Competencies
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-base">
              Hands-on experience demonstrated through academic research, computer vision projects, and deployed web applications.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Honest representation &bull; Zero fake percentages</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-dark-900/90 border border-dark-750 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-dark-700">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-sky-950/50 text-sky-200 border border-sky-500/30 font-semibold'
                          : 'bg-dark-850 text-slate-300 border border-dark-700/80 hover:border-slate-600'
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Line */}
              <div className="mt-6 pt-3 border-t border-dark-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED</span>
                <span className="text-slate-400">PRACTICAL USAGE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};