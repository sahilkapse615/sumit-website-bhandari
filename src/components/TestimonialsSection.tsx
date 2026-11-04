import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/solarData';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Title Block (approx 3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-start space-x-2.5 mb-2">
                <span className="w-1.5 h-7 bg-[#F5A623] inline-block rounded-full shrink-0 mt-0.5" />
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                  Our Customers <br />
                  Trust Us
                </h2>
              </div>

              <p className="mt-2 text-xs sm:text-[13px] text-gray-500 leading-relaxed pl-4">
                Trusted by thousands of homeowners and businesses across Maharashtra.
              </p>
            </div>

            <div className="flex items-center space-x-2 mt-6 pl-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center text-gray-700 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-7 h-7 rounded-full border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center text-gray-700 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 3 Testimonial Cards (approx 9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[190px]"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center space-x-1 mb-2.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F8B814] text-[#F8B814]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author footer with circular photo */}
                <div className="flex items-center space-x-2.5 mt-4 pt-3 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-8 h-8 rounded-full object-cover border border-amber-200 shadow-2xs shrink-0"
                  />
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-gray-900">{item.author}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
