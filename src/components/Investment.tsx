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
    <section id="franchise" className="py-20 md:py-28 bg-[#FFF3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Chai stall interior image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#B87343]/30 bg-[#173F35] group">
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
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2">
              YOUR INVESTMENT
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F35] leading-tight mb-8">
              Your Franchise Journey
              <br />
              Starts Here.
            </h2>

            {/* Gold Gradient Price Card & Checklist Row */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8">
              
              {/* Gold Gradient Card with Overlapping Cup */}
              <div className="sm:col-span-7 relative">
                <div className="bg-[#173F35] rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-[#B87343] relative overflow-hidden flex flex-col justify-center min-h-[130px]">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#FFF3D9] tracking-tight">
                    ₹2,11,000
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#E6A76E] mt-1">
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
                    <div className="w-5 h-5 rounded-full bg-[#173F35] text-[#FFF3D9] flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#292720]/90">
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
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View What's Included</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-[#173F35]/5 text-[#173F35] font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#173F35] transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] sm:text-xs text-[#292720]/70 leading-relaxed max-w-xl">
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
