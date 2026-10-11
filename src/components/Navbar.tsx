import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'franchise', 'included', 'process', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Franchise Model', href: '#franchise', id: 'franchise' },
    { name: "What's Included", href: '#included', id: 'included' },
    { name: 'How It Works', href: '#process', id: 'process' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Overlapping circular Logo badge on the top-left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative z-20 group shrink-0 transition-transform duration-300 hover:scale-105"
          aria-label="Dada Kathiawadi Chai Home"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full overflow-hidden shadow-2xl border-2 border-[#E8A92F] bg-[#2B1408] flex items-center justify-center -mb-4 md:-mb-6">
            <ImageWithFallback
              src="/assets/logo.png"
              alt="Dada Kathiawadi Chai Logo"
              fallbackType="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Floating dark brown navbar (centered) */}
        <nav
          className={`flex-1 max-w-4xl mx-auto ml-3 md:ml-6 flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#3A1A0A]/95 backdrop-blur-md shadow-2xl border border-white/10'
              : 'bg-[#3A1A0A]/85 backdrop-blur-sm shadow-xl border border-white/10'
          }`}
        >
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-white/85">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap hover:text-white ${
                    isActive ? 'text-white font-semibold' : 'text-amber-100/75'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7931E] rounded-full animate-in fade-in duration-200" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Quick Helpline pill for tablet/mobile */}
          <div className="lg:hidden flex items-center text-xs text-amber-100/90 font-medium pl-2">
            <span className="font-serif font-bold text-sm tracking-wide text-white">Dada Kathiawadi</span>
          </div>

          {/* Right end: Orange Enquire Now button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onEnquireClick}
              className="flex items-center gap-1.5 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] hover:text-[#180a03] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7931E] rounded-full"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-lg bg-[#3A1A0A]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F7931E]/20 text-[#F7931E] font-semibold'
                      : 'text-amber-100/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-amber-200/70">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#F7931E]" />
                Franchise Helpline: +91 98765 43210
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
