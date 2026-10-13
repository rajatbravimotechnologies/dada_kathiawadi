import React from 'react';
import { Leaf, Sparkles, Users, TrendingUp } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Authentic',
      subtitle: 'Kathiyawadi Taste',
    },
    {
      icon: Sparkles,
      title: 'Premium',
      subtitle: 'Quality Ingredients',
    },
    {
      icon: Users,
      title: 'Affordable',
      subtitle: 'for Everyone',
    },
    {
      icon: TrendingUp,
      title: 'Great Franchise',
      subtitle: 'Opportunity (₹2.11L)',
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 w-full overflow-hidden">
      {/* Torn Paper Top Edge Silhouette */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1200 36"
          preserveAspectRatio="none"
          className="w-full h-7 sm:h-10 text-[#F8E8C9] fill-current block"
          aria-hidden="true"
        >
          <path d="M0,36 L0,16 Q25,8 50,18 Q75,28 100,14 Q135,6 165,22 Q195,30 225,12 Q255,8 285,24 Q315,32 345,16 Q375,7 405,25 Q435,31 465,14 Q495,8 525,26 Q555,33 585,15 Q615,6 645,24 Q675,32 705,14 Q735,9 765,26 Q795,33 825,15 Q855,7 885,25 Q915,31 945,14 Q975,8 1005,25 Q1035,32 1065,15 Q1095,8 1125,24 Q1155,31 1185,15 L1200,16 L1200,36 Z" />
        </svg>
      </div>

      {/* Main Warm Parchment Body (#F8E8C9) */}
      <div className="bg-[#F8E8C9] text-[#392319] py-5 sm:py-6 px-4 sm:px-6 lg:px-8 border-b border-[#E5AA36]/30 shadow-xs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center justify-items-center">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isLast = idx === features.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 sm:gap-4 w-full px-2 sm:px-4 lg:px-6 group cursor-default transition-transform hover:-translate-y-0.5 ${
                    !isLast ? 'lg:border-r lg:border-[#E5AA36]/35' : ''
                  }`}
                >
                  {/* Circular Stamp Badge from reference design */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-[#4B210F] bg-[#FFF4E2] flex items-center justify-center text-[#4B210F] shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[#B85E32] group-hover:text-[#B85E32] transition-all">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-black text-xs sm:text-base text-[#392319] leading-tight group-hover:text-[#B85E32] transition-colors">
                      {feature.title}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#663C24] leading-tight mt-0.5">
                      {feature.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
