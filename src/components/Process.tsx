import React from 'react';
import { FileText, Users, CheckCircle2, Store } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: FileText,
      title: 'Enquire',
      description: 'Apna naam aur location share karein.',
    },
    {
      number: '2',
      icon: Users,
      title: 'Discuss',
      description: 'Franchise team se package aur requirements samjhein.',
    },
    {
      number: '3',
      icon: CheckCircle2,
      title: 'Confirm',
      description: 'Terms, location suitability aur agreement details final karein.',
    },
    {
      number: '4',
      icon: Store,
      title: 'Prepare Your Outlet',
      description: 'Setup process complete karke apna chai business shuru karein.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FFF3D9] relative overflow-hidden">
      
      {/* Faint tea-leaf decorative watermark on the right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-15 pointer-events-none select-none text-[#B87343]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <path d="M100 10 C150 40 180 90 170 150 C130 170 80 150 60 110 C50 80 70 30 100 10 Z" />
          <path d="M100 10 Q120 90 170 150" stroke="#FFF3D9" strokeWidth="3" fill="none" />
          <path d="M40 80 C80 100 110 140 100 190 C70 195 30 170 20 130 C10 100 20 85 40 80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 block">
            PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F35] leading-tight">
            Franchise Kaise Le?
          </h2>
          <p className="text-sm sm:text-base text-[#292720]/80 mt-2">
            Simple 4-step process to start your Dada Kathiawadi Chai outlet.
          </p>
        </div>

        {/* 4 Cards in a Row with Dotted Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative flex flex-col">
                <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
                  
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#173F35] text-[#FFF3D9] font-bold text-sm flex items-center justify-center shadow-xs">
                      {step.number}
                    </div>

                    {/* Dotted connecting arrow indicator on desktop inside row */}
                    {!isLast && (
                      <div className="hidden lg:flex items-center absolute -right-4 top-10 z-20 pointer-events-none text-[#B87343]">
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                          <line
                            x1="0"
                            y1="6"
                            x2="18"
                            y2="6"
                            stroke="#B87343"
                            strokeWidth="2"
                            strokeDasharray="2 3"
                          />
                          <path
                            d="M16 2 L22 6 L16 10"
                            stroke="#B87343"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFF3D9] border border-[#B87343]/30 text-[#173F35] flex items-center justify-center mb-4 group-hover:text-[#B87343] group-hover:border-[#B87343] transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[#173F35] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#292720]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
