import React from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/solarData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Title Block (approx 4 cols on lg) */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-between h-full pr-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-[1.18] tracking-tight">
                Complete Solar <br />
                Solutions <span className="text-[#F5A623]">Under One Roof.</span>
              </h2>

              <p className="mt-3.5 text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                From consultation to installation, we provide end-to-end solar solutions for residential, commercial and industrial needs with premium products and professional support.
              </p>
            </div>

            <div className="mt-6 pt-2">
              <button
                onClick={() => onSelectService(servicesData[0])}
                className="inline-flex items-center space-x-2 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-5 py-2.5 rounded-lg text-xs shadow-xs transition-all cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right 4 Services Cards Grid (approx 8 cols on lg) */}
          <div className="lg:col-span-8 xl:col-span-8.5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group bg-white rounded-xl border border-gray-100 hover:border-amber-200 p-3.5 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#D98200] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-[11px] text-gray-500 leading-normal line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Image Thumbnail */}
                <div className="mt-3.5 rounded-lg overflow-hidden h-[95px] w-full bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
