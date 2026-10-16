import React from 'react';

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    name: 'Chandresh Singh Chouhan',
    role: 'Founder & Managing Director',
    image: '/assets/Chandresh Singh Chouhan Founder & Managing Director.png',
    imagePosition: 'center 32%',
  },
  {
    name: 'Prince Gehlot',
    role: 'Co-Founder & Director',
    image: '/assets/Prince Gehlot Co-Founder or Director.png',
    imagePosition: 'center 14%',
  },
];

interface LeadershipSectionProps {
  id?: string;
  className?: string;
  showBackground?: boolean;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  id = 'leadership',
  className = '',
  showBackground = true,
}) => {
  return (
    <section
      id={id}
      className={`relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden scroll-mt-28 ${
        showBackground ? 'bg-[#F5E8D0]' : 'bg-transparent'
      } ${className}`}
    >
      {/* ========================================================================= */}
      {/* SEPIA HERITAGE PARAMPARA BACKGROUND BANNER (When showBackground is true)   */}
      {/* ========================================================================= */}
      {showBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Edge-to-edge scenic sepia vintage artwork matching reference mockup */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/assets/Sepia Heritage Parampara Banner.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Subtle warm wash so text remains crystal clear across all devices */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(248, 237, 218, 0.40) 0%, rgba(245, 232, 208, 0.15) 70%, rgba(235, 216, 185, 0.35) 100%)',
            }}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle matching reference design */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-2.5">
            <span className="text-[#174635]">The People </span>
            <span className="text-[#8C3A1E]">Behind the Parampara</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg font-medium text-[#4A2D1B]/90 tracking-wide">
            Built on trust. Brewed with heritage.
          </p>
        </div>

        {/* Two Owners Cards Grid (Side-by-side on both mobile and desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-9 lg:gap-12 max-w-3xl mx-auto justify-items-center">
          {LEADERSHIP_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="w-full max-w-[340px] sm:max-w-[360px] rounded-[16px] sm:rounded-[26px] overflow-hidden border-2 border-[#E5AA36]/75 bg-[#FFF9EE] shadow-[0_8px_24px_rgba(40,20,10,0.14)] hover:shadow-[0_18px_44px_rgba(40,20,10,0.24)] transition-all duration-300 hover:-translate-y-1.5 group"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3.9] sm:aspect-[4/3.8] overflow-hidden bg-[#EADBCE]">
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
                    boxShadow: 'inset 0 0 24px rgba(40, 20, 10, 0.18)',
                  }}
                />
              </div>

              {/* Nameplate Label matching reference design */}
              <div className="py-2.5 sm:py-4 px-2 sm:px-4 text-center border-t border-[#E5AA36]/40 bg-[#FFF8EC]">
                <h3 className="font-serif font-black text-xs sm:text-lg md:text-xl text-[#351B11] tracking-tight leading-snug">
                  {member.name}
                </h3>
                <p className="font-sans text-[10px] sm:text-xs md:text-[13px] font-semibold text-[#7A4C32] mt-0.5 sm:mt-1 tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
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
