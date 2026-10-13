import React from 'react';
import { FileText, Users, CheckCircle2, Store, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProcessPage: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Initial Enquiry & Application',
      description: 'Fill out our online franchise form with your basic personal details, city, and preferred shop availability.',
      duration: 'Day 1',
    },
    {
      step: '02',
      icon: Users,
      title: 'Franchise Team Discussion',
      description: 'Our senior franchise manager connects with you to explain the profit projections, territory rights, and operations.',
      duration: 'Day 2 – 3',
    },
    {
      step: '03',
      icon: CheckCircle2,
      title: 'Location Review & Agreement',
      description: 'We help you assess high footfall feasibility, verify shop dimensions, and finalize the franchise contract.',
      duration: 'Day 4 – 7',
    },
    {
      step: '04',
      icon: Store,
      title: 'Setup, Training & Grand Launch',
      description: 'All 26 equipments, branding boards, raw materials are dispatched. Master recipe training conducted for flawless opening.',
      duration: 'Day 10 – 14',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            STEP-BY-STEP ROADMAP
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            Franchise Kaise Le?
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            From initial consultation to ribbon-cutting ceremony — our proven onboarding process takes just 10 to 14 days.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-extrabold text-[#173F35]/20">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold text-[#B87343] bg-[#B87343]/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173F35] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292720]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Pillars */}
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-12 text-[#FFF3D9] border border-[#B87343]/30 mb-16">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">
            Dedicated Partner Support at Every Step
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-[#E6A76E] mb-3" />
              <h4 className="font-bold text-base mb-1">Standard Quality Assurance</h4>
              <p className="text-xs text-[#FFF3D9]/75">Pre-tested spice formulas guarantee the identical authentic flavor everywhere.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-[#E6A76E] mb-3" />
              <h4 className="font-bold text-base mb-1">Fast Turnaround</h4>
              <p className="text-xs text-[#FFF3D9]/75">No lengthy red-tape. Quick equipment dispatch right to your shop doorstep.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Headphones className="w-10 h-10 text-[#E6A76E] mb-3" />
              <h4 className="font-bold text-base mb-1">Dedicated Ops Advisor</h4>
              <p className="text-xs text-[#FFF3D9]/75">Continuous telephonic guidance for inventory, staffing, and promotional campaigns.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg active:scale-95"
          >
            <span>Start Step 1 – Enquire Now</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
