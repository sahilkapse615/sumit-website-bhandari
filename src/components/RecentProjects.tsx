import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/solarData';

interface RecentProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenAllProjects: () => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({
  onSelectProject,
  onOpenAllProjects,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <section id="projects" className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-1 gap-4">
          <div>
            <div className="flex items-center space-x-2.5 mb-1">
              <span className="w-1.5 h-6 bg-[#F5A623] inline-block rounded-full" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                Our Recent Projects <br className="sm:hidden" />
                <span className="font-extrabold text-gray-800 sm:ml-2">Real Installations. Real Impact.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-gray-500 pl-4">
              Explore some of our latest solar installations across homes, businesses and industries.
            </p>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0 pl-4 sm:pl-0">
            <button
              onClick={onOpenAllProjects}
              className="flex items-center space-x-1.5 border border-gray-200 hover:border-gray-400 bg-white text-gray-800 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D98200]" />
            </button>

            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-300 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo with built-in cream pill badge */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Footer */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#D98200] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-[11px] text-gray-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F8B814] shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Circular Yellow Arrow Button */}
                <div className="w-7 h-7 rounded-full bg-[#F8B814] text-gray-950 flex items-center justify-center shrink-0 ml-2 group-hover:scale-110 group-hover:bg-[#e5a812] transition-all shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
