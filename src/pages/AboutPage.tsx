import React from 'react';
import { ArrowRight, Leaf, Heart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LeadershipSection } from '../components/LeadershipSection';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-[#292720] bg-[#FAF3E3]">
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION: ABOUT US & OUR HERITAGE                             */}
      {/* Background: Sepia Riverfront Heritage Panorama                            */}
      {/* Same implementation as Home Page Hero for Mobile & Desktop                */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 lg:pb-24">
        {/* Background Image Container — Matching Home Page Hero */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop Background (Screens >= 640px / sm) */}
          {/* Full-width, full-height edge-to-edge background matching desktop screenshot */}
          <div
            className="hidden sm:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/Sepia Riverfront Heritage Panorama.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile Background (Screens < 640px) — Exact same approach as Home Page Hero */}
          {/* Full width so the complete scene (palaces on left & right, river, foliage) is 100% visible */}
          <div className="block sm:hidden w-full relative bg-[#FAF3E3]">
            <img
              src="/assets/Sepia Riverfront Heritage Panorama.png"
              alt="Dada Kathiawadi Heritage Lake Palace Panorama"
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
            {/* Natural atmospheric gradient fading the bottom of the scenic artwork into #FAF3E3 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(250, 243, 227, 0.05) 0%, transparent 35%, rgba(250, 243, 227, 0.55) 70%, #FAF3E3 100%)',
              }}
            />
          </div>
        </div>

        {/* Section Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Tag with Golden Flanking Rules */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#B85E32] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase font-sans mb-3">
            <span className="w-8 sm:w-12 h-px bg-[#B85E32]/60" />
            <span>About Us & Our Heritage</span>
            <span className="w-8 sm:w-12 h-px bg-[#B85E32]/60" />
          </div>

          {/* Main Dual-Tone Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] mb-3 tracking-tight">
            <span className="text-[#174635] block sm:inline">Ek Ghunt... </span>
            <span className="text-[#9E3B1B] block sm:inline">Kathiawadi Ki Yaad.</span>
          </h1>

          {/* Ornamental Golden Center Divider */}
          <div className="flex items-center justify-center gap-2.5 my-3.5 text-[#E5AA36]">
            <div className="h-px bg-[#E5AA36]/70 w-16 sm:w-24" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="h-px bg-[#E5AA36]/70 w-16 sm:w-24" />
          </div>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#392319] max-w-2xl mx-auto leading-relaxed font-normal">
            Dada Kathiawadi Chai brings the authentic, earthy taste of traditional Kathiawad chai to everyday life, crafted with time-honored recipes, pure spices, and rustic warmth.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: OUR ROOTS & TRADITION                                       */}
      {/* Dedicated standalone section ready for its own background image           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            {/* Left Column: Traditional Chai Preparation Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[22px] overflow-hidden shadow-2xl border-2 border-[#E5AA36]/70 bg-[#1E0E06] aspect-[16/11] sm:aspect-[4/3] group">
                <img
                  src="/assets/hero-bg.png"
                  alt="Traditional Kathiawadi Chai Preparation with Steaming Kulhad & Spices"
                  className="w-full h-full object-cover object-[80%_center] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 24px rgba(40, 20, 10, 0.25)',
                  }}
                />
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start lg:pl-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B85E32] mb-2 block font-sans">
                OUR ROOTS & TRADITION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#174635] mb-3.5 leading-tight">
                Pure Spices, Traditional Boil & Authentic Kathiawadi Swaad
              </h2>
              <p className="text-sm sm:text-base text-[#392319] leading-[1.7] mb-6">
                In Kathiawad, tea is not just a drink; it is an emotion of hospitality, brotherhood, and bonding. Every cup is brewed with carefully measured indigenous tea spices, creamy full-fat milk, and simmered slowly in heavy brass-finish vessels to deliver a rich, unforgettable flavour.
              </p>

              <button
                onClick={() => navigate('/franchise')}
                className="inline-flex items-center gap-2 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Explore Franchise Model</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: THE PEOPLE BEHIND THE PARAMPARA                             */}
      {/* Dedicated standalone section ready for its own background image           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <LeadershipSection
            showBackground={false}
            className="pt-0 pb-0"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 4: WHAT SETS DADA KATHIAWADI APART                             */}
      {/* Dedicated standalone section ready for its own background image           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#174635] mb-2">
              What Sets Dada Kathiawadi Apart
            </h3>
            {/* Small Ornamental Golden Center Divider */}
            <div className="flex items-center justify-center gap-2.5 my-2.5 text-[#E5AA36]">
              <div className="h-px bg-[#E5AA36]/60 w-14 sm:w-20" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#E5AA36]" />
              <div className="h-px bg-[#E5AA36]/60 w-14 sm:w-20" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
            {/* Card 1: 100% Shuddh Taste */}
            <div className="bg-[#FFFDF8] border border-[#E5AA36]/40 rounded-2xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(40,20,10,0.06)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-[#174635] text-white flex items-center justify-center mb-4 shadow-sm">
                <Leaf className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#174635] mb-2">100% Shuddh Taste</h4>
              <p className="text-xs sm:text-[13px] text-[#392319]/85 leading-relaxed font-normal">
                Handpicked tea leaves and natural spice blends with cardamom, dry ginger, cloves, and cinnamon for an unforgettable flavour in every sip.
              </p>
            </div>

            {/* Card 2: High Profit Margins */}
            <div className="bg-[#FFFDF8] border border-[#E5AA36]/40 rounded-2xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(40,20,10,0.06)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-[#174635] text-white flex items-center justify-center mb-4 shadow-sm">
                <TrendingUp className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#174635] mb-2">High Profit Margins</h4>
              <p className="text-xs sm:text-[13px] text-[#392319]/85 leading-relaxed font-normal">
                Designed with standardized operational efficiency and low recurring ingredient costs to maximize daily revenue for every franchise partner.
              </p>
            </div>

            {/* Card 3: Recognized Identity */}
            <div className="bg-[#FFFDF8] border border-[#E5AA36]/40 rounded-2xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(40,20,10,0.06)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-[#174635] text-white flex items-center justify-center mb-4 shadow-sm">
                <Heart className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#174635] mb-2">Recognized Identity</h4>
              <p className="text-xs sm:text-[13px] text-[#392319]/85 leading-relaxed font-normal">
                The authentic desi chai brand that gives your outlet instant regional connection, emotional resonance, and trust among customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 5: ROYAL CTA BANNER — "START YOUR BUSINESS WITH US TODAY"      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-20 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0E3326] rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white shadow-2xl border border-[#E5AA36]/40">
            {/* Subtle scenic palace silhouette background watermark */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
              {/* Kulhad Chai Illustration / Miniature on Left */}
              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#E5AA36]/60 shadow-lg bg-[#180B05] shrink-0">
                  <img
                    src="/assets/hero-bg.png"
                    alt="Dada Kathiawadi Kulhad Chai"
                    className="w-full h-full object-cover object-[75%_center]"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FFF4E2] leading-tight mb-1.5">
                    Start Your Business With Us Today
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF4E2]/85 max-w-lg leading-relaxed">
                    Get complete support from equipment to initial spice batches. Setup your profitable outlet with a trusted regional brand.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/contact')}
                className="shrink-0 inline-flex items-center gap-2 bg-[#C86835] hover:bg-[#b85b2a] text-white font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Apply For Franchise</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
