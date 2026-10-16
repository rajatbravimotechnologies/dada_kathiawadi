import React from 'react';
import {
  ArrowRight,
  Check,
  ShieldCheck,
  TrendingUp,
  Users,
  FileText,
  PhoneCall,
  Store,
  Rocket,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FranchisePage: React.FC = () => {
  const navigate = useNavigate();

  const inclusions = [
    'Complete Commercial Tea Counter & Stall Setup',
    'Heavy-Duty Double Gas Burner Stove & Fittings',
    'Specialized Brass Tea Boiling Vessels & Strainers',
    'Illuminated Dada Kathiawadi Front Signage Board',
    'Uniforms, Aprons & Branded Merchandising',
    'Comprehensive 26 Essential Equipment Checklist',
    'On-site Tea Recipe & Spices Training',
    'Digital Menu & Social Media Launch Assets',
  ];

  const financialBenefits = [
    {
      icon: Store,
      title: 'LOW INITIAL CAPITAL',
      amount: '₹2,11,000',
      description:
        'One of the most competitive full-setup packages in the organized Indian beverage space with zero hidden royalties.',
    },
    {
      icon: TrendingUp,
      title: 'GROSS MARGIN',
      amount: '65% – 70%',
      description:
        'High profitability per cup on tea, bun maska, snacks and beverage variations.',
    },
    {
      icon: Clock,
      title: 'BREAK-EVEN TIMELINE',
      amount: '3 – 5 Months',
      description:
        'Rapid return on investment due to consistent footfall and steady recurring neighborhood patronage.',
    },
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Apply Online',
      description: 'Fill out the franchise enquiry form.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Discussion & Approval',
      description: 'Our team will connect, share details & finalize the location.',
      icon: PhoneCall,
    },
    {
      step: '03',
      title: 'Setup & Training',
      description: 'Receive complete setup, training and branding support.',
      icon: Store,
    },
    {
      step: '04',
      title: 'Start Your Business',
      description: 'Launch your Dada Kathiawadi Chai outlet and begin operations.',
      icon: Rocket,
    },
  ];

  return (
    <div className="relative min-h-screen text-[#292720] bg-[#FAF3E3]">
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION: FRANCHISE MODEL & INVESTMENT                         */}
      {/* Background: Vintage Sepia Ghat on Parchment.png                           */}
      {/* Desktop (100% 100%) & Mobile (Home Page pattern with atmospheric gradient) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        {/* Background Image Container — Exactly matching Home Page Heritage Framing */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork matching reference */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/Vintage Sepia Ghat on Parchment.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive Heritage Artwork Framing */}
          {/* Guarantees 100% of illustrated elements (botanical leaves, lake palace, ghats, boats) are visible */}
          <div className="block lg:hidden w-full h-full bg-[#FAF3E3] relative">
            {/* Top-Left: Heritage Botanical Leaves & Sketches */}
            <div
              className="absolute top-0 left-0 w-full h-[320px] sm:h-[420px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Vintage Sepia Ghat on Parchment.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Lake Palace, Ghats, Boats & Foliage */}
            <div
              className="absolute bottom-0 right-0 w-full h-[360px] sm:h-[460px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Vintage Sepia Ghat on Parchment.png')",
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-3 block font-sans">
              FRANCHISE BUSINESS OPPORTUNITY
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#173F35] leading-[1.12] mb-4 tracking-tight">
              Franchise Model &<br className="hidden sm:block" /> Investment
            </h1>

            {/* Golden Decorative Accent Line */}
            <div className="w-16 h-1 bg-[#E5AA36] rounded-full mb-5" />

            <p className="text-sm sm:text-base md:text-lg text-[#292720]/85 leading-relaxed max-w-xl mb-8">
              Own a profitable business with Dada Kathiawadi Chai. Complete setup, training, branding, and standard operating procedures included.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/included')}
                className="inline-flex items-center gap-2 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>View All 26 Items</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center bg-[#FFF9EE] hover:bg-[#FFF3E0] text-[#1E0E06] font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full border-2 border-[#D8A26A] transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Enquire Immediately
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ALL-INCLUSIVE SETUP PACKAGE CARD (₹2,11,000)                           */}
      {/* Deep Emerald Green Card matching reference design                         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-[#FEE6B4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0F382A] rounded-[28px] p-8 sm:p-12 text-[#FFF3D9] border-2 border-[#E5AA36]/60 shadow-2xl relative overflow-hidden">
            {/* Subtle palace background watermark */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Side: Pricing spotlight */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#E5AA36] mb-2 block font-sans">
                  ALL-INCLUSIVE SETUP PACKAGE
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#FFF8EC] mb-3 tracking-tight">
                  ₹2,11,000
                </h2>
                <p className="text-sm sm:text-base text-[#FFF3D9]/85 mb-8 max-w-md leading-relaxed">
                  One-time package covering all essential 26 equipments, branding boards, raw material starter batches, and onboarding support.
                </p>

                <button
                  onClick={() => navigate('/included')}
                  className="inline-flex items-center gap-2 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Explore Inclusions</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Right Side: 8 Checklist Inclusions */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {inclusions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-[#134432]/70 p-3.5 rounded-xl border border-[#E5AA36]/30 hover:border-[#E5AA36]/60 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#E5AA36]/20 text-[#E5AA36] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-[#FFF8EC] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY INVEST IN DADA KATHIAWADI CHAI?                                     */}
      {/* Background: Vintage Sepia Botanical Spice Border.png                      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background Image Container — Exactly matching Home Page Heritage Framing */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/Vintage Sepia Botanical Spice Border.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive Heritage Artwork Framing */}
          <div className="block lg:hidden w-full h-full bg-[#FAF3E3] relative">
            {/* Top-Left: Botanical Tea Branches & Foliage */}
            <div
              className="absolute top-0 left-0 w-full h-[320px] sm:h-[420px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Vintage Sepia Botanical Spice Border.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Lake Palace, Cinnamon Sticks, Ginger & Spices */}
            <div
              className="absolute bottom-0 right-0 w-full h-[360px] sm:h-[460px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Vintage Sepia Botanical Spice Border.png')",
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-2 block font-sans">
              WHY INVEST IN
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F35] tracking-tight mb-3">
              Dada Kathiawadi Chai?
            </h3>
            {/* Golden Ornamental Divider */}
            <div className="w-16 h-1 bg-[#E5AA36] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {financialBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF8] border border-[#E5AA36]/40 rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(40,20,10,0.06)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B85E32] text-white flex items-center justify-center mb-5 shadow-sm">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-bold text-[#B85E32] uppercase tracking-[0.18em] block mb-1 font-sans">
                    {benefit.title}
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl font-black text-[#173F35] mb-3">
                    {benefit.amount}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#292720]/80 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LOCATION & SPACE REQUIREMENTS                                          */}
      {/* Background: Sepia Vintage Indian Tea Stall Background.png                 */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background Image Container — Matching Home Page Heritage Framing */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/Sepia Vintage Indian Tea Stall Background.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive Heritage Artwork Framing */}
          <div className="block lg:hidden w-full h-full bg-[#FAF3E3] relative">
            {/* Top-Left: Vintage Tea Stall & Foliage Sketch */}
            <div
              className="absolute top-0 left-0 w-full h-[340px] sm:h-[440px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Sepia Vintage Indian Tea Stall Background.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Botanical Tea Leaves */}
            <div
              className="absolute bottom-0 right-0 w-full h-[340px] sm:h-[440px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Sepia Vintage Indian Tea Stall Background.png')",
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Left Column: Stall Photo Frame matching reference design */}
            <div className="lg:col-span-5 relative">
              
            </div>

            {/* Right Column: Specification Details */}
            <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-2 block font-sans">
                LOCATION & SPACE REQUIREMENTS
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#173F35] mb-6 leading-tight">
                Suitable for High Footfall Markets & Transit Hubs
              </h3>

              <div className="space-y-4 mb-8 w-full">
                <div className="flex items-start gap-3.5 bg-[#FFFDF8] border border-[#E5AA36]/30 p-4 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#173F35] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#173F35]">Compact Area Requirement</h5>
                    <p className="text-xs sm:text-sm text-[#292720]/80 mt-0.5 leading-relaxed">
                      Minimum 80 – 150 sq. ft. carpet area required
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-[#FFFDF8] border border-[#E5AA36]/30 p-4 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#173F35] text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#173F35]">Prime High-Footfall Zones</h5>
                    <p className="text-xs sm:text-sm text-[#292720]/80 mt-0.5 leading-relaxed">
                      Ideal locations: Commercial complexes, college hubs, railway/bus transit, highway spots
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-[#FFFDF8] border border-[#E5AA36]/30 p-4 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#173F35] text-white flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#173F35]">Low Staffing Overhead</h5>
                    <p className="text-xs sm:text-sm text-[#292720]/80 mt-0.5 leading-relaxed">
                      Staffing: 1-2 operators can easily manage peak morning and evening volumes
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-[#B85E32] hover:bg-[#a35128] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Start Franchise Application</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GET STARTED: HOW IT WORKS?                                             */}
      {/* 4 Process Steps matching reference design                                 */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[#FEE6B4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-2 block font-sans">
              GET STARTED
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#173F35] tracking-tight mb-3">
              How It Works?
            </h3>
            {/* Golden Ornamental Divider */}
            <div className="w-16 h-1 bg-[#E5AA36] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF8] border border-[#E5AA36]/40 rounded-2xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(40,20,10,0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Badge */}
                  <div className="w-8 h-8 rounded-full bg-[#B85E32] text-white text-xs font-bold flex items-center justify-center mb-4 shadow-sm">
                    {step.step}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-[#173F35] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#173F35] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#292720]/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ROYAL CTA BANNER: READY TO START YOUR OWN OUTLET                       */}
      {/* Background: Royal Indian Chai Still Life.png inside card, #FEE6B4 outside */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[#FEE6B4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0E3326] rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white shadow-2xl border-2 border-[#E5AA36]/60">
            {/* Background container: Royal Indian Chai Still Life */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
              {/* Desktop & Tablet Background */}
              <div
                className="hidden sm:block w-full h-full opacity-85"
                style={{
                  backgroundImage: "url('/assets/Royal Indian Chai Still Life.png')",
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* Mobile Background */}
              <div className="block sm:hidden w-full h-full relative bg-[#0E3326]">
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundImage: "url('/assets/Royal Indian Chai Still Life.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
              {/* Kulhad Chai Illustration / Miniature on Left */}
              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E5AA36] mb-1 block font-sans">
                    BE A PART OF OUR GROWING FAMILY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FFF4E2] leading-tight mb-1.5">
                    Ready to Start Your Own<br className="hidden sm:block" /> Dada Kathiawadi Chai Outlet?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF4E2]/85 max-w-lg leading-relaxed">
                    Get complete support from equipment to initial spice batches. Setup your profitable outlet with a trusted regional brand.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/contact')}
                className="shrink-0 inline-flex items-center gap-2 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
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
