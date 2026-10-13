import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureStrip } from '../components/FeatureStrip';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { FRANCHISE_PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Preview only first 5 items on Home
  const previewProducts = FRANCHISE_PRODUCTS.slice(0, 5);

  const signatureBeverages = [
    {
      id: 'masala-chai',
      title: 'Kathiawadi Masala Chai',
      tag: 'HERITAGE SIGNATURE',
      description:
        'Slow-simmered Assam CTC infused with fresh hand-pounded ginger, green cardamom, cloves, and our proprietary Kathiawadi royal masala blend. Served scalding hot in traditional earthen kulhads.',
      videoSrc: '/videos/masala-chai.mp4',
      badge: 'Bestseller',
      notes: ['Hand-Crushed Spices', 'Rich Creamy Texture', 'Zero Artificial Essence'],
    },
    {
      id: 'special-coffee',
      title: 'Desi Kadak Coffee',
      tag: 'AROMATIC ROAST',
      description:
        'High-elevation South Indian beans froth-frothed with full-cream milk in heavy brass utensils to create a dense, velvety layer of aromatic foam that re-energizes with every sip.',
      videoSrc: '/videos/coffee.mp4',
      badge: 'Customer Favorite',
      notes: ['Bold Dark Roast', 'Silky Brass-Frothed Foam', 'Pure Full-Cream Milk'],
    },
    {
      id: 'kesar-masala-dudh',
      title: 'Shahi Kesar Masala Dudh',
      tag: 'ROYAL NOURISHMENT',
      description:
        'Pure whole milk boiled gently with Kashmiri saffron strands, crushed pistachios, almonds, and warming spices. A centuries-old Kathiawadi hospitality delight.',
      videoSrc: '/videos/kesar-masala-dudh.mp4',
      badge: 'Royal Special',
      notes: ['Pure Kashmiri Saffron', 'Roasted Almonds & Pistachio', 'Slow-Simmered Kadai Milk'],
    },
  ];

  return (
    <div className="bg-[#FFF5E5] text-[#28140D]">
      {/* 1. Cinematic Hero with continuous background video */}
      <Hero
        onExploreClick={() => navigate('/franchise')}
        onEnquireClick={() => navigate('/contact')}
      />

      {/* 2. Key Highlights Strip */}
      <FeatureStrip />

      {/* 3. Heritage Story Section: Editorial Split-Screen with Ornamental Details */}
      <section className="py-20 md:py-28 bg-[#FFF5E5] relative overflow-hidden border-b border-[#D6A84F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Authentic Photography in antique gold frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D6A84F]/50 bg-[#173F32] group">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <ImageWithFallback
                    src="/assets/story-main.jpg"
                    alt="Traditional Kathiawadi Chai Preparation"
                    fallbackType="story-main"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Traditional Badge on Image */}
                <div className="absolute bottom-4 left-4 bg-[#173F32]/90 backdrop-blur-md border border-[#D6A84F] text-[#FFF5E5] px-4 py-2 rounded-lg text-xs font-serif shadow-lg">
                  <span className="text-[#D6A84F] font-bold">100% Desi Parampara</span> • Kathiawad
                </div>
              </div>
              {/* Subtle decorative gold corner outline */}
              <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D6A84F] pointer-events-none rounded-tl-lg" />
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D6A84F] pointer-events-none rounded-br-lg" />
            </div>

            {/* Right Column: Editorial Typography */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F32]/10 border border-[#D6A84F]/40 text-[#B96736] text-xs font-bold tracking-widest uppercase mb-3">
                <span>OUR STORY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F32] leading-[1.2] mb-4">
                Ek Ghunt…
                <br />
                <span className="text-[#B96736]">Kathiawad Ki Yaad.</span>
              </h2>

              {/* Indian-Inspired Ornamental Divider */}
              <div className="flex items-center gap-3 w-full max-w-xs my-3 text-[#D6A84F]">
                <div className="h-px bg-[#D6A84F]/60 flex-1" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <div className="h-px bg-[#D6A84F]/60 flex-1" />
              </div>

              <p className="text-base text-[#28140D]/85 leading-relaxed mb-4 mt-2">
                Born out of the rustic hospitality of Saurashtra, <strong className="text-[#173F32]">Dada Kathiawadi Chai</strong> preserves the soul of traditional street-side kettle brewing. Every recipe is rooted in generations of tea-making secrets using thick milk, hand-pounded spices, and genuine brass brewing utensils.
              </p>

              <p className="text-sm text-[#28140D]/75 leading-relaxed mb-8">
                Today, we empower aspiring food entrepreneurs across India to set up an authentic, high-margin chai franchise with our tested ₹2,11,000 all-in startup model.
              </p>

              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2.5 bg-[#173F32] hover:bg-[#0e271f] text-[#FFF5E5] font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg border border-[#D6A84F]/50 active:scale-95"
              >
                <span>Read Full Brand Story</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Signature Beverages: 3 Art-Directed Showcases */}
      <section className="py-20 md:py-28 bg-[#FFF5E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B96736] mb-2 inline-block">
              CRAFTED WITH HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F32] mb-3">
              Our Signature Beverages
            </h2>
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-3 my-3 text-[#D6A84F]">
              <div className="h-px bg-[#D6A84F]/60 w-16" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              <div className="h-px bg-[#D6A84F]/60 w-16" />
            </div>
            <p className="text-sm sm:text-base text-[#28140D]/75">
              Every outlet serves these authentic Indian favorites crafted with standardized spice blends and foolproof brewing methods.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {signatureBeverages.map((bev, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={bev.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Side: Looping cinematic product video */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D6A84F]/60 bg-[#28140D] aspect-video">
                      <video
                        src={bev.videoSrc}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#B96736] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                        {bev.badge}
                      </div>
                    </div>
                  </div>

                  {/* Copy Side */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B96736] mb-1 block">
                      {bev.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F32] mb-3">
                      {bev.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#28140D]/80 leading-relaxed mb-6">
                      {bev.description}
                    </p>

                    {/* Tasting Notes */}
                    <div className="space-y-2.5 mb-8">
                      {bev.notes.map((note, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#28140D]">
                          <div className="w-5 h-5 rounded-full bg-[#173F32]/10 flex items-center justify-center text-[#173F32] shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('/included')}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#B96736] hover:text-[#9e5226] transition-colors"
                    >
                      <span>See Equipment Used for This Item</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Franchise Opportunity: Dark Forest Green with Gold Details */}
      <section className="py-20 md:py-24 bg-[#173F32] text-[#FFF5E5] relative border-y border-[#D6A84F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-[#D6A84F] mb-2 block">
                BUSINESS OPPORTUNITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF5E5] mb-4 leading-tight">
                Launch Your Profitable Outlet with Zero Royalty
              </h2>
              <p className="text-sm sm:text-base text-[#FFF5E5]/80 mb-8 max-w-xl leading-relaxed">
                We believe in straightforward, transparent franchise partnerships. For a one-time fee of ₹2,11,000, you receive comprehensive equipment, authentic masala formulas, staff training, and brand signage to start immediately.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 max-w-lg">
                <div className="flex items-center gap-2.5 bg-white/5 border border-[#D6A84F]/30 rounded-xl p-3">
                  <Check className="w-4 h-4 text-[#D6A84F] stroke-[3] shrink-0" />
                  <span className="text-xs font-medium text-[#FFF5E5]">26 Commercial Equipment Items</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-[#D6A84F]/30 rounded-xl p-3">
                  <Check className="w-4 h-4 text-[#D6A84F] stroke-[3] shrink-0" />
                  <span className="text-xs font-medium text-[#FFF5E5]">Zero Monthly Royalties</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-[#D6A84F]/30 rounded-xl p-3">
                  <Check className="w-4 h-4 text-[#D6A84F] stroke-[3] shrink-0" />
                  <span className="text-xs font-medium text-[#FFF5E5]">Standard Recipe Training</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-[#D6A84F]/30 rounded-xl p-3">
                  <Check className="w-4 h-4 text-[#D6A84F] stroke-[3] shrink-0" />
                  <span className="text-xs font-medium text-[#FFF5E5]">Store Signage & Grand Opening</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/franchise')}
                className="flex items-center gap-2.5 bg-[#B96736] hover:bg-[#a6592c] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 border border-[#D6A84F]/40"
              >
                <span>Explore Full Franchise Model</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#FFF5E5] text-[#28140D] rounded-3xl p-7 sm:p-9 shadow-2xl border-2 border-[#D6A84F] w-full max-w-sm text-center">
                <span className="text-[11px] font-bold text-[#B96736] tracking-widest uppercase block mb-1">
                  OFFICIAL FRANCHISE FEE
                </span>
                <div className="font-serif text-4xl sm:text-5xl font-black text-[#173F32] mb-2">
                  ₹2,11,000
                </div>
                <p className="text-xs text-[#28140D]/70 mb-6 leading-relaxed">
                  Includes complete counter setup, commercial burners, traditional brass kettles, and starter inventory.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 rounded-xl bg-[#173F32] hover:bg-[#0e271f] text-[#FFF5E5] font-bold text-sm transition-all border border-[#D6A84F]/50 shadow-md"
                >
                  Enquire For Your City
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. What's Included Preview (Top 5 Items) */}
      <section className="py-20 md:py-24 bg-[#FFF5E5] relative border-b border-[#D6A84F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#B96736] mb-1 block">
                PACKAGE INVENTORY PREVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#173F32]">
                What's Included in ₹2,11,000
              </h2>
            </div>
            <button
              onClick={() => navigate('/included')}
              className="flex items-center gap-2 text-sm font-bold text-[#B96736] hover:text-[#9e5226] transition-colors"
            >
              <span>Explore All 26 Items</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {previewProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('/included')}
                className="bg-white border border-[#D6A84F]/30 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="aspect-square w-full rounded-xl bg-[#FFF5E5] border border-[#D6A84F]/20 flex items-center justify-center p-2 mb-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fallbackType="product"
                    titleFallback={item.name}
                    specsFallback={item.specs}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#173F32] leading-snug line-clamp-1 group-hover:text-[#B96736]">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#28140D]/65 line-clamp-1 mt-0.5">
                  {item.specs}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/included')}
              className="inline-flex items-center gap-2 bg-[#B96736] hover:bg-[#a6592c] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95 border border-[#D6A84F]/40"
            >
              <span>Explore Complete 26-Item List</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. How It Works: Connected Editorial Steps */}
      <section className="py-20 md:py-24 bg-[#FFF5E5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#B96736] mb-2 inline-block">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F32] mb-3">
            How to Open Your Outlet
          </h2>
          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-3 text-[#D6A84F]">
            <div className="h-px bg-[#D6A84F]/60 w-16" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="h-px bg-[#D6A84F]/60 w-16" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 text-left relative">
            <div className="bg-white p-6 rounded-2xl border border-[#D6A84F]/30 shadow-sm relative">
              <span className="font-serif font-black text-2xl text-[#D6A84F] block mb-2">01</span>
              <h4 className="font-serif font-bold text-lg text-[#173F32] mb-1">Enquire</h4>
              <p className="text-xs text-[#28140D]/75 leading-relaxed">
                Submit your franchise application and share your target location or city.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D6A84F]/30 shadow-sm relative">
              <span className="font-serif font-black text-2xl text-[#D6A84F] block mb-2">02</span>
              <h4 className="font-serif font-bold text-lg text-[#173F32] mb-1">Consultation</h4>
              <p className="text-xs text-[#28140D]/75 leading-relaxed">
                Connect with our franchise advisory team to discuss unit economics and layout.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D6A84F]/30 shadow-sm relative">
              <span className="font-serif font-black text-2xl text-[#D6A84F] block mb-2">03</span>
              <h4 className="font-serif font-bold text-lg text-[#173F32] mb-1">Agreement</h4>
              <p className="text-xs text-[#28140D]/75 leading-relaxed">
                Sign transparent agreements and disburse the verified ₹2,11,000 package fee.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D6A84F]/30 shadow-sm relative">
              <span className="font-serif font-black text-2xl text-[#D6A84F] block mb-2">04</span>
              <h4 className="font-serif font-bold text-lg text-[#173F32] mb-1">Launch</h4>
              <p className="text-xs text-[#28140D]/75 leading-relaxed">
                Receive equipment dispatch, complete hands-on recipe training, and open.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/process')}
            className="inline-flex items-center gap-2 bg-[#173F32] hover:bg-[#0e271f] text-[#FFF5E5] font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 border border-[#D6A84F]/40"
          >
            <span>Read Complete Onboarding Process</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </section>

      {/* 8. Final CTA: Har Ghunt Mein Kathiyawad */}
      <section className="py-20 md:py-24 bg-[#173F32] text-center text-[#FFF5E5] relative border-t border-[#D6A84F]/40">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles className="w-10 h-10 text-[#D6A84F] mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF5E5] mb-3">
            Har Ghunt Mein Kathiyawad.
          </h2>
          <p className="text-sm sm:text-base text-[#FFF5E5]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Begin your entrepreneurial venture with India's most authentic regional chai brand. Direct founder assistance, standardized spice supply, and full launch guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-[#B96736] hover:bg-[#a6592c] text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg active:scale-95 border border-[#D6A84F]/40"
            >
              Enquire For Franchise Now
            </button>
            <button
              onClick={() => navigate('/faqs')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-[#FFF5E5] font-semibold text-base px-8 py-3.5 rounded-xl border border-[#D6A84F]/50 hover:border-[#D6A84F] transition-all active:scale-95"
            >
              Frequently Asked Questions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
