import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SubsidyProps {
  onOpenSubsidyModal: () => void;
}

export const Subsidy: React.FC<SubsidyProps> = ({ onOpenSubsidyModal }) => {
  const checklist = [
    'MNRE Subsidy',
    'State Government Subsidy',
    'Documentation Support',
    'Hassle Free Process',
  ];

  return (
    <section id="subsidy" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#FFF9EA] border border-[#FDE68A] p-6 sm:p-8 lg:p-9 shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Golden Pillar Icon */}
            <div className="lg:col-span-1 hidden sm:flex items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF1CE] flex items-center justify-center shadow-xs border border-[#FDE68A]">
                <img
                  src="/assets/solar/subsidy_pillar_icon.png"
                  alt="Government support pillar"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Middle: Content & CTA */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-[26px] font-black text-gray-900 tracking-tight leading-tight">
                Government Subsidy Support
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                Get complete assistance for MNRE &amp; State Government solar subsidies. Our team handles all documentation and application process.
              </p>

              <button
                onClick={onOpenSubsidyModal}
                className="mt-5 inline-flex items-center space-x-2 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-6 py-2.5 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Checklist items */}
            <div className="lg:col-span-3 space-y-2.5">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A106] fill-[#FFF3D6] shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Far Right: House in landscape image */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="relative w-52 sm:w-60 lg:w-full max-w-[250px] rounded-xl overflow-hidden drop-shadow-md">
                <img
                  src="/assets/solar_v2/subsidy_house.png"
                  alt="Solar subsidy eco house"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
