import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { faqData } from '../data/solarData';

interface FaqAndContactProps {
  onSuccessSubmit: (data: { name: string; phone: string; service: string; city: string; message: string }) => void;
}

export const FaqAndContact: React.FC<FaqAndContactProps> = ({ onSuccessSubmit }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Residential Solar');
  const [city, setCity] = useState('Maharashtra');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    onSuccessSubmit({ name, phone, service, city, message });
  };

  return (
    <section id="faqs" className="py-10 sm:py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
          
          {/* Column 1: FAQ (approx 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-start space-x-2.5 mb-1">
                <span className="w-1.5 h-6 bg-[#F5A623] inline-block rounded-full shrink-0 mt-0.5" />
                <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-tight">
                  Frequently Asked Questions <br />
                  <span className="font-extrabold text-gray-800">We've Got Answers.</span>
                </h2>
              </div>
            </div>

            {/* 5 Accordion Rows */}
            <div className="space-y-2.5">
              {faqData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-3.5 py-3 text-left flex items-center justify-between text-xs font-semibold text-gray-900 hover:text-[#D98200] transition-colors cursor-pointer"
                    >
                      <span className="pr-2">{faq.question}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-90 text-[#F5A623]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3 pt-1 text-[11px] text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Consultation Form (approx 4.5 cols) */}
          <div id="contact" className="lg:col-span-4.5">
            <div className="flex items-start space-x-2.5 mb-3">
              <span className="w-1.5 h-6 bg-[#F5A623] inline-block rounded-full shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Get a Free Consultation
                </h2>
                <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight leading-tight">
                  Let's Build a Cleaner, Brighter Future.
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-xs font-bold text-gray-900">
                    Thank you, {name}!
                  </div>
                  <p className="text-[11px] text-gray-600">
                    Your consultation request is received. We will contact you at {phone} within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=" "
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
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
                        placeholder=" "
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">
                        Select Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                      >
                        <option value="Residential Solar">Residential Solar</option>
                        <option value="Commercial Solar">Commercial Solar</option>
                        <option value="Industrial Solar">Industrial Solar</option>
                        <option value="Rooftop Pergolas">Rooftop Pergolas</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">
                        Your City
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white"
                      >
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Washim">Washim</option>
                        <option value="Pusad">Pusad</option>
                        <option value="Hingoli">Hingoli</option>
                        <option value="Akola">Akola</option>
                        <option value="Amravati">Amravati</option>
                        <option value="Yavatmal">Yavatmal</option>
                        <option value="Nagpur">Nagpur</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your requirement..."
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-[#F8B814] focus:bg-white placeholder-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-1.5 bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold py-2.5 rounded-xl text-xs shadow-xs transition-all active:scale-[0.98] cursor-pointer mt-1"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 3: Contact Us Details (approx 3.5 cols) */}
          <div className="lg:col-span-3.5">
            <div className="flex items-start space-x-2.5 mb-3">
              <span className="w-1.5 h-6 bg-[#F5A623] inline-block rounded-full shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Contact Us
                </h2>
                <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight leading-tight">
                  We're Here to Help.
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6 space-y-4">
              <div className="space-y-3.5">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#E5A106] shrink-0">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-gray-900">+91 98221 80024</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Mon - Sat 9AM - 7PM</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#E5A106] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-gray-900">info@rsbhandari.in</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">We reply within 24 hours</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#E5A106] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-gray-900">Washim, Maharashtra</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">Prop. Sumit Bhandari · 444501</div>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp Button */}
              <a
                href="https://wa.me/919822180024?text=Hi%20R.%20S.%20Bhandari%20Solar%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#00A859] hover:bg-[#008f4c] text-white py-2.5 rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.486-8.404" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center space-x-3 text-xs text-gray-500 pt-1">
                <span className="font-semibold text-gray-700 text-[11px]">Follow Us</span>
                <div className="flex items-center space-x-2 text-gray-800">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
