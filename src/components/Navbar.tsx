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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#180B05] shadow-2xl border-b border-[#EBB036]/30 py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name on Left */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Dada Kathiawadi Chai Home"
          >
            <img
              src="/assets/logo.png"
              alt="Dada Kathiawadi Chai Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif font-black text-base sm:text-lg leading-tight tracking-wide text-white group-hover:text-[#EBB036] transition-colors">
                दादा काठियावाड़ी
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#EBB036] uppercase">
                चाय • ESTD 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Center / Right) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap group ${
                    isActive ? 'text-[#EBB036] font-bold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Golden-yellow active link and hover underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#EBB036] rounded-full transition-all duration-200 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Far Right: Get Franchise Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleEnquire}
              className="flex items-center gap-2 bg-[#EBB036] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
            >
              <span>Get Franchise</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>

            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none rounded-full hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-3 sm:mx-6 mt-2 max-w-lg bg-[#180B05] border border-[#EBB036]/40 rounded-2xl p-5 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
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
                      ? 'bg-[#EBB036]/20 text-[#EBB036] font-bold border-l-2 border-[#EBB036]'
                      : 'text-white/85 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#EBB036]" />
                Franchise Helpline: +91 98765 43210
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
