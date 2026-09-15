import React from 'react';
import { Filter } from 'lucide-react';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-dark-800 text-left">
      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2 py-1">
        <Filter className="w-3.5 h-3.5 text-sky-400" />
        <span>Filter Category:</span>
      </div>

      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = categoryCounts[cat] || 0;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            type="button"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
              isActive
                ? 'bg-slate-100 text-slate-950 font-bold shadow-sm'
                : 'bg-dark-900 text-slate-400 hover:text-slate-200 hover:bg-dark-850 border border-dark-800'
            }`}
          >
            <span>{cat}</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
              isActive ? 'bg-slate-300 text-slate-900 font-bold' : 'bg-dark-850 text-slate-500'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};