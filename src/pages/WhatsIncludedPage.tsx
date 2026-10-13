import React, { useState } from 'react';
import { FRANCHISE_PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

export const WhatsIncludedPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories: ProductCategory[] = [
    'All Items',
    'Branding & Setup',
    'Tea Preparation',
    'Serving Items',
    'Kitchen Equipments',
    'Furniture',
  ];

  const filteredItems = FRANCHISE_PRODUCTS.filter((item) => {
    const matchesCategory =
      activeCategory === 'All Items' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FFF3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B87343] mb-2 inline-block">
            COMPLETE FRANCHISE INVENTORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#173F35] leading-tight mb-4">
            What's Included in ₹2,11,000 Package
          </h1>
          <div className="w-16 h-1 bg-[#B87343] rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-[#292720]/80 leading-relaxed">
            Every essential machine, burner, vessel, display board, and utensil needed to start serving authentic Dada Kathiawadi Chai from Day 1.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#173F35] text-[#FFF3D9] shadow-md'
                      : 'bg-[#FFFDF8] text-[#292720]/80 hover:text-[#173F35] border border-[#B87343]/30'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#B87343] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search items or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FFFDF8] border border-[#B87343]/30 rounded-full text-xs sm:text-sm text-[#292720] focus:outline-none focus:border-[#B87343]"
            />
          </div>
        </div>

        {/* Complete Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF8] border border-[#B87343]/20 rounded-2xl p-4 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="aspect-square w-full rounded-xl bg-[#FFF3D9]/50 border border-[#B87343]/15 flex items-center justify-center p-3 mb-3 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  fallbackType="product"
                  titleFallback={item.name}
                  specsFallback={item.specs}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#B87343] uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-semibold text-xs sm:text-sm text-[#173F35] leading-snug line-clamp-2 mb-1">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#292720]/75 line-clamp-1">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-12 text-center text-[#FFF3D9] border border-[#B87343]/30">
          <h3 className="font-serif text-3xl font-bold mb-3">
            Want the full PDF equipment catalog?
          </h3>
          <p className="text-sm text-[#FFF3D9]/80 max-w-lg mx-auto mb-6">
            Contact our franchise advisor to receive detailed brand specifications and launch support guidelines.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#B87343] hover:bg-[#a36235] text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg active:scale-95"
          >
            <span>Request Full Franchise Brochure</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
