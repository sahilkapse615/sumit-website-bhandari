import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface BottomBannerProps {
  onSuccessSubmit: (data: { name: string; phone: string; city: string }) => void;
}

export const BottomBanner: React.FC<BottomBannerProps> = ({ onSuccessSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !phone) return;
    setSubmitted(true);
    onSuccessSubmit({ name, phone, city });
  };

  return (
    <section id="contact" className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop & Tablet View (Matches 100% pixel-for-pixel with exact interactive overlays) */}
        <div className="hidden md:block relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          {/* Exact banner image from mockup */}
          <img
            src="/assets/solar/bottom_banner_bg.png"
            alt="Let's Build a Cleaner, Brighter Future Together - R. S. Bhandari Solar"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Form Overlay directly aligned with the white card in the image */}
          {submitted ? (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-xl px-6 py-4 shadow-xl border border-gray-100 flex items-center space-x-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">
                    Thank you! We received your quote request.
                  </div>
                  <div className="text-[11px] text-gray-600">
                    Our team will call you shortly with your customized solar quotation.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Invisible interactive inputs aligned exactly over the 3 input slots in the image */}
              {/* Coordinates based on 1024x160: 
                  Input 1: left 34.2%, top 37%, width 14.8%, height 24% 
                  Input 2: left 49.8%, top 37%, width 15.2%, height 24%
                  Input 3: left 66.2%, top 37%, width 15.2%, height 24%
                  Button:  left 82.8%, top 34%, width 12.5%, height 27%
              */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                title="Enter your name"
                className="absolute z-10 text-[11px] lg:text-xs text-gray-900 font-medium px-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:bg-white/90 transition-colors"
                style={{
                  left: '34.2%',
                  top: '38%',
                  width: '14.8%',
                  height: '24%',
                  backgroundColor: name ? 'rgba(255,255,255,0.95)' : 'transparent',
                }}
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder=" "
                title="Enter your phone number"
                className="absolute z-10 text-[11px] lg:text-xs text-gray-900 font-medium px-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:bg-white/90 transition-colors"
                style={{
                  left: '49.8%',
                  top: '38%',
                  width: '15.4%',
                  height: '24%',
                  backgroundColor: phone ? 'rgba(255,255,255,0.95)' : 'transparent',
                }}
              />

              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder=" "
                title="Enter your city"
                className="absolute z-10 text-[11px] lg:text-xs text-gray-900 font-medium px-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:bg-white/90 transition-colors"
                style={{
                  left: '66.2%',
                  top: '38%',
                  width: '15.4%',
                  height: '24%',
                  backgroundColor: city ? 'rgba(255,255,255,0.95)' : 'transparent',
                }}
              />

              {/* Clickable button overlay on top of Get Free Quote */}
              <button
                type="submit"
                title="Get Free Quote"
                className="absolute z-10 rounded-lg cursor-pointer hover:bg-black/5 active:bg-black/10 transition-colors"
                style={{
                  left: '82.8%',
                  top: '34%',
                  width: '12.8%',
                  height: '28%',
                  backgroundColor: 'transparent',
                }}
                aria-label="Get Free Quote"
              />
            </form>
          )}
        </div>

        {/* Mobile View (< 768px): Responsive clean card so it's fully readable and tap-friendly on phones */}
        <div className="md:hidden relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#FFF7E8] via-white to-amber-50 border border-amber-200 shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-black text-gray-950 tracking-tight leading-tight">
              <span className="relative inline-block">
                let's
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#F5A623] -z-10 rounded-full" />
              </span>{' '}
              Build a Cleaner, <br />
              Brighter Future Together.
            </h2>
            <p className="mt-2 text-xs text-gray-600 leading-normal">
              Get a free consultation and custom solar solution for your home, business or industry.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center space-x-3 text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <strong>Thank you!</strong> We have received your details and will call you shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold py-2.5 rounded-lg text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
