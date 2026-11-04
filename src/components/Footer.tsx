import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'Subsidy', href: '#subsidy' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Tagline, Links, Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
          
          {/* Left: Logo & Tagline */}
          <div className="shrink-0 text-center lg:text-left">
            <a href="#home">
              <img
                src="/assets/solar_v2/logo.png"
                alt="r. s. bhandari Solar Energy Solutions"
                className="h-9 sm:h-10 w-auto object-contain mx-auto lg:mx-0"
              />
            </a>
            <div className="text-[11px] text-gray-500 font-medium mt-1.5">
              Clean Energy for a Brighter Tomorrow.
            </div>
          </div>

          {/* Center Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-gray-700">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <a
                  href={link.href}
                  className="hover:text-black transition-colors"
                >
                  {link.name}
                </a>
                {link.active && (
                  <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-1" />
                )}
              </div>
            ))}
          </nav>

          {/* Right: Newsletter Subscription */}
          <div className="shrink-0 text-center lg:text-right">
            <div className="text-xs font-bold text-gray-900">
              Subscribe to Updates
            </div>
            <div className="text-[10px] text-gray-500 mb-2">
              Get the latest news and offers.
            </div>

            {subscribed ? (
              <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center space-x-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#F8B814] w-48 sm:w-56"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-8 h-8 rounded-lg bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Local SEO & Authorized Dealer Strip */}
        <div className="py-4 border-b border-gray-100 text-[11px] text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <span className="font-bold text-gray-800">
              R. S. Bhandari Solar Energy Solutions · Led by Sumit Bhandari
            </span>
            <span className="text-[10px] text-gray-500">
              Authorized Solar Dealer in Washim, Pusad, Hingoli, Akola, Amravati &amp; Vidarbha (Maharashtra)
            </span>
          </div>
          <div className="text-[10px] text-gray-400 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-gray-600">Popular Searches:</span>
            <span>Sumit Bhandari Washim</span>
            <span>•</span>
            <span>R. S. Bhandari Solar Washim</span>
            <span>•</span>
            <span>Solar Dealer in Washim</span>
            <span>•</span>
            <span>Residential Solar Rooftop</span>
            <span>•</span>
            <span>Commercial Solar Panels Washim</span>
            <span>•</span>
            <span>Industrial Solar Power Plant</span>
            <span>•</span>
            <span>PM Surya Ghar Subsidy Washim</span>
            <span>•</span>
            <span>Solar Pergola Rooftop</span>
            <span>•</span>
            <span>Bifacial Solar Panels</span>
            <span>•</span>
            <span>MSEDCL Net Metering</span>
            <span>•</span>
            <span>Top Rated Solar Installer Washim</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <div>
            © 2025 R. S. Bhandari Solar Energy Solutions (Prop. Sumit Bhandari). All rights reserved.
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <button className="hover:text-gray-900 transition-colors cursor-pointer">Privacy Policy</button>
            <span>|</span>
            <button className="hover:text-gray-900 transition-colors cursor-pointer">Terms &amp; Conditions</button>
            <span>|</span>
            <button className="hover:text-gray-900 transition-colors cursor-pointer">Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
