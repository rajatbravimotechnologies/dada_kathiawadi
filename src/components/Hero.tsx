import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnquireClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90svh] md:min-h-[94svh] lg:min-h-[96svh] bg-[#180B05] text-white pt-28 md:pt-36 lg:pt-32 pb-16 md:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Image & Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/hero-bg.png"
          alt="Dada Kathiawadi Chai Stall & Steaming Kulhad at Sunset"
          className="w-full h-full object-cover object-[78%_center] sm:object-[74%_center] md:object-[70%_center] lg:object-[66%_center] xl:object-[64%_center] transition-all duration-700"
          loading="eager"
        />

        {/* Subtle, soft natural gradient so the original sunset and lake remain bright and vivid */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.15) 40%, transparent 65%)',
          }}
        />

        {/* Mobile: Gentle subtle gradient ensuring text readability while keeping image bright */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.20) 45%, transparent 70%, rgba(0, 0, 0, 0.50) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Left Content Column matching reference image */}
        <div className="w-full md:max-w-xl lg:max-w-[50%] xl:max-w-[46%] flex flex-col justify-center text-left">
          
          {/* Yellow Brush Badge: "Asli Swad, Desi Andaaz" */}
          <div className="animate-hero-1 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-sm bg-[#EBB036] text-[#241208] text-xs sm:text-sm font-black tracking-wide shadow-md transform -rotate-1 mb-3.5 sm:mb-4 select-none w-fit">
            <span>Asli Swad, Desi Andaaz</span>
          </div>

          {/* Main Headline: "Har Cup Mein Kathiyawad" */}
          <h1 className="animate-hero-2 font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[1.02] tracking-tight drop-shadow-lg mb-4 sm:mb-5">
            <span className="block text-white">Har Cup Mein</span>
            <span className="block text-[#EBB036] relative mt-1">
              Kathiyawad
              {/* Decorative brush underline */}
              <svg
                viewBox="0 0 280 16"
                className="w-44 sm:w-60 h-3 sm:h-4 text-[#EBB036] mt-1"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 10 C 60 2, 170 1, 276 8 C 210 14, 90 15, 4 10 Z" />
              </svg>
            </span>
          </h1>

          {/* Subtext description from reference design */}
          <p className="animate-hero-3 font-sans text-sm sm:text-base md:text-lg text-white/95 max-w-xl mb-7 sm:mb-8 leading-relaxed drop-shadow-md">
            Authentic Kathiyawadi Chai, brewed with tradition, served with love. Join the fastest growing chai franchise and be a part of a flavourful success story.
          </p>

          {/* Two Action Buttons matching reference image */}
          <div className="animate-hero-4 flex flex-wrap items-center gap-3.5 sm:gap-4 mb-5">
            <button
              onClick={onExploreClick}
              className="bg-[#EBB036] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Get Franchise</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('signature-drinks');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onExploreClick();
                }
              }}
              className="bg-black/50 hover:bg-black/70 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/60 hover:border-white flex items-center justify-center gap-2.5 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="text-lg">☕</span>
              <span>Explore Our Drinks</span>
            </button>
          </div>

          {/* Transparent Package Badge for Franchise Opportunity */}
          <div className="animate-hero-5 flex items-center gap-2.5 bg-black/50 border border-[#EBB036]/50 rounded-full px-4 py-2 w-fit shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#EBB036] animate-pulse" />
            <span className="text-xs sm:text-[13px] text-white/90">
              Franchise Package: <strong className="text-[#EBB036] font-bold">₹2,11,000</strong> (All 26 Commercial Equipment Included)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
