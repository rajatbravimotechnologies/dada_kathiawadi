import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HindiLogoWordmark } from './HindiLogoWordmark';

interface NavbarProps {
  onEnquireClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Franchise Model', path: '/franchise' },
    { name: "What's Included", path: '/included' },
    { name: 'How It Works', path: '/process' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-3 sm:pt-5 lg:pt-6 px-3 sm:px-6 lg:px-8 xl:px-10">
      {/* Outer Floating Glass Capsule */}
      <div
        className={`max-w-7xl mx-auto w-full pointer-events-auto rounded-[28px] sm:rounded-[36px] lg:rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF8EB]/92 backdrop-blur-[24px] border border-white/85 shadow-[0_16px_48px_rgba(24,11,5,0.22),0_4px_12px_rgba(24,11,5,0.10)] py-2 sm:py-2.5 lg:py-2.5 px-3.5 sm:px-6 lg:px-7'
            : 'bg-[#FFF8EB]/82 backdrop-blur-[20px] border border-white/70 shadow-[0_12px_40px_rgba(24,11,5,0.16),0_2px_8px_rgba(24,11,5,0.06)] py-2.5 sm:py-3 lg:py-3.5 px-4 sm:px-6 lg:px-7'
        }`}
      >
        <div className="flex items-center justify-between gap-3 lg:gap-4">
          
          {/* Brand Identity — Left Section */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-pointer"
            aria-label="Dada Kathiawadi Chai Home"
          >
            <img
              src="/assets/logo.png"
              alt="Dada Kathiawadi Chai Logo"
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
            />
            <div className="flex flex-col text-left justify-center">
              <HindiLogoWordmark className="h-5.5 sm:h-6.5 lg:h-7.5 w-auto" idPrefix="nav" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#351B11]/85 uppercase mt-0.5">
                चाय <span className="text-[#F4B62D] font-black">•</span> ESTD 2026
              </span>
            </div>
          </Link>

          {/* Center Navigation Pill — Desktop Only (>= 1024px) */}
          <nav className="hidden lg:flex items-center bg-[#351B11] border border-[#5A2D1C]/40 rounded-full p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] shrink-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex flex-col items-center justify-center transition-all duration-200 whitespace-nowrap text-xs xl:text-[13px] ${
                    isActive
                      ? 'bg-[#FFF1D6] text-[#351B11] font-bold px-4 xl:px-5 py-1.5 xl:py-2 rounded-full shadow-sm'
                      : 'text-[#FFF1D6]/85 hover:text-white font-medium px-3 xl:px-4 py-1.5 xl:py-2 rounded-full hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Subtle Gold Indicator Dot under Active Item */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4B62D] shadow-sm -mb-0.5 mt-0.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section — Golden Franchise CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Golden Pill CTA Button */}
            <button
              onClick={handleEnquire}
              className="hidden sm:inline-flex items-center gap-2 bg-[#F4B62D] hover:bg-[#e2a420] text-[#1E0E06] font-bold text-xs sm:text-sm px-5 sm:px-6 xl:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(244,182,45,0.4)] hover:shadow-[0_6px_22px_rgba(244,182,45,0.55)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              <span>Get Franchise</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 text-[#351B11] hover:text-[#1E0E06] bg-[#351B11]/5 hover:bg-[#351B11]/10 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-lg mx-auto mt-2 pointer-events-auto bg-[#FFF8EB]/95 backdrop-blur-[24px] border border-white/80 rounded-[28px] p-5 shadow-[0_20px_50px_rgba(24,11,5,0.25)] transition-all duration-200 animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#351B11] text-[#FFF1D6] shadow-sm'
                      : 'text-[#351B11]/85 hover:bg-[#351B11]/10 hover:text-[#351B11]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F4B62D]" />}
                </Link>
              );
            })}

            {/* Mobile Full-Width Golden CTA */}
            <div className="pt-3 mt-1 border-t border-[#351B11]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleEnquire();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F4B62D] hover:bg-[#e2a420] text-[#1E0E06] font-bold text-sm py-3 rounded-full shadow-[0_4px_16px_rgba(244,182,45,0.35)] transition-all cursor-pointer"
              >
                <span>Get Franchise</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#351B11]/75">
                <PhoneCall className="w-3.5 h-3.5 text-[#F4B62D]" />
                <span>Helpline: +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
