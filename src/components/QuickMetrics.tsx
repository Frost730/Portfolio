import React, { useState } from 'react';
import { profile } from '../data/profile';
import { Target, CheckCheck, Gauge, Zap, Info, Database } from 'lucide-react';

export const QuickMetrics: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const icons = [
    <Target key="target" className="w-5 h-5 text-sky-400" />,
    <CheckCheck key="check" className="w-5 h-5 text-blue-400" />,
    <Gauge key="gauge" className="w-5 h-5 text-indigo-400" />,
    <Zap key="zap" className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section 
      id="metrics" 
      className="relative py-14 border-y border-dark-800 bg-dark-900/40 text-left"
      aria-label="YOLOv8n Detection Performance Metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Context Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
              Verified Model Evaluation Metrics
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              YOLOv8n Traffic Sign Detection Benchmark
            </h2>
          </div>

          {/* Dataset & Hardware Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-dark-900 text-slate-300 border border-dark-750 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              5,011 Images &bull; 21 Classes
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-dark-900 text-slate-300 border border-dark-750">
              Kaggle GPU Acceleration
            </span>
          </div>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profile.yoloMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-dark-700">
                    {icons[idx]}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                    className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                    aria-label={`Definition of ${metric.label}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Unrounded Metric Value */}
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {metric.value}
                </div>

                {/* Metric Label */}
                <div className="text-sm font-bold text-slate-200 tracking-wide">
                  {metric.label}
                </div>

                {/* Plain-English Technical Description */}
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {metric.detail}
                </p>
              </div>

              {/* Explanatory expansion if toggled */}
              {activeTooltip === idx && (
                <div className="mt-3 pt-3 border-t border-dark-750 text-xs text-sky-300 animate-in fade-in duration-150">
                  {metric.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 text-center mt-6 font-mono">
          Evaluated across held-out validation images at IoU 0.50. Real-time inference benchmarked on GPU hardware.
        </p>

      </div>
    </section>
  );
};