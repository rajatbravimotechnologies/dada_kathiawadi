import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeatureStrip } from '../components/FeatureStrip';
import { RoyalCtaBanner } from '../components/RoyalCtaBanner';
import {
  ArrowRight,
  Check,
  Sparkles,
  Coffee,
  Leaf,
  Store,
  Flame,
  GraduationCap,
  FileText,
  Megaphone,
  HeartHandshake,
  PhoneCall,
  Lightbulb,
  Package,
  Users,
  FileCheck,
  Rocket,
  Plus,
  Minus,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { FRANCHISE_PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeBeverage, setActiveBeverage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(2);

  const homeFaqs = [
    {
      id: 1,
      question: 'What is the total franchise cost?',
      answer:
        'The total franchise startup package is ₹2,11,000 (all-inclusive). There are zero royalties, zero monthly revenue sharing, and zero hidden charges.',
    },
    {
      id: 2,
      question: 'What is included in the ₹2,11,000 package?',
      answer:
        'The package includes all 26 commercial setup items: 8x4 ft Acrylic Light Board, Stainless Steel Service Counter, Authentic Peetal Patila, Gas Regulator & Pipe, Milton Thermos (3.5L), 100 Glass Cups, 4,000 Branded Disposable Cups, 100 packets of Kathiawadi Chai Masala, and full operational recipe SOPs.',
    },
    {
      id: 3,
      question: 'How much space is required for the outlet?',
      answer:
        'A compact carpet area of 80 sq. ft. to 150 sq. ft. is sufficient to run a high-volume outlet. Locations with steady pedestrian footfall — such as commercial markets, business districts, college campuses, and transit stations — deliver prime results.',
    },
    {
      id: 4,
      question: 'Do you provide training and support?',
      answer:
        'Yes. We provide complete hands-on brewmaster training covering authentic Kathiawadi spice-boiling ratios, counter sanitation, customer service standards, billing workflow, and opening-week launch assistance.',
    },
    {
      id: 5,
      question: 'How soon can I start my outlet?',
      answer:
        'You can launch your outlet within 10 to 15 days of signing the franchise agreement. Equipment dispatch takes 3–5 working days, followed by 2–3 days of onsite setup and barista training.',
    },
  ];

  // Top 5 preview products with custom badge icons matching reference design
  const previewProducts = [
    {
      id: 1,
      name: 'Light Board',
      specs: '8 x 4 feet Acrylic Board',
      image: '/assets/products/light-board.png',
      badgeIcon: Lightbulb,
    },
    {
      id: 2,
      name: 'Service Counter',
      specs: '4 x 2 feet Counter',
      image: '/assets/products/Service Counter.png',
      badgeIcon: Store,
    },
    {
      id: 3,
      name: 'Peetal Patila',
      specs: '2.5 x 2 feet',
      image: '/assets/products/Peetal Patila.png',
      badgeIcon: Coffee,
    },
    {
      id: 4,
      name: 'Gas Regulator',
      specs: 'with Pipe',
      image: '/assets/products/gas-regulator.png',
      badgeIcon: Flame,
    },
    {
      id: 5,
      name: 'Milton Thermos',
      specs: '3.5 Litres',
      image: '/assets/products/Milton Thermos.png',
      badgeIcon: Sparkles,
    },
  ];

  const franchiseFeatures = [
    {
      icon: Store,
      title: '₹2,11,000',
      subtitle: 'All-in Startup Model',
    },
    {
      icon: Flame,
      title: '26 Commercial',
      subtitle: 'Equipments Included',
    },
    {
      icon: GraduationCap,
      title: 'Training &',
      subtitle: 'Setup Support',
    },
    {
      icon: FileText,
      title: 'Authentic',
      subtitle: 'Recipes & SOPs',
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      subtitle: 'Guidance',
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing',
      subtitle: 'Franchise Support',
    },
  ];

  const howItWorksSteps = [
    {
      num: '01',
      title: 'Apply',
      subtitle: 'Share your details',
      icon: FileText,
    },
    {
      num: '02',
      title: 'Consultation',
      subtitle: 'Discuss location & setup',
      icon: Users,
    },
    {
      num: '03',
      title: 'Agreement',
      subtitle: 'Get started with paperwork',
      icon: FileCheck,
    },
    {
      num: '04',
      title: 'Setup & Training',
      subtitle: 'Outlet setup & team training',
      icon: GraduationCap,
    },
    {
      num: '05',
      title: 'Launch',
      subtitle: 'Start serving & grow together',
      icon: Rocket,
    },
  ];

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

      {/* 5. Business Opportunity / Franchise Model: Vintage Torn Parchment Showcase */}
      <section
        id="franchise-opportunity"
        className="relative py-20 sm:py-24 lg:py-28 xl:py-32 overflow-hidden bg-[#F8E8C9]"
      >
        {/* Background container: Pure background only (no boxes, no cards around background) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full background image 100% visible from edge to edge */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/franchise-opportunity-background.png.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Responsive framing with top and bottom torn edges and corner tea leaves */}
          <div className="block lg:hidden w-full h-full bg-[#F8E8C9] relative">
            {/* Top Torn Paper & Tea Leaves */}
            <div
              className="absolute top-0 left-0 w-full h-[220px] sm:h-[300px] pointer-events-none"
              style={{
                backgroundImage: "url('/assets/franchise-opportunity-background.png.png')",
                backgroundPosition: 'center top',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              }}
            />

            {/* Bottom Torn Paper & Tea Leaves */}
            <div
              className="absolute bottom-0 left-0 w-full h-[220px] sm:h-[300px] pointer-events-none"
              style={{
                backgroundImage: "url('/assets/franchise-opportunity-background.png.png')",
                backgroundPosition: 'center bottom',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 65%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Business Opportunity Copy & Actions */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#B85E32] mb-2 sm:mb-3 block font-sans">
                BUSINESS OPPORTUNITY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] mb-3.5 tracking-tight">
                <span className="block text-[#28140D]">Start Your Own</span>
                <span className="block text-[#A84A1C] mt-1">Dada Kathiyawadi Chai</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#392319] leading-relaxed mb-7 max-w-xl">
                Be a part of India's beloved chai tradition with a proven franchise model at just <strong className="font-bold text-[#28140D]">₹2,11,000 all-in</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/franchise')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
                >
                  <span>Get Franchise Brochure</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FFF4E2]/85 hover:bg-[#FFF4E2] text-[#28140D] font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-[#B85E32]/35 hover:border-[#B85E32] transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#B85E32] stroke-[2.2]" />
                  <span>Talk to Our Team</span>
                </button>
              </div>
            </div>

            {/* Right Column: 6-Feature Grid Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFDF8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 lg:p-8 shadow-xl border border-[#E5AA36]/30">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 sm:gap-0">
                  {franchiseFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    const isTopRow = idx < 3;
                    const isRightCol = (idx + 1) % 3 === 0;
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col items-start sm:px-5 lg:px-6 py-2 sm:py-4 ${
                          isTopRow ? 'sm:border-b sm:border-[#E5AA36]/25' : ''
                        } ${
                          !isRightCol ? 'sm:border-r sm:border-[#E5AA36]/25' : ''
                        }`}
                      >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#B85E32] bg-[#FDEFE7] flex items-center justify-center text-[#B85E32] mb-2.5 sm:mb-3 shadow-xs">
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <h4 className="font-serif font-black text-sm sm:text-base lg:text-lg text-[#28140D] leading-tight">
                          {feat.title}
                        </h4>
                        <p className="font-sans text-[11px] sm:text-xs text-[#5C4033] font-medium leading-tight mt-1">
                          {feat.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. What's Included Preview (Top 5 Items) — Rustic Chai Heritage Panorama */}
      <section
        id="included-preview"
        className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#F8E8C9]"
      >
        {/* Background container: Pure background only (no boxes, no cards around background) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full background image 100% visible from edge to edge */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/Rustic Chai Heritage Panorama.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Multi-Layer Responsive Framing */}
          {/* Lake palace on top-left and chai setup on bottom-right remain 100% visible */}
          <div className="block lg:hidden w-full h-full bg-[#F8E8C9] relative">
            {/* Top-Left: Heritage Lake Palace & Foliage */}
            <div
              className="absolute top-0 left-0 w-full h-[280px] sm:h-[360px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Rustic Chai Heritage Panorama.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              }}
            />

            {/* Bottom-Right: Wooden table, Brass Kettle, Kulhads & Spices */}
            <div
              className="absolute bottom-0 right-0 w-full h-[320px] sm:h-[400px] pointer-events-none opacity-90"
              style={{
                backgroundImage: "url('/assets/Rustic Chai Heritage Panorama.png')",
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to top, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 55%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Area */}
          <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            
            {/* Small Ornamental Kettle Icon */}
            <div className="flex items-center justify-center gap-3 mb-2 text-[#E5AA36]">
              <div className="h-px bg-[#B85E32]/35 w-12 sm:w-16" />
              <div className="w-8 h-8 rounded-full bg-[#FFF4E2] border border-[#B85E32]/30 flex items-center justify-center text-[#B85E32] shadow-xs">
                <Coffee className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="h-px bg-[#B85E32]/35 w-12 sm:w-16" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-1.5 block font-sans">
              PACKAGE INVENTORY PREVIEW
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F32] tracking-tight mb-3">
              What's Included in ₹2,11,000
            </h2>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#392319] leading-relaxed max-w-xl mx-auto">
              Get a complete, ready-to-run Kathiyawadi Chai outlet with 26 essential items.
              <span className="block mt-0.5">Everything you need to start brewing success from day one.</span>
            </p>

            {/* Top Right "Explore All 26 Items ->" Button */}
            <div className="lg:absolute lg:right-0 lg:top-8 mt-5 lg:mt-0 flex justify-center">
              <button
                onClick={() => navigate('/included')}
                className="inline-flex items-center gap-2 bg-[#E5AA36] hover:bg-[#d69925] text-[#1E0E06] font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Explore All 26 Items</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 5 Inventory Preview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 mb-10 sm:mb-12">
            {previewProducts.map((item) => {
              const BadgeIcon = item.badgeIcon;
              return (
                <div
                  key={item.id}
                  onClick={() => navigate('/included')}
                  className="bg-[#FFFDF8] rounded-[22px] sm:rounded-[26px] p-3 sm:p-3.5 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-[#E5AA36]/35 cursor-pointer group"
                >
                  {/* Photo Container */}
                  <div className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#1E0E06] relative shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Circular Stamp Badge overlapping bottom of the photo */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3D170A] border-2 border-[#E5AA36] text-[#E5AA36] flex items-center justify-center -mt-4.5 sm:-mt-5 z-10 shadow-md group-hover:scale-110 transition-transform">
                    <BadgeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                  </div>

                  {/* Item Title & Specs */}
                  <div className="pt-2 sm:pt-2.5 pb-1 w-full">
                    <h4 className="font-serif font-black text-sm sm:text-base text-[#173F32] leading-snug line-clamp-1 group-hover:text-[#B85E32] transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-[#5C4033] font-medium line-clamp-1 mt-0.5">
                      {item.specs}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Button with Ornamental Flourishes */}
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* Left flourish */}
            <svg width="40" height="24" viewBox="0 0 50 30" fill="none" className="text-[#B85E32]/60 hidden sm:block">
              <path d="M50 15 C35 15, 25 5, 10 10 C5 12, 0 15, 10 18 C25 22, 35 15, 50 15 Z" fill="currentColor" opacity="0.6" />
              <circle cx="6" cy="14" r="3" fill="currentColor" />
            </svg>

            <button
              onClick={() => navigate('/included')}
              className="inline-flex items-center gap-2.5 bg-[#8C3A18] hover:bg-[#783013] text-[#FFF4E2] font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-[#E5AA36]/40 cursor-pointer"
            >
              <Package className="w-4 h-4 stroke-[2.3]" />
              <span>Explore Complete 26-Item List</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Right flourish */}
            <svg width="40" height="24" viewBox="0 0 50 30" fill="none" className="text-[#B85E32]/60 hidden sm:block transform scale-x-[-1]">
              <path d="M50 15 C35 15, 25 5, 10 10 C5 12, 0 15, 10 18 C25 22, 35 15, 50 15 Z" fill="currentColor" opacity="0.6" />
              <circle cx="6" cy="14" r="3" fill="currentColor" />
            </svg>
          </div>

        </div>
      </section>

      {/* 7. How It Works: 5-Step Connected Editorial Process */}
      <section id="process" className="py-20 md:py-24 bg-[#FAF4E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#B85E32] mb-2 block font-sans">
            SIMPLE & SUPPORTIVE PROCESS
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F32] tracking-tight mb-14 sm:mb-18">
            How It Works
          </h2>

          {/* 5-Step Connected Process Flow */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === howItWorksSteps.length - 1;
              return (
                <React.Fragment key={idx}>
                  {/* Step Node */}
                  <div
                    onClick={() => navigate('/process')}
                    className="flex flex-col items-center text-center max-w-[190px] w-full group cursor-pointer"
                  >
                    {/* Terracotta Circle Icon Badge (Exact match to reference: borderless rich gradient with clean white line icon) */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#B54A20] via-[#963C15] to-[#782C0E] shadow-[0_4px_16px_rgba(150,60,21,0.28)] flex items-center justify-center text-white group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(150,60,21,0.38)] transition-all duration-300 shrink-0">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8] text-white" />
                    </div>

                    {/* Step Number in Warm Golden Mustard */}
                    <span className="font-sans font-bold text-xs sm:text-sm tracking-widest text-[#C4923C] mt-4 mb-1 block">
                      {step.num}
                    </span>

                    {/* Step Title in Bold Dark Serif */}
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1F140E] leading-snug group-hover:text-[#B54A20] transition-colors">
                      {step.title}
                    </h4>

                    {/* Step Subtitle in Muted Earthy Brown */}
                    <p className="font-sans text-xs sm:text-[13px] text-[#736357] mt-1 leading-relaxed max-w-[160px]">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Horizontal Connector Line for Desktop with Center Diamond (Mathematically centered to the h-16/h-20 circles) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center h-16 sm:h-20 flex-1 mx-2 sm:mx-3 text-[#B85E32]/70 shrink-0">
                      <div className="h-0 border-t border-dashed border-[#B85E32]/50 flex-1" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#B85E32] mx-2 shrink-0" />
                      <div className="h-0 border-t border-dashed border-[#B85E32]/50 flex-1" />
                    </div>
                  )}

                  {/* Vertical Connector Line for Mobile/Tablet with Center Diamond */}
                  {!isLast && (
                    <div className="flex lg:hidden flex-col items-center my-1 text-[#B85E32]/70">
                      <div className="w-0 h-6 border-l border-dashed border-[#B85E32]/50" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#B85E32] my-1 shrink-0" />
                      <div className="w-0 h-6 border-l border-dashed border-[#B85E32]/50" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. FAQs Section: Kathiawadi Heritage Backdrop */}
      <section
        id="faqs"
        className="relative pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-36 overflow-hidden bg-[#F6E9CF]"
      >
        {/* Background container: Pure background only (no boxes, no cards around background) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Desktop & Laptop (lg+): Full background image 100% visible edge-to-edge */}
          <div
            className="hidden lg:block w-full h-full"
            style={{
              backgroundImage: "url('/assets/FAQ Background.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile & Tablet (< lg): Dual-layer responsive framing so grandfather, palace, and green mountains remain fully visible */}
          <div className="block lg:hidden w-full h-full bg-[#F6E9CF] relative">
            {/* Top Atmospheric Art: Grandfather with Chai & Palace */}
            <div
              className="absolute top-0 left-0 w-full h-[280px] sm:h-[360px] pointer-events-none"
              style={{
                backgroundImage: "url('/assets/FAQ Background.png')",
                backgroundPosition: 'left top',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
            />

            {/* Bottom Watercolor Mountain Landscape */}
            <div
              className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[140px] pointer-events-none"
              style={{
                backgroundImage: "url('/assets/FAQ Background.png')",
                backgroundPosition: 'center bottom',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Eyebrow + FAQs Heading + Ornament (Floating in open space above palace, next to grandfather) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-center lg:pl-16 xl:pl-28">
              {/* Eyebrow */}
              <span className="text-xs sm:text-[13px] md:text-sm font-bold tracking-[0.22em] uppercase text-[#B85E32] mb-1.5 block font-sans">
                FREQUENTLY ASKED QUESTIONS
              </span>

              {/* Heading */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#173F32] tracking-tight leading-none mb-1">
                FAQs
              </h2>

              {/* Golden Center Ornament */}
              <div className="flex items-center justify-center gap-2 text-[#C4923C] my-2">
                <div className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-[#C4923C]" />
                <span className="text-xs sm:text-sm font-serif">✦</span>
                <div className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-[#C4923C]" />
              </div>
            </div>

            {/* Right Column: 5 Accordion Cards in Off-White Parchment */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
              {homeFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="bg-[#FFFDF8]/90 hover:bg-[#FFFDF8] backdrop-blur-[2px] border border-[#E8D8C3] hover:border-[#C4923C]/60 rounded-2xl transition-all duration-300 shadow-[0_2px_8px_rgba(40,20,13,0.04)] hover:shadow-md cursor-pointer overflow-hidden"
                  >
                    <div className="px-5 sm:px-7 py-3.5 sm:py-4 flex items-center justify-between gap-4">
                      <span className="font-serif font-bold text-sm sm:text-base text-[#1F140E] select-none">
                        {faq.question}
                      </span>
                      <span className="text-xl sm:text-2xl font-light text-[#8C3A18] select-none shrink-0 transition-transform duration-300">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="px-5 sm:px-7 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#5C4537] leading-relaxed border-t border-[#F2E5D3] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 9. Pre-Footer Royal Chai CTA Banner */}
      <RoyalCtaBanner />

    </div>
  );
};
