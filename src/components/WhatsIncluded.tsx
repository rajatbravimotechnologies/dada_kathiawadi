import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FRANCHISE_PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface WhatsIncludedProps {
  onOpenModal: () => void;
}

export const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All Items');

  const categories: ProductCategory[] = [
    'All Items',
    'Branding & Setup',
    'Tea Preparation',
    'Serving Items',
    'Kitchen Equipments',
    'Furniture',
  ];

  // Primary 10 items shown in the mockup grid
  const primaryItems = FRANCHISE_PRODUCTS.slice(0, 10);

  // If a category other than "All Items" is selected, filter from all products and show the matching ones
  const displayedItems =
    activeCategory === 'All Items'
      ? primaryItems
      : FRANCHISE_PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <section id="included" className="py-20 md:py-28 bg-[#FFF3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 block">
              FRANCHISE PACKAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F35] leading-tight">
              What's Included in
              <br />
              ₹2,11,000 Package
            </h2>
            <div className="w-14 h-1 bg-[#B87343] rounded-full mt-3"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-md">
            <p className="text-xs sm:text-sm text-[#292720]/80 leading-relaxed">
              A complete setup package with essential equipment and materials to start your Dada
              Kathiawadi Chai outlet.
            </p>
            <button
              onClick={onOpenModal}
              className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B87343] hover:text-[#a36235] border border-[#B87343] hover:border-[#a36235] hover:bg-[#B87343]/10 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              <span>View Complete List</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#173F35] text-[#FFF3D9] shadow-md font-semibold'
                    : 'bg-[#FFFDF8] text-[#292720]/80 hover:text-[#173F35] hover:bg-[#FFF3D9]/60 border border-[#B87343]/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 5 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={onOpenModal}
              className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B87343]/50 group cursor-pointer"
            >
              {/* Product Image Area */}
              <div className="aspect-square w-full rounded-xl bg-transparent flex items-center justify-center p-2 mb-3 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  fallbackType="product"
                  titleFallback={item.name}
                  specsFallback={item.specs}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h4 className="font-semibold text-sm sm:text-base text-[#173F35] leading-snug group-hover:text-[#B87343] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-[#292720]/75 mt-0.5 leading-tight">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All 26 Items In Detail Button */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F7931E] hover:text-white bg-transparent hover:bg-[#F7931E] border-2 border-[#F7931E] px-7 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-lg active:scale-95"
          >
            <span>View All 26 Items in Detail</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
