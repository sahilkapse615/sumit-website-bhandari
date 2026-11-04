import React from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sun, MapPin, IndianRupee } from 'lucide-react';
import { ServiceItem, TechItem, ProjectItem } from '../data/solarData';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: ServiceItem | null;
  tech?: TechItem | null;
  project?: ProjectItem | null;
  about?: boolean;
  subsidy?: boolean;
  onOpenQuote: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  service,
  tech,
  project,
  about,
  subsidy,
  onOpenQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#FFF9EA] border-b border-[#FDE68A] p-5 flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8B814] flex items-center justify-center text-gray-950 font-bold shadow-xs">
              <Sun className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                {service?.title || tech?.name || project?.title || (about ? 'Why Choose R. S. Bhandari' : 'Government Subsidy Support')}
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                {service?.tagline || tech?.subtitle || project?.location || 'R. S. Bhandari Solar Energy Solutions'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          
          {/* Service detail */}
          {service && (
            <div className="space-y-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {service.details}
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>25-year linear performance warranty on solar panels</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete net-metering &amp; DISCOM approval included</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero roof slab leakage guarantee</span>
                </div>
              </div>
            </div>
          )}

          {/* Tech detail */}
          {tech && (
            <div className="space-y-4">
              <div className="h-36 w-full flex items-center justify-center p-3 bg-gray-50 rounded-xl">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {tech.details}
              </p>
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900">
                <div className="font-bold mb-1">Standard Quality Assurance:</div>
                Tier-1 component selection verified for harsh Indian environmental factors, high UV resistance, and heavy monsoon rains.
              </div>
            </div>
          )}

          {/* Project detail */}
          {project && (
            <div className="space-y-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 bg-[#F8FAFC] p-3 rounded-xl border border-gray-100 text-xs">
                <div>
                  <span className="text-gray-500 block text-[10px]">Installation Capacity:</span>
                  <span className="font-bold text-gray-900">{project.capacity}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">Monthly Generation:</span>
                  <span className="font-bold text-gray-900">{project.unitsMonthly}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">Customer Monthly Savings:</span>
                  <span className="font-bold text-emerald-700">{project.savings}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">Installation Location:</span>
                  <span className="font-bold text-gray-900">{project.location}</span>
                </div>
              </div>
            </div>
          )}

          {/* About Us detail */}
          {about && (
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Founded and led by <strong>Sumit Bhandari in Washim</strong>, <strong>R. S. Bhandari Solar Energy Solutions</strong> is an MNRE-approved channel partner and the leading solar rooftop dealer with over 25 years of engineering experience across Maharashtra.
              </p>
              <p>
                Having empowered over 4,200+ satisfied residential homeowners, commercial enterprises, and industrial clients in Washim and Vidarbha, we specialize in turnkey on-grid &amp; hybrid solar systems, PM Surya Ghar subsidy processing, and signature 8.5-foot elevated rooftop pergolas.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  <div className="font-bold text-gray-900">25+ Years</div>
                  <div className="text-[10px] text-gray-600">Track record of excellence</div>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  <div className="font-bold text-gray-900">4,200+</div>
                  <div className="text-[10px] text-gray-600">Successful installations</div>
                </div>
              </div>
            </div>
          )}

          {/* Subsidy detail */}
          {subsidy && (
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Under the Government of India's <strong>PM Surya Ghar Muft Bijli Yojana</strong>, homeowners can receive direct bank subsidies up to:
              </p>
              <div className="space-y-2 bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                <div className="flex justify-between items-center font-bold text-gray-900 text-xs">
                  <span>1 kW Solar System:</span>
                  <span className="text-emerald-700">₹ 30,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center font-bold text-gray-900 text-xs">
                  <span>2 kW Solar System:</span>
                  <span className="text-emerald-700">₹ 60,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center font-bold text-gray-900 text-xs">
                  <span>3 kW to 10 kW System:</span>
                  <span className="text-emerald-700">₹ 78,000 Subsidy</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500">
                *R. S. Bhandari handles your complete portal registration, technical feasibility approval, and bi-directional meter testing with MSEDCL.
              </p>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="flex items-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-4 py-2.5 rounded-lg text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
