import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';
import { HindiLogoWordmark } from './HindiLogoWordmark';

export const Footer: React.FC = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Franchise Model', path: '/franchise' },
    { name: "What's Included", path: '/included' },
    { name: 'How It Works', path: '/process' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#150A04] text-[#FFF5E5] pt-10 sm:pt-12 pb-8 border-t border-[#D6A84F]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar matching reference screenshot */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D6A84F]/20">
          
          {/* Logo with Hindi Branding */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
            aria-label="Dada Kathiawadi Chai Home"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D6A84F]/60 bg-[#251208] flex items-center justify-center p-0.5 shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <ImageWithFallback
                src="/assets/logo.png"
                alt="Dada Kathiawadi Chai"
                fallbackType="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <HindiLogoWordmark className="h-6 sm:h-7 w-auto" idPrefix="footer" />
              <span className="font-serif font-bold text-xs sm:text-sm text-[#EBB036] tracking-[0.2em] block leading-tight mt-0.5">
                — चाय —
              </span>
            </div>
          </Link>

          {/* Horizontal Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#EBB036] font-bold'
                      : 'text-[#FFF5E5]/80 hover:text-[#EBB036]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EBB036] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Follow Us & Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[#EBB036] text-xs font-semibold tracking-wider uppercase mr-1 hidden sm:inline-block">
              Follow Us
            </span>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] hover:opacity-90 flex items-center justify-center text-white transition-all hover:scale-110 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 flex items-center justify-center text-white transition-all hover:scale-110 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#FF0000] hover:opacity-90 flex items-center justify-center text-white transition-all hover:scale-110 shadow-sm"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0A66C2] hover:opacity-90 flex items-center justify-center text-white transition-all hover:scale-110 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Circular Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#2A160C] hover:bg-[#3D2012] border border-[#D6A84F]/60 hover:border-[#D6A84F] text-[#D6A84F] hover:text-[#FFF5E5] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer ml-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Middle Grid: Full Franchise Office & Brand Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-10">
          
          {/* Brand Identity & Package Badge */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs text-[#EBB036] font-semibold tracking-wider uppercase mb-1">
              Ek Ghunt… Kathiawad Ki Yaad.
            </span>
            <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-white mb-2.5 tracking-tight">
              Dada Kathiawadi Chai
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF5E5]/75 max-w-md leading-relaxed mb-4">
              Paramparik Kathiawadi swaad aur mitti ki mehak ke saath banayi gayi asli chai franchise. Join India's fastest growing regional tea brand community.
            </p>
            <div className="inline-flex flex-wrap items-center gap-2 text-xs text-[#FFF5E5] bg-white/5 border border-[#EBB036]/40 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="text-[#EBB036] font-bold">Franchise Package ₹2,11,000</span>
              <span className="text-[#FFF5E5]/50">•</span>
              <span className="text-[#FFF5E5]/80">All 26 Essential Equipment Included</span>
            </div>
          </div>

          {/* Direct Contact & Helpline */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EBB036]" />
              <span>Direct Helpline</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#FFF5E5]/80">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EBB036] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#EBB036] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EBB036] shrink-0" />
                <a href="tel:+919123456789" className="hover:text-[#EBB036] transition-colors">
                  +91 91234 56789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EBB036] shrink-0" />
                <a href="mailto:franchise@dadakathiawadichai.com" className="hover:text-[#EBB036] transition-colors break-all">
                  franchise@dadakathiawadichai.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-[#FFF5E5]/60 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#EBB036] shrink-0" />
                <span>Mon – Sun: 8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Full Franchise Office Address */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-base text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EBB036]" />
              <span>Franchise Office</span>
            </h4>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#FFF5E5]/80 leading-relaxed bg-[#251208]/60 p-4 rounded-xl border border-[#D6A84F]/20">
              <MapPin className="w-5 h-5 text-[#EBB036] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white mb-1">
                  Central Corporate & Experience Hub
                </p>
                <p className="text-[#FFF5E5]/75">
                  National Highway 8B, Near Kathiawadi Cultural Plaza, Rajkot - Ahmedabad Highway, Gujarat, India - 360003
                </p>
                <span className="inline-block mt-2 text-[11px] font-bold text-[#EBB036] bg-[#EBB036]/10 px-2.5 py-0.5 rounded-full border border-[#EBB036]/30">
                  Gujarat Central Supply Depot
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-6 border-t border-[#D6A84F]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FFF5E5]/60">
          <div>
            © 2026 Dada Kathiawadi Chai. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[#FFF5E5]/50 text-[11px]">
            Paramparik Swad • Pure Desi Ingredients • Standardized ₹2,11,000 Franchise
          </div>
        </div>

      </div>
    </footer>
  );
};
