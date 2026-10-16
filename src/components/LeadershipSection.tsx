import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface LeadershipMember {
  name: string;
  role: string;
  tag: string;
  quote: string;
  bio: string;
  focus: string[];
  image: string;
  imagePosition?: string;
}

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    name: 'Chandresh Singh Chouhan',
    role: 'Founder & Managing Director',
    tag: 'Founder & Visionary',
    quote: 'Preserving the heritage of Kathiawad while empowering tomorrow’s entrepreneurs.',
    bio: 'The visionary leader behind Dada Kathiawadi Chai, Chandresh Singh is dedicated to reviving authentic desi brewing traditions. He steers the brand’s strategic roadmap, signature spice blends, and nationwide expansion—enabling aspiring business owners to build thriving, high-margin beverage outlets backed by standardized operations and genuine regional swaad.',
    focus: ['Brand Strategy', 'Signature Recipes', 'Franchise Growth'],
    image: '/assets/Chandresh Singh Chouhan Founder & Managing Director.png',
    imagePosition: 'center 32%',
  },
  {
    name: 'Prince Gehlot',
    role: 'Co-Founder & Director',
    tag: 'Co-Founder & Operations',
    quote: 'Making entrepreneurship seamless, accessible, and truly profitable for every partner.',
    bio: 'The operational anchor driving partner enablement and flawless on-ground execution, Prince ensures every franchise begins operations with confidence. He oversees supply chain logistics, 26-equipment setup packages, and hands-on operational training—committed to providing 360-degree support so every franchise partner achieves rapid breakeven and sustained success.',
    focus: ['Operations & Supply', 'Partner Enablement', 'Setup & SOP Training'],
    image: '/assets/Prince Gehlot Co-Founder or Director.png',
    imagePosition: 'center 14%',
  },
];

interface LeadershipSectionProps {
  id?: string;
  className?: string;
  showBackground?: boolean;
  backgroundImage?: string;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  id = 'leadership',
  className = '',
  showBackground = true,
  backgroundImage = '/assets/FAQ Background - copy.png',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      id={id}
      className={`relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden scroll-mt-28 ${
        showBackground ? 'bg-[#FAF3E3]' : 'bg-transparent'
      } ${className}`}
    >
      {/* ========================================================================= */}
      {/* VINTAGE DADA JI & PALACE BACKGROUND (When showBackground is true)         */}
      {/* Desktop (cover) & Mobile (Dual-Layer Responsive Heritage Framing)          */}
      {/* ========================================================================= */}
      {showBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive Heritage Artwork Framing */}
          {/* Top-Left: Dada Ji with Chai & Heritage Palace */}
          <div className="block lg:hidden w-full h-full bg-[#FAF3E3] relative">
            <div
              className="absolute top-0 left-0 w-full h-[320px] sm:h-[420px] pointer-events-none opacity-90"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Parchment texture & watercolor wash */}
            <div
              className="absolute bottom-0 right-0 w-full h-[360px] sm:h-[460px] pointer-events-none opacity-90"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
              }}
            />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-2 block font-sans">
            VISIONARY LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-2.5">
            <span className="text-[#174635]">The People </span>
            <span className="text-[#8C3A1E]">Behind the Parampara</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg font-medium text-[#4A2D1B]/90 tracking-wide max-w-2xl mx-auto">
            Rooted in authentic tradition, driven by modern entrepreneurship. Meet the minds guiding Dada Kathiawadi Chai.
          </p>
        </div>

        {/* Two Owners Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto items-stretch">
          {LEADERSHIP_MEMBERS.map((member, idx) => {
            return (
              <div
                key={idx}
                onClick={toggleExpand}
                className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden border-2 border-[#E5AA36]/75 bg-[#FFF9EE] shadow-[0_10px_30px_rgba(40,20,10,0.12)] hover:shadow-[0_20px_50px_rgba(40,20,10,0.22)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col cursor-pointer h-full"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3.5] sm:aspect-[4/3.4] overflow-hidden bg-[#EADBCE]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.imagePosition || 'center center' }}
                    loading="lazy"
                  />
                  {/* Subtle warm vignette on photo edges */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 28px rgba(40, 20, 10, 0.22)',
                    }}
                  />

                  {/* Corner Golden Tag Badge */}
                  <div className="absolute top-3 left-3 bg-[#174635]/90 backdrop-blur-sm text-[#F7E7CE] px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider border border-[#E5AA36]/50 shadow-md">
                    {member.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#FFF8EC]">
                  <div>
                    {/* Name & Role */}
                    <h3 className="font-serif font-black text-lg sm:text-xl md:text-2xl text-[#2B140B] tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm font-bold text-[#8C3A1E] mt-0.5 tracking-wide uppercase">
                      {member.role}
                    </p>

                    {/* Interactive Toggle Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand();
                      }}
                      className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-bold bg-[#FAF3E3] hover:bg-[#F2E0C4] text-[#8C3A1E] border border-[#E5AA36]/60 transition-all shadow-xs cursor-pointer active:scale-95"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Read Story & Vision'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Bio Content — Visible ONLY when clicked */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#E5AA36]/35 animate-in fade-in duration-300">
                      {/* Golden Divider */}
                      <div className="flex items-center gap-2 mb-3 text-[#E5AA36]">
                        <div className="h-px bg-[#E5AA36]/60 w-10" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#E5AA36]" />
                        <div className="h-px bg-[#E5AA36]/60 flex-1" />
                      </div>

                      {/* Motto Quote */}
                      <p className="font-serif italic text-xs sm:text-[13px] text-[#7A4C32] font-semibold mb-2.5 leading-relaxed">
                        "{member.quote}"
                      </p>

                      {/* Detailed Bio */}
                      <p className="font-sans text-xs sm:text-[13px] text-[#3D271D] leading-[1.65] font-normal mb-3.5">
                        {member.bio}
                      </p>

                      {/* Focus Area Badges */}
                      <div className="pt-2.5 border-t border-[#E5AA36]/25 flex flex-wrap gap-1.5">
                        {member.focus.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="bg-[#FAF3E3] border border-[#E5AA36]/40 text-[#542F19] text-[10.5px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Italicized Brand Quote matching reference design */}
        <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto px-4">
          <p className="font-serif italic text-base sm:text-lg md:text-[19px] text-[#392319] leading-relaxed font-semibold">
            “Bringing the taste of Kathiawad to every cup, and the spirit of entrepreneurship to every city.”
          </p>

          {/* Golden Ornamental Divider */}
          <div className="flex items-center justify-center gap-2.5 mt-3.5 text-[#C88A2E]">
            <div className="h-px bg-[#C88A2E]/60 w-16 sm:w-24" />
            <span className="text-[10px] sm:text-xs">✦</span>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C88A2E]" />
            <span className="text-[10px] sm:text-xs">✦</span>
            <div className="h-px bg-[#C88A2E]/60 w-16 sm:w-24" />
          </div>
        </div>

      </div>
    </section>
  );
};
