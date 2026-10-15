import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RoyalCtaBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="cta-banner"
      className="relative py-14 sm:py-18 lg:py-20 xl:py-24 overflow-hidden bg-[#0E3326] border-t border-[#EBB036]/30"
    >
      {/* Background container: Pure background only (no boxes, no cards around background) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Desktop & Laptop (lg+): Full background image 100% visible edge-to-edge */}
        <div
          className="hidden lg:block w-full h-full"
          style={{
            backgroundImage: "url('/assets/Royal Indian Chai Still Life.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Mobile & Tablet (< lg): Dual-layer responsive framing so leaves, palace, and kulhad remain fully visible */}
        <div className="block lg:hidden w-full h-full bg-[#0E3326] relative">
          {/* Top-Left Artwork: Tea leaves & palace */}
          <div
            className="absolute top-0 left-0 w-full h-[220px] sm:h-[280px] pointer-events-none"
            style={{
              backgroundImage: "url('/assets/Royal Indian Chai Still Life.png')",
              backgroundPosition: 'left top',
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'no-repeat',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />

          {/* Bottom-Right Artwork: Steaming kulhad & spices on wooden table */}
          <div
            className="absolute bottom-0 right-0 w-full h-[220px] sm:h-[280px] pointer-events-none"
            style={{
              backgroundImage: "url('/assets/Royal Indian Chai Still Life.png')",
              backgroundPosition: 'right bottom',
              backgroundSize: 'auto 100%',
              backgroundRepeat: 'no-repeat',
              maskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <span className="font-sans text-base sm:text-lg lg:text-xl font-light text-[#E8F3ED] tracking-wide block mb-1">
              Ready to Bring
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-2.5">
              Kathiyawadi Chai to Your City?
            </h2>
            <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-white/85 leading-relaxed max-w-lg">
              Join hundreds of successful partners and be part of a growing chai movement.
            </p>
          </div>

          {/* Center Column: Mustard Gold Enquire Button */}
          <div className="flex items-center justify-center shrink-0">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2.5 bg-[#F2B233] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_4px_20px_rgba(242,178,51,0.35)] hover:shadow-[0_6px_25px_rgba(242,178,51,0.5)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Column: Handwritten Cursive Signature (Positioned next to the steaming kulhad) */}
          <div
            className="flex flex-col items-center lg:items-end text-center lg:text-right text-[#F8E8C9] leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] select-none rotate-[-2deg] shrink-0 lg:mr-16 xl:mr-24"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-wide">Ek Ghunt...</span>
            <span className="text-xl sm:text-2xl font-bold tracking-wide">Ek Nayi Shuraat</span>
            <span className="text-xl sm:text-2xl font-bold tracking-wide">Aapke Saath</span>
          </div>

        </div>
      </div>
    </section>
  );
};
