import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FRANCHISE_FAQS } from '../data/faqs';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#FFF3D9] border-t border-[#B87343]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F35]">
            Franchise Sawal-Jawab
          </h2>
          <div className="w-12 h-1 bg-[#B87343] rounded-full mx-auto mt-3"></div>
          <p className="text-sm text-[#292720]/80 mt-3">
            Common questions about setting up your Dada Kathiawadi Chai outlet.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {FRANCHISE_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FFFDF8] border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#B87343] shadow-md' : 'border-[#B87343]/20 hover:border-[#B87343]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-[#173F35]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#B87343] text-white rotate-180'
                        : 'bg-[#FFF3D9] text-[#292720]/70 border border-[#B87343]/30'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-[#6B5A4B] leading-relaxed border-t border-[#F8EFE3] mt-1 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
