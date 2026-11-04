import React, { useState } from 'react';
import { BarChart3, ArrowRight, MapPin, IndianRupee, Calendar, Leaf, ChevronDown } from 'lucide-react';

interface SavingsCalculatorProps {
  onOpenConsultation: (details: { bill: number; property: string; location: string }) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenConsultation }) => {
  const [billAmount, setBillAmount] = useState<string>('4500');
  const [propertyType, setPropertyType] = useState<string>('Residential');
  const [location, setLocation] = useState<string>('Maharashtra');

  const numericBill = Math.max(500, parseFloat(billAmount) || 4500);
  const factorMin = propertyType === 'Commercial' ? 0.85 : propertyType === 'Industrial' ? 0.90 : 0.75;
  const factorMax = propertyType === 'Commercial' ? 0.95 : propertyType === 'Industrial' ? 0.98 : 0.90;

  const monthlyMin = Math.round((numericBill * factorMin) / 100) * 100;
  const monthlyMax = Math.round((numericBill * factorMax) / 100) * 100;

  const annualMin = monthlyMin * 12;
  const annualMax = monthlyMax * 12;
  const co2Tons = ((numericBill * 0.8) / 8.5 * 12 * 0.85 / 1000).toFixed(1);

  const formatRupee = (val: number) => val.toLocaleString('en-IN');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenConsultation({ bill: numericBill, property: propertyType, location });
  };

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Dark Calculator Box (approx 9 cols on lg) */}
          <div className="lg:col-span-9 bg-[#141720] rounded-2xl p-6 sm:p-7 shadow-xl border border-gray-800 text-white flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center space-x-2.5 mb-1.5">
                <BarChart3 className="w-5 h-5 text-[#F8B814] fill-current" />
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Calculate Your <span className="text-[#F8B814]">Solar Savings</span>
                </h2>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                See how much you can save with solar energy for your home or business.
              </p>
            </div>

            {/* Form row */}
            <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
              {/* Monthly Bill */}
              <div className="sm:col-span-3">
                <label className="block text-[10px] font-semibold text-gray-300 mb-1">
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-[#1C202B] border border-gray-700 rounded-lg px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F8B814]"
                />
              </div>

              {/* Property Type */}
              <div className="sm:col-span-3">
                <label className="block text-[10px] font-semibold text-gray-300 mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full appearance-none bg-[#1C202B] border border-gray-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#F8B814] pr-7 cursor-pointer"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Location */}
              <div className="sm:col-span-3">
                <label className="block text-[10px] font-semibold text-gray-300 mb-1">
                  Your Location
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none bg-[#1C202B] border border-gray-700 rounded-lg pl-8 pr-7 py-2.5 text-xs text-white focus:outline-none focus:border-[#F8B814] cursor-pointer"
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                  <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Calculate Button */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold py-2.5 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Calculate Savings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Estimated Savings Box (approx 3 cols on lg) */}
          <div className="lg:col-span-3 bg-[#FFFDF7] border border-amber-200/70 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-gray-800 tracking-tight mb-4">
                Estimated Savings
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8B814] text-gray-950 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">Monthly Savings</div>
                    <div className="text-xs sm:text-[13px] font-black text-gray-900">
                      ₹ {formatRupee(monthlyMin)} – {formatRupee(monthlyMax)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8B814] text-gray-950 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">Annual Savings</div>
                    <div className="text-xs sm:text-[13px] font-black text-gray-900">
                      ₹ {formatRupee(annualMin)} – {formatRupee(annualMax)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-medium">CO₂ Reduction</div>
                    <div className="text-xs sm:text-[13px] font-black text-gray-900">
                      {co2Tons} Tons / Year
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-gray-400 mt-4 pt-2 border-t border-gray-100 text-center">
              *Calculated based on average DISCOM tariff in Maharashtra
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
