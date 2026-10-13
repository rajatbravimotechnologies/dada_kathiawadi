import React from 'react';
import { ArrowRight, Check, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const FranchisePage: React.FC = () => {
  const navigate = useNavigate();

  const inclusions = [
    'Complete Commercial Tea Counter & Stall Setup',
    'Heavy-Duty Double Gas Burner Stove & Fittings',
    'Specialized Brass Tea Boiling Vessels & Strainers',
    'Illuminated Dada Kathiawadi Front Signage Board',
    'Uniforms, Aprons & Branded Merchandising',
    'Comprehensive 26 Essential Equipment Checklist',
    'On-site Tea Recipe & Spices Training',
    'Digital Menu & Social Media Launch Assets',
  ];

  const financialBenefits = [
    {
      title: 'Low Initial Capital',
      amount: '₹2,11,000',
      description: 'One of the most competitive full-setup packages in the organized Indian beverage space with zero hidden royalties.',
    },
    {
      title: 'Gross Margin',
      amount: '65% – 70%',
      description: 'High profitability per cup on tea, bun maska, snacks and beverage variations.',
    },
    {
      title: 'Break-even Timeline',
      amount: '3 – 5 Months',
      description: 'Rapid return on investment due to consistent footfall and steady recurring neighborhood patronage.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            FRANCHISE BUSINESS OPPORTUNITY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            Franchise Model & Investment
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            Own a profitable business with Dada Kathiawadi Chai. Complete setup, training, branding, and standard operating procedures included.
          </p>
        </div>

        {/* Pricing Spotlight Card */}
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-12 text-[#FFF3D9] border-2 border-[#B87343] shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#E6A76E] mb-2 block">
                ALL-INCLUSIVE SETUP PACKAGE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#FFF3D9] mb-2">
                ₹2,11,000
              </h2>
              <p className="text-sm sm:text-base text-[#FFF3D9]/80 mb-6 max-w-md">
                One-time package covering all essential 26 equipments, branding boards, raw material starter batches, and onboarding support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/included')}
                  className="flex items-center justify-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>View All 26 Items</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/40 hover:border-white transition-all active:scale-95"
                >
                  Enquire Immediately
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#FFF3D9]/10 p-3 rounded-xl border border-[#B87343]/20">
                  <Check className="w-4 h-4 text-[#E6A76E] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-xs font-medium text-[#FFF3D9]/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Highlights */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#173F35] mb-10">
            Why Invest in Dada Kathiawadi Chai?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financialBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 sm:p-8 shadow-xs">
                <span className="text-xs font-bold text-[#B87343] uppercase tracking-wider block mb-1">
                  {benefit.title}
                </span>
                <h4 className="font-serif text-3xl font-extrabold text-[#173F35] mb-3">
                  {benefit.amount}
                </h4>
                <p className="text-xs sm:text-sm text-[#292720]/75 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outlet Setup Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#B87343]/30 bg-[#173F35]">
              <ImageWithFallback
                src="/assets/stall.jpg"
                alt="Outlet Model"
                fallbackType="stall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B87343] mb-2 block">
              LOCATION & SPACE REQUIREMENTS
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#173F35] mb-4">
              Suitable for High Footfall Markets & Transit Hubs
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#292720]/80">
                <ShieldCheck className="w-5 h-5 text-[#B87343]" />
                <span>Minimum 80 – 150 sq. ft. carpet area required</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#292720]/80">
                <TrendingUp className="w-5 h-5 text-[#B87343]" />
                <span>Ideal locations: Commercial complexes, college hubs, railway/bus transit, highway spots</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#292720]/80">
                <Users className="w-5 h-5 text-[#B87343]" />
                <span>Staffing: 1-2 operators can easily manage peak morning and evening volumes</span>
              </li>
            </ul>

            <button
              onClick={() => navigate('/contact')}
              className="bg-[#B87343] hover:bg-[#a36235] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
            >
              Start Franchise Application
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
