import React from 'react';
import { ArrowRight, Play, Zap, Leaf, Award, Users, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenSiteSurvey: () => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSiteSurvey, onOpenVideoModal }) => {
  return (
    <section id="home" className="relative pt-6 pb-8 sm:pb-12 overflow-hidden bg-white">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center space-x-2.5 mb-3.5">
              <span className="w-5 h-[2px] bg-[#F5A623] inline-block" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">
                CLEAN ENERGY &nbsp;•&nbsp; SUSTAINABLE INDIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-gray-900 leading-[1.06] tracking-tight">
              Save Today <br />
              Power a <span className="text-[#F5A623]">Brighter</span> <br />
              <span className="text-[#F5A623]">Tomorrow.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-xs sm:text-[14px] text-gray-600 leading-relaxed max-w-lg">
              R. S. Bhandari Solar Energy Solutions, led by Sumit Bhandari in Washim, delivers premier residential, commercial and industrial solar rooftop systems. Slash electricity bills by up to 90%, secure PM Surya Ghar government subsidies, and build a greener future.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenSiteSurvey}
                className="flex items-center space-x-2 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Get Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideoModal}
                className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-gray-800 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-gray-900 fill-gray-900 ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            {/* 5 Trust Metrics Strip */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FFF7E6] text-[#E5A106] flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 fill-[#E5A106]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-gray-900">Lower</div>
                  <div className="text-[9px] text-gray-500">Electricity Bills</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FFF7E6] text-[#E5A106] flex items-center justify-center shrink-0">
                  <Leaf className="w-3.5 h-3.5 fill-[#E5A106]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-gray-900">Clean</div>
                  <div className="text-[9px] text-gray-500">Green Energy</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FFF7E6] text-[#E5A106] flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-[#E5A106]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-gray-900">25+ Years</div>
                  <div className="text-[9px] text-gray-500">Experience</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FFF7E6] text-[#E5A106] flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5 text-[#E5A106]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-gray-900">4,200+</div>
                  <div className="text-[9px] text-gray-500">Happy Customers</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#FFF7E6] text-[#E5A106] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5A106]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-gray-900">MNRE</div>
                  <div className="text-[9px] text-gray-500">Approved Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-slate-900">
              <img
                src="/assets/solar_v2/hero_house.png"
                alt="Modern solar villa rooftop installation with EV charger"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
