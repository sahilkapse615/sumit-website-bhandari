import React from 'react';
import { MapPin, Compass, Headphones, Landmark, ShieldCheck } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const values = [
    {
      icon: <MapPin className="w-5 h-5 text-[#E5A106]" />,
      title: 'Free Site Survey',
      subtitle: 'at Your Location',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#E5A106]" />,
      title: 'Custom System Design',
      subtitle: 'as per Your Need',
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#E5A106]" />,
      title: 'End-to-End Support',
      subtitle: 'from Installation to Service',
    },
    {
      icon: <Landmark className="w-5 h-5 text-[#E5A106]" />,
      title: 'Government Subsidy',
      subtitle: 'Assistance',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E5A106]" />,
      title: 'High Quality Products',
      subtitle: '& Expert Installation',
    },
  ];

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-5 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {values.map((v, i) => (
            <div
              key={i}
              className={`flex items-center space-x-3 ${i > 0 ? 'pt-3 lg:pt-0 lg:pl-4' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF7E8] flex items-center justify-center shrink-0">
                {v.icon}
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-gray-900">{v.title}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{v.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
