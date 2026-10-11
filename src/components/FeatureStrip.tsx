import React from 'react';
import { Leaf, Store, Users, Headset } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Authentic Taste',
      subtitle: 'Kathiawayad ki mitti ka swaad',
    },
    {
      icon: Store,
      title: 'Complete Setup',
      subtitle: 'Essential equipment included',
    },
    {
      icon: Users,
      title: 'Business Opportunity',
      subtitle: 'Ek pehchaan wale brand ke saath',
    },
    {
      icon: Headset,
      title: 'Enquiry Support',
      subtitle: 'Franchise team se poori jaankari',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#3A1A0A] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isLast = idx === features.length - 1;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-4 ${
                  !isLast ? 'lg:border-r lg:border-white/10' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#F7931E] mb-3">
                  <Icon className="w-7 h-7 stroke-[2]" />
                </div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-100/70 font-normal">
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
