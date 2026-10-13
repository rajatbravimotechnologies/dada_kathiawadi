import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
      setIsScrolled(window.scrollY > 40);
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
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Floating navbar containing logo, links and CTA */}
        <nav
          className={`w-full flex items-center justify-between rounded-full pl-3 pr-2.5 sm:px-6 py-2 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#173F32]/95 backdrop-blur-md shadow-2xl border border-[#D6A84F]/40'
              : 'bg-[#173F32]/90 backdrop-blur-md shadow-xl border border-[#D6A84F]/20'
          }`}
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Dada Kathiawadi Chai Home"
          >
            <img
              src="/assets/logo.png"
              alt="Dada Kathiawadi Chai Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm sm:text-base leading-tight tracking-wide text-[#FFF5E5] group-hover:text-white transition-colors">
                दादा काठियावाड़ी
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#D6A84F] uppercase">
                चाय
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-white/90">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap hover:text-[#FFF5E5] ${
                    isActive ? 'text-[#D6A84F] font-semibold' : 'text-[#FFF5E5]/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D6A84F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right end: Enquire Now button & mobile hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleEnquire}
              className="flex items-center gap-1.5 bg-[#B96736] hover:bg-[#a6592c] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap border border-[#D6A84F]/40"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none rounded-full hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-lg bg-[#173F32]/98 backdrop-blur-md border border-[#D6A84F]/40 rounded-2xl p-5 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#B96736]/25 text-[#FFF5E5] font-semibold'
                      : 'text-[#FFF5E5]/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#FFF5E5]/80">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#D6A84F]" />
                Franchise Helpline: +91 98765 43210
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
