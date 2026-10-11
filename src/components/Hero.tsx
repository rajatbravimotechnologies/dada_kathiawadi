import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnquireClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen bg-[#241006] text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Image with Dark Rustic Chai Scene and Warm Vignette */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/assets/hero-bg.jpg"
          alt="Dada Kathiawadi Chai Background"
          fallbackType="general"
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
        />
        {/* Warm rustic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C0B03]/95 via-[#2E1408]/85 to-[#1C0B03]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Big Circular Logo Badge & Gold Franchise Package Card */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Large Circular Logo Badge with Golden Rim */}
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-b from-[#F6D77A] via-[#E8A92F] to-[#8C4A00] shadow-2xl transition-transform duration-300 hover:scale-102">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#240F04] border-2 border-[#FFE8A3]/70 flex items-center justify-center p-2">
                  <ImageWithFallback
                    src="/assets/logo.png"
                    alt="Dada Kathiawadi Chai Crest"
                    fallbackType="logo"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 rounded-full bg-amber-500/20 blur-md -z-10 group-hover:bg-amber-500/30 transition-all duration-300"></div>
            </div>

            {/* Gold Gradient Price Card */}
            <div className="w-full max-w-[260px] bg-gold-gradient text-[#2B1408] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl border border-gold transition-all duration-200 hover:-translate-y-1">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#542B0D]">
                FRANCHISE PACKAGE
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E0E05] my-1">
                ₹2,11,000
              </h3>
              <p className="text-xs font-medium text-[#4A260C]">
                All Essential Equipment Included
              </p>
            </div>
          </div>

          {/* Center Column: Handwritten script note, 3-line Headline, Subtext, and CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-0">
            
            {/* Handwritten Script Text with curved hand-drawn arrow */}
            <div className="self-center lg:self-end lg:-mr-12 mb-2 lg:mb-3 flex items-center gap-2 transform -rotate-3 text-amber-100/90 font-script text-2xl sm:text-3xl tracking-wide select-none">
              <span>Ek Ghunt…</span>
              <span className="text-[#FDE68A]">Kathiawad Ki Yaad</span>
              {/* Curved SVG Hand-Drawn Arrow */}
              <svg
                viewBox="0 0 60 28"
                className="w-12 h-6 text-[#FDE68A] inline-block -rotate-6"
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

            {/* 3-Line Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight text-white mb-5 text-balance">
              Apni Chai.
              <br />
              Apna <span className="text-[#F7931E]">Business.</span>
              <br />
              Apni Pehchaan.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-amber-100/85 max-w-lg mb-8 leading-relaxed">
              Dada Kathiawadi Chai ke saath shuru karein apna chai business. Authentic taste,
              strong brand identity aur franchise support ke saath.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Franchise</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-white/70 hover:border-white transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column: Kulhad Cup with Rising Steam Animation and Warm Glow */}
          <div className="lg:col-span-4 flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 flex items-center justify-center">
              
              {/* Rising Steam CSS Curves */}
              <div className="absolute -top-10 sm:-top-16 inset-x-0 flex justify-center pointer-events-none z-20">
                {/* Steam Plume 1 */}
                <div className="w-6 h-28 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-md animate-steam-1 -mr-6"></div>
                {/* Steam Plume 2 */}
                <div className="w-8 h-32 bg-gradient-to-t from-white/50 via-white/25 to-transparent rounded-full blur-md animate-steam-2 mx-1"></div>
                {/* Steam Plume 3 */}
                <div className="w-7 h-28 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-md animate-steam-3 -ml-4"></div>
              </div>

              {/* Kulhad Image with subtle glow */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-cup-glow">
                <ImageWithFallback
                  src="/assets/hero-cup.png"
                  alt="Dada Kathiawadi Kulhad Chai with Rising Steam"
                  fallbackType="hero-cup"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Background ambient circular glow */}
              <div className="absolute w-72 h-72 rounded-full bg-amber-500/15 blur-2xl -z-10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
