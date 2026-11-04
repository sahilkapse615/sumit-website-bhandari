import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'Subsidy', href: '#subsidy' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (name: string, href: string) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="/assets/solar/logo.png"
              alt="r. s. bhandari Solar Energy Solutions"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name, link.href)}
                  className="relative text-[13px] font-semibold text-gray-700 hover:text-gray-900 transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F5A623] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-3 xl:space-x-4 shrink-0">
            {/* Phone */}
            <a
              href="tel:+919822180024"
              className="flex items-center space-x-2 text-left group hover:opacity-95"
            >
              <div className="w-7 h-7 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#E5A106]">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-bold text-gray-900 tracking-tight group-hover:text-[#D98200] transition-colors">
                  +91 98221 80024
                </div>
                <div className="text-[10px] text-gray-500 font-medium">
                  Mon - Sat 9AM - 7PM
                </div>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919822180024?text=Hi%20R.%20S.%20Bhandari%20Solar%2C%20I%20am%20interested%20in%20solar%20rooftop%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-[#0D6246] hover:bg-[#094e37] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.486-8.404" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Get Free Quote CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-900 px-4 py-2 rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F8B814] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name, link.href)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeNav === link.name
                    ? 'bg-[#FFF7E3] text-[#D98200] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href="tel:+919822180024"
              className="flex items-center space-x-3 text-gray-900 font-semibold text-sm px-2 py-1"
            >
              <div className="w-8 h-8 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#E5A106]">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div>+91 98221 80024</div>
                <div className="text-[11px] text-gray-500 font-normal">
                  Mon - Sat 9AM - 7PM
                </div>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/919822180024?text=Hi%20R.%20S.%20Bhandari%20Solar%2C%20I%20am%20interested%20in%20solar%20rooftop%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#0D6246] text-white py-2.5 rounded-lg text-xs font-semibold"
              >
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex items-center justify-center space-x-1.5 bg-[#F8B814] text-gray-900 py-2.5 rounded-lg text-xs font-bold"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
