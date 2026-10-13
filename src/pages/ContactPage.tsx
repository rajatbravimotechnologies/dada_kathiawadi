import React from 'react';
import { EnquirySection } from '../components/EnquirySection';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            Contact & Franchise Enquiry
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            Ready to take the first step towards launching your Dada Kathiawadi Chai outlet? Submit your details or contact us directly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 stroke-[2]" />
            </div>
            <h4 className="font-bold text-base text-[#173F35] mb-1">Call / WhatsApp</h4>
            <a href="tel:+919876543210" className="text-sm text-[#B87343] font-semibold hover:underline">
              +91 98765 43210
            </a>
            <p className="text-xs text-[#292720]/60 mt-1">Mon – Sat, 9:00 AM – 8:00 PM</p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 stroke-[2]" />
            </div>
            <h4 className="font-bold text-base text-[#173F35] mb-1">Email Us</h4>
            <a href="mailto:franchise@dadakathiawadichai.com" className="text-sm text-[#B87343] font-semibold hover:underline">
              franchise@dadakathiawadichai.com
            </a>
            <p className="text-xs text-[#292720]/60 mt-1">Quick response within 24 hours</p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#173F35] text-[#FFF3D9] flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 stroke-[2]" />
            </div>
            <h4 className="font-bold text-base text-[#173F35] mb-1">Head Office</h4>
            <p className="text-sm text-[#292720]/80">
              Kathiawad Heritage Bhavan, Gujarat / MP
            </p>
            <p className="text-xs text-[#292720]/60 mt-1">India</p>
          </div>
        </div>

        {/* Existing Interactive Lead Generation Form */}
        <EnquirySection />

      </div>
    </div>
  );
};
