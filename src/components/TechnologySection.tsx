import React from 'react';
import { ArrowRight } from 'lucide-react';
import { techItems, TechItem } from '../data/solarData';

interface TechnologySectionProps {
  onSelectTech: (item: TechItem) => void;
  onOpenAllProducts: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({
  onSelectTech,
  onOpenAllProducts,
}) => {
  return (
    <section id="technology" className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-2 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#F5A623] inline-block" />
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">
                Our Technology
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              High-Performance Solar Products
            </h2>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
              We use the best-in-class solar panels, inverters and mounting systems for maximum performance and durability.
            </p>
          </div>

          <button
            onClick={onOpenAllProducts}
            className="inline-flex items-center space-x-1.5 border border-gray-200 hover:border-gray-400 text-gray-800 text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D98200]" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techItems.map((tech) => (
            <div
              key={tech.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Product Photo */}
                <div className="w-full h-28 sm:h-32 flex items-center justify-center p-2 mb-4 bg-gray-50/80 rounded-xl group-hover:bg-[#FFFBF2] transition-colors">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D98200] transition-colors">
                  {tech.name}
                </h3>

                {/* Bullet Points */}
                <ul className="mt-3 space-y-1.5 text-left">
                  {tech.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-[11px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F8B814] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Know More Button */}
              <button
                onClick={() => onSelectTech(tech)}
                className="mt-5 w-full flex items-center justify-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold py-2 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
