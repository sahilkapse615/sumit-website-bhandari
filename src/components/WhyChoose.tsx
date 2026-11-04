import React from 'react';
import { ArrowRight, Award, Gem, HardHat, Calendar, Users, Headphones } from 'lucide-react';

interface WhyChooseProps {
  onOpenAboutModal: () => void;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ onOpenAboutModal }) => {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-[#E5A106]" />,
      title: 'MNRE Approved',
      subtitle: 'Channel Partner',
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#E5A106]" />,
      title: '25+ Years',
      subtitle: 'Experience',
    },
    {
      icon: <Gem className="w-5 h-5 text-[#E5A106]" />,
      title: 'Premium Quality',
      subtitle: 'Products',
    },
    {
      icon: <Users className="w-5 h-5 text-[#E5A106]" />,
      title: '100%',
      subtitle: 'Customer Satisfaction',
    },
    {
      icon: <HardHat className="w-5 h-5 text-[#E5A106]" />,
      title: 'Expert Installation',
      subtitle: '& Support',
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#E5A106]" />,
      title: 'After Sales',
      subtitle: 'Service',
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-14 bg-[#FAFAFA] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-3">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
              Why Choose <br />
              R. S. Bhandari?
            </h2>

            <p className="mt-2.5 text-xs text-gray-600 leading-relaxed">
              Led by Sumit Bhandari in Washim, we combine advanced solar technology, Tier-1 products and expert EPC installation to deliver trusted residential &amp; commercial solar power systems across Maharashtra.
            </p>

            <button
              onClick={onOpenAboutModal}
              className="mt-5 inline-flex items-center space-x-2 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-4 py-2.5 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center 6 Feature Tiles (3 cols x 2 rows on md/lg) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 p-3 flex flex-col items-start justify-between shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-amber-200 transition-colors"
              >
                <div className="mb-2">{item.icon}</div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-gray-900">{item.title}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Banner Card with Engineer Quote */}
          <div className="lg:col-span-4 h-full flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-amber-100 bg-[#FFF7E8] min-h-[160px] flex items-center">
              <img
                src="/assets/solar_v2/why_choose_banner.png"
                alt="Our goal is a cleaner greener and brighter India with solar energy - R. S. Bhandari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
