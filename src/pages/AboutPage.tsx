import React from 'react';
import { ArrowRight, Leaf, Heart, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            ABOUT US & OUR HERITAGE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            Ek Ghunt… Kathiawadi Ki Yaad.
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            Dada Kathiawadi Chai brings the authentic, earthy taste of traditional Kathiawad chai to everyday life, crafted with time-honored recipes, pure spices, and rustic warmth.
          </p>
        </div>

        {/* Section 1: Detailed Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B87343]/30 bg-[#173F35]">
              <ImageWithFallback
                src="/assets/story-main.jpg"
                alt="Dada drinking Kathiawadi Chai"
                fallbackType="story-main"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B87343] mb-2">
              OUR ROOTS & TRADITION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#173F35] mb-4">
              Pure Spices, Traditional Boil & Authentic Kathiawadi Swad
            </h2>
            <p className="text-sm sm:text-base text-[#292720]/80 leading-relaxed mb-4">
              In Kathiawad, tea is not just a drink; it is an emotion of hospitality, brotherhood, and bonding. Every cup is brewed with carefully measured indigenous tea spices, creamy full-fat milk, and simmered slowly in heavy brass-finish vessels.
            </p>
            <p className="text-sm sm:text-base text-[#292720]/80 leading-relaxed mb-6">
              With Dada Kathiawadi Chai, our vision is to empower young entrepreneurs across India with a standardized, profitable, and respected tea-business model backed by complete branding and setup support.
            </p>

            <button
              onClick={() => navigate('/franchise')}
              className="w-fit flex items-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Explore Franchise Model</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Section 2: Core Values Grid */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#173F35] mb-10">
            What Sets Dada Kathiawadi Apart
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#173F35] mb-2">100% Shuddh Taste</h4>
              <p className="text-xs sm:text-sm text-[#292720]/75 leading-relaxed">
                Handcrafted spice blends with cardamom, dry ginger, cloves, and cinnamon that deliver an unforgettable flavour in every sip.
              </p>
            </div>

            <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mb-4">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#173F35] mb-2">High Profit Margins</h4>
              <p className="text-xs sm:text-sm text-[#292720]/75 leading-relaxed">
                Designed with standard operational efficiency and low recurring ingredient costs to maximize daily revenue for every franchise partner.
              </p>
            </div>

            <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#173F35] mb-2">Recognized Identity</h4>
              <p className="text-xs sm:text-sm text-[#292720]/75 leading-relaxed">
                The authentic elder crest branding gives your tea stall instant regional connection, emotional resonance, and trust among customers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-12 text-center text-[#FFF3D9] border border-[#B87343]/30">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            Start Your Business With Us Today
          </h3>
          <p className="text-sm sm:text-base text-[#FFF3D9]/80 max-w-xl mx-auto mb-6">
            Get complete support from equipment to initial spice batches. Setup your profitable outlet with a trusted regional brand.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg active:scale-95"
          >
            <span>Apply For Franchise</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
