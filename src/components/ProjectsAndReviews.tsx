import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import { projectsData, ProjectItem, testimonialsData } from '../data/solarData';

interface ProjectsAndReviewsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenAllProjects: () => void;
}

export const ProjectsAndReviews: React.FC<ProjectsAndReviewsProps> = ({
  onSelectProject,
  onOpenAllProjects,
}) => {
  const [projectStartIndex, setProjectStartIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const visibleProjects = projectsData.slice(projectStartIndex, projectStartIndex + 3);
  if (visibleProjects.length < 3 && projectsData.length >= 3) {
    visibleProjects.push(...projectsData.slice(0, 3 - visibleProjects.length));
  }

  const handlePrevProject = () => {
    setProjectStartIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setProjectStartIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentReview = testimonialsData[reviewIndex];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Our Recent Projects (approx 8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="w-5 h-[2px] bg-[#F5A623] inline-block" />
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    Our Recent Projects
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-gray-500">
                  Explore some of our latest solar installations across homes, businesses and industries.
                </p>
              </div>

              {/* View All & Arrow controls */}
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={onOpenAllProjects}
                  className="flex items-center space-x-1 border border-gray-200 hover:border-gray-300 text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3 h-3 text-[#D98200]" />
                </button>

                <button
                  onClick={handlePrevProject}
                  aria-label="Previous project"
                  className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextProject}
                  aria-label="Next project"
                  className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {visibleProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-amber-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  {/* Photo with built-in badge */}
                  <div className="relative h-32 sm:h-28 xl:h-32 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#D98200] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-[11px] text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="truncate">{project.location}</span>
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

          {/* Right Column: What Our Customers Say (approx 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            {/* Header with Arrow Controls */}
            <div className="flex items-center justify-between mb-6 pb-2">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">
                What Our Customers Say
              </h2>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevReview}
                  aria-label="Previous review"
                  className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextReview}
                  aria-label="Next review"
                  className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[220px]">
              <div>
                {/* Yellow Quote Mark */}
                <div className="text-3xl font-serif text-[#F8B814] leading-none mb-1">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed italic">
                  "{currentReview.quote}"
                </p>

                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F8B814] text-[#F8B814]" />
                  ))}
                </div>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center space-x-3 mt-4 pt-3 border-t border-gray-100">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.author}
                  className="w-9 h-9 rounded-full object-cover border border-amber-200 shadow-xs"
                />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-gray-900">
                    {currentReview.author}
                  </div>
                  <div className="text-[10px] text-gray-500">
                    {currentReview.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
