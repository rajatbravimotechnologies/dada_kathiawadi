import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#240F04] text-white pt-16 pb-12 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E8A92F] bg-[#1E0B02] flex items-center justify-center p-1 shrink-0">
                <ImageWithFallback
                  src="/assets/logo.png"
                  alt="Dada Kathiawadi Chai"
                  fallbackType="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-tight text-white block">
                  Dada Kathiawadi Chai
                </span>
                <span className="text-xs text-[#F7931E] font-medium tracking-wide">
                  Ek Ghunt… Kathiawad Ki Yaad.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/70 max-w-sm leading-relaxed mb-4">
              Paramparik Kathiawadi swaad aur mitti ki mehak ke saath banayi gayi asli chai franchise.
              Join India's fastest growing regional tea brand community.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FDE68A] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <span>Franchise Package ₹2,11,000 All Inclusive</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-amber-100/75">
              <li>
                <a href="#home" className="hover:text-[#F7931E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F7931E] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-[#F7931E] transition-colors">
                  Your Investment (₹2,11,000)
                </a>
              </li>
              <li>
                <a href="#included" className="hover:text-[#F7931E] transition-colors">
                  What's Included (26 Items)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F7931E] transition-colors">
                  Franchise Kaise Le?
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#F7931E] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-base text-white mb-4">
              Franchise Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-amber-100/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F7931E] shrink-0 mt-0.5" />
                <span>
                  National Highway 8B, Near Kathiawadi Cultural Plaza, Rajkot - Ahmedabad Highway, Gujarat, India - 360003
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7931E] shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F7931E] shrink-0" />
                <span>franchise@dadakathiawadichai.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-100/60">
          <div>
            © 2026 Dada Kathiawadi Chai. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-amber-200/80 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
