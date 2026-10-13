import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { HeroBackgroundVideo } from './HeroBackgroundVideo';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnquireClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#28140D] text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center"
    >
      {/* Continuous Cinematic Beverage Background Video Sequence */}
      <HeroBackgroundVideo posterImage="/assets/hero-bg.png" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Brand Logo As-Is & Antique Gold Franchise Price Panel */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Original Brand Logo - Untouched */}
            <div className="w-48 sm:w-56 lg:w-60 flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="Dada Kathiawadi Chai Logo"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Refined Franchise Price Panel: Royal Forest Green (#173F32) with Antique Gold (#D6A84F) border */}
            <div className="w-full max-w-[280px] bg-[#173F32]/95 backdrop-blur-md text-[#FFF5E5] rounded-xl sm:rounded-2xl p-5 shadow-2xl border border-[#D6A84F] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D6A84F]">
                  FRANCHISE OPPORTUNITY
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#D6A84F] animate-pulse" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FFF5E5] my-1">
                ₹2,11,000
              </div>
              <p className="text-xs text-[#FFF5E5]/80 font-normal">
                Complete Setup & 26 Essential Equipment
              </p>
            </div>
          </div>

          {/* Right/Center Column: Editorial Headline & Actions */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-0">
            
            {/* Traditional Script Text in Hindi */}
            <div className="self-center lg:self-start mb-3 flex items-center gap-2.5 text-[#FFF5E5]/95 font-['Kalam',cursive] text-2xl sm:text-3xl select-none">
              <span>एक घूँट…</span>
              <span className="text-[#D6A84F] font-bold">काठियावाड़ी की याद</span>
              <svg
                viewBox="0 0 60 28"
                className="w-10 h-5 text-[#D6A84F] inline-block -rotate-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14 Q 28 4 52 16" />
                <path d="M44 10 L 52 16 L 46 22" />
              </svg>
            </div>

            {/* Editorial Headline: Ek Ghunt. Kathiyawadi Ki Yaad. */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#FFF5E5] mb-3 text-balance">
              Ek Ghunt.
              <br />
              <span className="text-[#D6A84F]">Kathiyawadi Ki Yaad.</span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-medium text-[#FFF5E5]/90 mb-4 tracking-normal">
              Apni Chai. Apna Business. Apni Pehchaan.
            </h2>

            {/* Short Franchise Description */}
            <p className="text-sm sm:text-base text-[#FFF5E5]/85 max-w-xl mb-8 leading-relaxed">
              Step into India's beloved tea tradition with authentic Kathiyawadi flavors, high customer loyalty, and comprehensive franchise onboarding with zero hidden royalties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#B96736] hover:bg-[#a6592c] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-[#D6A84F]/40"
              >
                <span>Explore Franchise</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto flex items-center justify-center bg-[#173F32]/80 hover:bg-[#173F32] text-[#FFF5E5] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl border border-[#D6A84F]/60 hover:border-[#D6A84F] transition-all duration-200 backdrop-blur-md"
              >
                Enquire Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
