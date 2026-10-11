import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface InvestmentProps {
  onViewIncludedClick: () => void;
  onEnquireClick: () => void;
}

export const Investment: React.FC<InvestmentProps> = ({
  onViewIncludedClick,
  onEnquireClick,
}) => {
  const checklist = [
    'Essential equipment included',
    'Outlet branding items',
    'Business opportunity',
    'Enquiry and onboarding support',
  ];

  return (
    <section id="franchise" className="py-20 md:py-28 bg-[#FFF8EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Chai stall interior image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#F1E6D3] bg-[#2E1408] group">
              <ImageWithFallback
                src="/assets/stall.jpg"
                alt="Dada Kathiawadi Chai Stall Outlet Setup"
                fallbackType="stall"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Investment Details & Gold Card */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F7931E] mb-2">
              YOUR INVESTMENT
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B1408] leading-tight mb-8">
              Your Franchise Journey
              <br />
              Starts Here.
            </h2>

            {/* Gold Gradient Price Card & Checklist Row */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8">
              
              {/* Gold Gradient Card with Overlapping Cup */}
              <div className="sm:col-span-7 relative">
                <div className="bg-gold-gradient rounded-2xl p-5 sm:p-6 shadow-xl border border-gold relative overflow-hidden flex flex-col justify-center min-h-[130px]">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1E0E05] tracking-tight">
                    ₹2,11,000
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#4A260C] mt-1">
                    Franchise Package
                  </p>

                  {/* Overlapping Chai Cup & Tea Leaves Image on the right edge */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none drop-shadow-xl">
                    <ImageWithFallback
                      src="/assets/chai-cup.png"
                      alt="Chai cup with aromatic tea leaves"
                      fallbackType="chai-cup"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Checklist on the right of the card */}
              <div className="sm:col-span-5 flex flex-col gap-2.5 pl-0 sm:pl-2">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#E6F4EA] text-[#1E8E3E] flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#2B1408]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6">
              <button
                onClick={onViewIncludedClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View What's Included</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-[#3A1A0A]/5 text-[#2B1408] font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#2B1408]/40 hover:border-[#2B1408] transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] sm:text-xs text-[#6B5A4B] leading-relaxed max-w-xl">
              Package inclusions, final pricing, taxes, transportation, installation and other
              commercial terms are subject to confirmation by the Dada Kathiawadi Chai franchise
              team.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
