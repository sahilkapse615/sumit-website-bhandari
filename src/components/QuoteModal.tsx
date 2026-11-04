import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialBill?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Residential Solar',
  initialBill = 4500,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [solarType, setSolarType] = useState(initialType);
  const [bill, setBill] = useState(initialBill.toString());
  const [roofType, setRoofType] = useState('Flat RCC Terrace');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#FFF9EA] border-b border-[#FDE68A] p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8B814] flex items-center justify-center text-gray-950 font-bold shadow-xs">
              <Sun className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                Get Free Solar Site Survey &amp; Quote
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Up to 78,000 PM Surya Ghar Subsidy Assistance Included
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

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Survey Request Confirmed!
                </h4>
                <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-gray-900">{name}</span>. An authorized engineer from R. S. Bhandari Solar will contact you at <span className="font-semibold text-gray-900">{phone}</span> to schedule your free roof survey.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-3 text-xs text-gray-700 text-left border border-gray-100 space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Solution:</span>
                  <span className="font-semibold">{solarType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Estimated Subsidy:</span>
                  <span className="font-semibold text-emerald-700">₹ 78,000 (Central MNRE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Target Net-Metering:</span>
                  <span className="font-semibold text-gray-900">MSEDCL Approved</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-6 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98221 XXXXX"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    City / Town in Maharashtra *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Washim, Pusad, Akola"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="4500"
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={solarType}
                    onChange={(e) => setSolarType(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  >
                    <option value="Residential Solar">Residential Solar</option>
                    <option value="Rooftop Pergola">Rooftop Pergola (Elevated)</option>
                    <option value="Commercial Solar">Commercial Complex</option>
                    <option value="Industrial Solar">Industrial / Factory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Roof Type
                  </label>
                  <select
                    value={roofType}
                    onChange={(e) => setRoofType(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                  >
                    <option value="Flat RCC Terrace">Flat RCC Terrace</option>
                    <option value="Slanted Tin / Sheet Roof">Slanted Tin / Sheet Roof</option>
                    <option value="Tile Roof">Mangalore Tile Roof</option>
                    <option value="Open Ground">Open Ground Plot</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start space-x-2 text-[11px] text-amber-900">
                <ShieldCheck className="w-4 h-4 text-[#D98200] shrink-0 mt-0.5" />
                <span>
                  <strong>R. S. Bhandari Assurance:</strong> Zero slab leakage guarantee, 25 years linear power warranty, and end-to-end DISCOM net metering processing.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-6 py-2.5 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Submit Free Survey Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
