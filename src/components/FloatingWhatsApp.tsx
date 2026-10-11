import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste! I would like to enquire about Dada Kathiawadi Chai Franchise opportunity (₹2,11,000 package).'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="mr-3 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#3A1A0A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/10 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </div>

      {/* Button */}
      <button
        onClick={handleWhatsApp}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Chat with franchise team on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </button>
    </div>
  );
};
