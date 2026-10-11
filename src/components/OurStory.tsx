import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface OurStoryProps {
  onKnowMoreClick: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onKnowMoreClick }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F7931E] mb-2">
              OUR STORY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B1408] leading-tight mb-3">
              Ek Ghunt…
              <br />
              Kathiawad Ki Yaad.
            </h2>

            {/* Short Orange Underline Bar */}
            <div className="w-12 h-1 bg-[#F7931E] rounded-full mb-6"></div>

            <p className="text-sm sm:text-base text-[#6B5A4B] leading-relaxed mb-8">
              Dada Kathiawadi Chai hamare paramparik swaad, Gunvatta aur Asli Chai ke liye jaana
              jaata hai. Har ghunt mein Kathiawayad ki mitti ki khushbu aur apnapan mehsoos hota hai.
            </p>

            <button
              onClick={onKnowMoreClick}
              className="flex items-center gap-2 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] font-bold text-sm sm:text-base px-6 py-3 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Know More About Us</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Column: Image Collage */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Large Image: Dada drinking chai */}
              <div className="col-span-7 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#F1E6D3] bg-[#2E1408]">
                  <ImageWithFallback
                    src="/assets/story-main.jpg"
                    alt="Dada drinking Kathiawadi Chai"
                    fallbackType="story-main"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating White Rounded Card overlapping bottom of the large image */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 bg-white/95 backdrop-blur-xs border border-[#F1E6D3] shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 fill-emerald-500/20 stroke-emerald-600" />
                  </div>
                  <div className="leading-tight pr-2">
                    <span className="block font-serif font-bold text-xs sm:text-sm text-[#2B1408]">
                      Asli Swaad
                    </span>
                    <span className="block text-[11px] sm:text-xs font-medium text-[#6B5A4B]">
                      Asli Pehchaan
                    </span>
                  </div>
                </div>
              </div>

              {/* Two Stacked Smaller Images */}
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                {/* Chai pouring into glass cups */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#F1E6D3] bg-[#3B1A0A]">
                  <ImageWithFallback
                    src="/assets/story-pour.jpg"
                    alt="Kadak Kathiawadi Chai Pouring"
                    fallbackType="story-pour"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Brass cups on stove */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#F1E6D3] bg-[#2E1408]">
                  <ImageWithFallback
                    src="/assets/story-brass.jpg"
                    alt="Traditional Brass Cups on Chai Chulha"
                    fallbackType="story-brass"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
