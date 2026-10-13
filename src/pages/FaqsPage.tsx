import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FRANCHISE_FAQS } from '../data/faqs';
import { useNavigate } from 'react-router-dom';

export const FaqsPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const navigate = useNavigate();

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            Franchise Sawal-Jawab
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            Everything you need to know about starting, running, and profiting with a Dada Kathiawadi Chai franchise outlet.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 mb-16">
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
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-[#292720]/80 leading-relaxed border-t border-[#FFF3D9] mt-1 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-10 text-center text-[#FFF3D9] border border-[#B87343]/30">
          <HelpCircle className="w-12 h-12 text-[#E6A76E] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Still have queries or need customized guidance?
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF3D9]/75 max-w-md mx-auto mb-6">
            Speak directly with our franchise advisory representative today.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-md active:scale-95"
          >
            <span>Ask Our Franchise Team</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
