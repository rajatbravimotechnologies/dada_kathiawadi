import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeatureStrip } from '../components/FeatureStrip';
import { ArrowRight, Check, Sparkles, Coffee, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { FRANCHISE_PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeBeverage, setActiveBeverage] = useState(0);

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

      {/* 3. Heritage Story Section: Vintage Editorial Parchment Design */}
      <section
        id="about"
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#F8E8C9]"
      >
        {/* ========================================================================= */}
        {/* HERITAGE PARCHMENT BACKGROUND — FULLY VISIBLE ACROSS ALL DEVICES           */}
        {/* PURE BACKGROUND ONLY (NO BOXES, NO CARDS AROUND BACKGROUND)               */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork matching reference */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive Heritage Artwork Framing */}
          {/* Guarantees 100% of illustrated elements (lake palace, trees, windmill, spices, kulhad) are visible */}
          <div className="block lg:hidden w-full h-full bg-[#F8E8C9] relative">
            {/* Top-Left: Heritage Lake Palace, Ghats & Trees */}
            <div
              className="absolute top-0 left-0 w-full h-[320px] sm:h-[420px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Windmill, Palatial Dome & Steaming Kulhad Chai with Ginger & Cinnamon */}
            <div
              className="absolute bottom-0 right-0 w-full h-[360px] sm:h-[460px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN — Traditional Chai Photograph Card (approx 46% width) */}
            <div className="lg:col-span-5 relative max-w-lg mx-auto lg:max-w-none w-full">
              {/* Decorative golden corner accents */}
              <div className="absolute -top-2.5 -left-2.5 w-7 h-7 border-t-2 border-l-2 border-[#E5AA36] rounded-tl-lg pointer-events-none z-20" />
              <div className="absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-2 border-r-2 border-[#E5AA36] rounded-br-lg pointer-events-none z-20" />

              {/* Photographic Card */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-[#E5AA36]/60 bg-[#1E0E06] aspect-[16/10] sm:aspect-[4/3] group">
                <img
                  src="/assets/hero-bg.png"
                  alt="Authentic Kathiyawadi Chai Preparation with Kulhad, Brass Kettle, and Spices"
                  className="w-full h-full object-cover object-[80%_center] sm:object-[82%_center] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark caption near the bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#1E0E06]/85 text-[#FFF4E2] px-4 py-2.5 rounded-xl border border-[#E5AA36]/40 text-xs sm:text-sm font-serif flex items-center justify-between shadow-lg">
                  <span className="font-bold tracking-wide">Dada Kathiawadi Tradition</span>
                  <span className="text-[#E5AA36] text-[11px] font-sans font-bold uppercase tracking-wider">
                    Asli Kulhad Chai
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Brand Story (approx 54% width) */}
            <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B85E32] mb-2 block font-sans">
                OUR STORY
              </span>

              {/* Main Heading: Deep Forest Green (#174635) + Terracotta (#B85E32) */}
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl leading-[1.12] mb-2 tracking-tight">
                <span className="text-[#174635] block">Ek Ghunt...</span>
                <span className="text-[#B85E32] block">Kathiawad Ki Yaad.</span>
              </h2>

              {/* Golden decorative divider: two thin lines and small central star */}
              <div className="flex items-center gap-3 w-full max-w-xs my-3.5 text-[#E5AA36]">
                <div className="h-px bg-[#E5AA36]/70 flex-1" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <div className="h-px bg-[#E5AA36]/70 flex-1" />
              </div>

              {/* Paragraphs in dark text (#392319 / #4B210F) with comfortable line-height ~1.7 */}
              <p className="font-sans text-sm sm:text-base text-[#392319] leading-[1.7] mb-3.5 max-w-xl">
                Born out of the rustic hospitality of Saurashtra, <strong className="text-[#174635] font-bold">Dada Kathiawadi Chai</strong> preserves the soul of traditional street-side kettle brewing. Every recipe is rooted in generations of tea-making secrets using thick milk, hand-pounded spices, and genuine brass brewing utensils.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#392319]/90 leading-[1.7] mb-7 max-w-xl">
                Today, we empower aspiring food entrepreneurs across India to set up an authentic chai franchise with our tested ₹2,11,000 all-in startup model.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2.5 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm px-7 sm:px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Read Full Brand Story</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Signature Beverages: Vintage Illustrated Parchment Showcase */}
      <section
        id="signature-drinks"
        className="relative pt-16 sm:pt-20 pb-24 sm:pb-32 lg:pb-36 overflow-hidden bg-[#F8E8C9]"
      >
        {/* ========================================================================= */}
        {/* HERITAGE PARCHMENT BACKGROUND — FULLY VISIBLE ACROSS ALL DEVICES           */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full edge-to-edge panoramic heritage artwork */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Multi-Corner Heritage Artwork Framing */}
          <div className="block lg:hidden w-full h-full bg-[#F8E8C9] relative">
            {/* Top-Left: Heritage Lake Palace & Trees */}
            <div
              className="absolute top-0 left-0 w-full h-[320px] sm:h-[400px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Windmill, Palatial Dome & Steaming Kulhad Chai with Ginger & Cinnamon */}
            <div
              className="absolute bottom-0 right-0 w-full h-[360px] sm:h-[460px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/heritage-chai-parchment-bg.png')",
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
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-2 block font-sans">
              CRAFTED WITH HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#174635] mb-3">
              Our Signature Beverages
            </h2>
            {/* Ornamental Gold Divider */}
            <div className="flex items-center justify-center gap-3 my-3 text-[#E5AA36]">
              <div className="h-px bg-[#E5AA36]/70 w-16 sm:w-24" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              <div className="h-px bg-[#E5AA36]/70 w-16 sm:w-24" />
            </div>
            <p className="text-sm sm:text-base text-[#392319]/85 max-w-xl mx-auto leading-relaxed">
              Every outlet serves these authentic Indian favorites crafted with standardized spice blends and foolproof brewing methods.
            </p>
          </div>

          {/* Beverage Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
            {signatureBeverages.map((bev, idx) => (
              <button
                key={bev.id}
                onClick={() => setActiveBeverage(idx)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-serif text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeBeverage === idx
                    ? 'bg-[#174635] text-[#FFF4E2] shadow-lg border border-[#E5AA36] scale-105'
                    : 'bg-[#FFF4E2]/85 hover:bg-[#FFF4E2] text-[#392319] border border-[#E5AA36]/40 hover:border-[#E5AA36] shadow-xs'
                }`}
              >
                <span className={activeBeverage === idx ? 'text-[#E5AA36]' : 'text-[#B85E32]'}>✦</span>
                <span>{bev.title}</span>
              </button>
            ))}
          </div>

          {/* Active Beverage Showcase matching reference mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Left: Video / Media Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[22px] overflow-hidden shadow-2xl border border-[#E5AA36]/60 bg-[#1E0E06] aspect-[16/10] group">
                <video
                  key={signatureBeverages[activeBeverage].videoSrc}
                  src={signatureBeverages[activeBeverage].videoSrc}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
                {/* Gold Bestseller / Category Badge */}
                <div className="absolute top-4 left-4 bg-[#E5AA36] text-[#1E0E06] text-[11px] sm:text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg z-10">
                  {signatureBeverages[activeBeverage].badge}
                </div>

                {/* Subtle corner arrows for flipping drinks */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10 bg-[#1E0E06]/80 p-1 rounded-full border border-[#E5AA36]/30">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBeverage((prev) => (prev === 0 ? signatureBeverages.length - 1 : prev - 1));
                    }}
                    className="w-7 h-7 rounded-full bg-[#28140D] hover:bg-[#E5AA36] hover:text-[#1E0E06] text-[#FFF4E2] flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous drink"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBeverage((prev) => (prev === signatureBeverages.length - 1 ? 0 : prev + 1));
                    }}
                    className="w-7 h-7 rounded-full bg-[#28140D] hover:bg-[#E5AA36] hover:text-[#1E0E06] text-[#FFF4E2] flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next drink"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Beverage Copy & Details */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B85E32] mb-1.5 block font-sans">
                {signatureBeverages[activeBeverage].tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F32] mb-3 leading-tight">
                {signatureBeverages[activeBeverage].title}
              </h3>
              <p className="text-sm sm:text-base text-[#392319] leading-relaxed mb-6 font-normal">
                {signatureBeverages[activeBeverage].description}
              </p>

              {/* Tasting Notes with Circular Gold Stamp Badges */}
              <div className="space-y-3 mb-8 w-full">
                {signatureBeverages[activeBeverage].notes.map((note, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#28140D]">
                    <div className="w-6 h-6 rounded-full bg-[#E5AA36] text-[#28140D] flex items-center justify-center shrink-0 shadow-xs border border-[#B85E32]/30">
                      {idx === 0 ? (
                        <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : idx === 1 ? (
                        <Coffee className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Leaf className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              {/* Equipment Link CTA */}
              <button
                onClick={() => navigate('/included')}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#B85E32] hover:text-[#9e5226] transition-colors cursor-pointer group"
              >
                <span>See Equipment Used for This Item</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
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
                className="flex items-center gap-2.5 bg-[#EBB036] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore Full Franchise Model</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#FFF5E5] text-[#28140D] rounded-3xl p-7 sm:p-9 shadow-2xl border-2 border-[#EBB036] w-full max-w-sm text-center">
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
                  className="w-full py-3.5 rounded-full bg-[#EBB036] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-sm transition-all shadow-md cursor-pointer"
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
              className="w-full sm:w-auto bg-[#EBB036] hover:bg-[#dba12a] text-[#1E0E06] font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Enquire For Franchise Now
            </button>
            <button
              onClick={() => navigate('/faqs')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/50 hover:border-white transition-all active:scale-95 cursor-pointer"
            >
              Frequently Asked Questions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
