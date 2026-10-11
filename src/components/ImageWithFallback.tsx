import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'logo' | 'hero-cup' | 'chai-cup' | 'product' | 'story-main' | 'story-pour' | 'story-brass' | 'stall' | 'general';
  titleFallback?: string;
  specsFallback?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  className = '',
  fallbackType = 'general',
  titleFallback,
  specsFallback,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  // If the image had an error, check if it's general or hero background
  if (hasError) {
    if (fallbackType === 'general') {
      return null;
    }
  }

  // If the image loaded fine or hasn't errored yet, render normal image
  if (!hasError && src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
        loading="lazy"
        {...props}
      />
    );
  }

  // Visual Fallback renderings matching the exact aesthetic of the brand
  switch (fallbackType) {
    case 'logo':
      return (
        <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#F7931E] via-[#D97706] to-[#78350F] p-2 text-white shadow-xl border-2 border-[#FDE68A] ${className}`}>
          <div className="w-full h-full rounded-full border border-amber-200/40 flex flex-col items-center justify-center text-center p-2 bg-[#2B1408]/60 backdrop-blur-xs">
            {/* Indian turban elder icon svg */}
            <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#F7931E] drop-shadow-md" fill="currentColor">
              <path d="M32 6c-8 0-14 4-14 9 0 2 1 4 3 6-5 2-8 6-8 11 0 7 6 12 15 13 1 3 4 5 7 5s6-2 7-5c9-1 15-6 15-13 0-5-3-9-8-11 2-2 3-4 3-6 0-5-6-9-15-9zm0 6c6 0 10 2 10 5s-4 4-10 4-10-1-10-4 4-5 10-5zm-9 14c2-1 5-2 9-2s7 1 9 2c4 2 5 5 5 8 0 4-5 8-14 8s-14-4-14-8c0-3 1-6 5-8zm9 18c-3 0-5-1-6-3h12c-1 2-3 3-6 3z" />
              <circle cx="27" cy="27" r="2.5" fill="#FFF8EC" />
              <circle cx="37" cy="27" r="2.5" fill="#FFF8EC" />
              <path d="M26 33c3 3 9 3 12 0" stroke="#FFF8EC" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
            <span className="text-[10px] font-bold tracking-tight text-[#FEF3C7] uppercase font-serif mt-0.5">
              दादा काठियावाड़ी
            </span>
            <span className="text-[8px] bg-[#F7931E] text-[#2B1408] font-bold px-1.5 py-0.2 rounded-full mt-0.5">
              चाय
            </span>
          </div>
        </div>
      );

    case 'hero-cup':
    case 'chai-cup':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Kulhad earthen clay cup vector */}
          <div className="relative w-44 h-56 flex flex-col items-center">
            {/* Top rim hot tea with creamy froth */}
            <div className="w-36 h-8 rounded-[50%] bg-[#B45309] border-2 border-[#D97706] shadow-inner relative z-10 flex items-center justify-center">
              <div className="w-28 h-5 rounded-[50%] bg-[#92400E] opacity-90"></div>
            </div>
            {/* Earthen ribbed terracotta body */}
            <div className="w-32 -mt-4 h-44 bg-gradient-to-b from-[#A14814] via-[#853408] to-[#5C2304] rounded-b-3xl shadow-2xl relative flex flex-col items-center justify-center p-3 border-x border-[#BD581A]/40">
              {/* Logo seal on cup */}
              <div className="w-16 h-16 rounded-full border border-amber-300/60 bg-[#250E04]/80 flex flex-col items-center justify-center text-center p-1 shadow-lg">
                <span className="text-[7px] text-[#F7931E] font-bold tracking-wider">दादा</span>
                <span className="text-[6px] text-amber-200">काठियावाड़ी</span>
                <span className="text-[5px] bg-[#F7931E] text-black px-1 rounded-xs font-bold">चाय</span>
              </div>
              {/* Traditional terracotta rib grooves */}
              <div className="absolute inset-x-2 top-8 border-t border-black/20"></div>
              <div className="absolute inset-x-3 bottom-12 border-t border-black/20"></div>
            </div>
            {/* Base saucer shadow */}
            <div className="w-28 h-4 rounded-[50%] bg-black/40 blur-xs -mt-1"></div>
          </div>
        </div>
      );

    case 'story-main':
      return (
        <div className={`relative bg-gradient-to-br from-[#78350F] via-[#451A03] to-[#1C0A00] flex items-center justify-center p-6 text-center text-white overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,147,30,0.35),transparent_70%)]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#F7931E] bg-[#2B1408] flex items-center justify-center shadow-lg mb-4 text-[#F7931E]">
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0 0 8h10a4 4 0 0 0 0-8V7a5 5 0 0 0-5-5z" />
                <path d="M6 16v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3" />
                <path d="M9 10h.01M15 10h.01M10 14c1 1 3 1 4 0" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#FDE68A]">Dada Kathiawadi Tradition</h4>
            <p className="text-xs text-amber-100/80 mt-1 max-w-xs">
              Paramparik Kathiawadi swaad aur mitti ki mehak ke saath banayi gayi asli chai.
            </p>
          </div>
        </div>
      );

    case 'story-pour':
      return (
        <div className={`relative bg-gradient-to-tr from-[#9A3412] to-[#B45309] flex items-center justify-center p-4 text-center text-white overflow-hidden ${className}`}>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-1">🫖</span>
            <span className="text-xs font-semibold text-amber-100">Kadak Cutting Chai</span>
            <span className="text-[10px] text-amber-200/70">Freshly Brewed</span>
          </div>
        </div>
      );

    case 'story-brass':
      return (
        <div className={`relative bg-gradient-to-tr from-[#78350F] to-[#D97706] flex items-center justify-center p-4 text-center text-white overflow-hidden ${className}`}>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-1">✨</span>
            <span className="text-xs font-semibold text-amber-100">Shuddh Peetal Bartan</span>
            <span className="text-[10px] text-amber-200/70">Pure Heritage</span>
          </div>
        </div>
      );

    case 'stall':
      return (
        <div className={`relative bg-gradient-to-b from-[#2E1408] to-[#160803] flex items-center justify-center p-6 text-center text-white overflow-hidden border border-[#522510] ${className}`}>
          <div className="relative z-10 flex flex-col items-center max-w-xs">
            <div className="w-16 h-16 rounded-xl bg-[#F7931E]/20 border border-[#F7931E] flex items-center justify-center mb-3 text-[#F7931E]">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#FDE68A]">Dada Kathiawadi Chai Stall</h4>
            <p className="text-xs text-amber-200/80 mt-1">
              Standard rustic wooden setup, illuminated branding menu & high-top counter stools.
            </p>
          </div>
        </div>
      );

    case 'product':
    default:
      return (
        <div className={`relative bg-gradient-to-b from-[#FAF4EA] to-[#F5ECE0] flex flex-col items-center justify-center p-4 text-center border border-[#EADBCC]/60 ${className}`}>
          <div className="w-16 h-16 rounded-xl bg-white shadow-xs border border-[#F1E6D3] flex items-center justify-center text-[#F7931E] mb-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          {titleFallback && (
            <span className="text-xs font-semibold text-[#2B1408] line-clamp-1">{titleFallback}</span>
          )}
          {specsFallback && (
            <span className="text-[10px] text-[#6B5A4B] line-clamp-1 mt-0.5">{specsFallback}</span>
          )}
        </div>
      );
  }
};
