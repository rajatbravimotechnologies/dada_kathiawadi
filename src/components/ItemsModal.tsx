import React, { useState } from 'react';
import { X, Search, CheckCircle2, PackageCheck } from 'lucide-react';
import { FRANCHISE_PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ItemsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquireClick: () => void;
}

export const ItemsModal: React.FC<ItemsModalProps> = ({
  isOpen,
  onClose,
  onEnquireClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Items');

  if (!isOpen) return null;

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
      selectedCategory === 'All Items' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF8] border border-[#F1E6D3] rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#B87343]/20 flex items-center justify-between bg-[#FFF3D9]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B87343]">
                COMPLETE FRANCHISE INVENTORY
              </span>
              <span className="bg-[#173F35] text-[#FFF3D9] font-bold text-xs px-2.5 py-0.5 rounded-full">
                26 Total Items
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#173F35]">
              What's Included in ₹2,11,000 Package
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B5A4B] hover:text-[#2B1408] hover:bg-[#F1E6D3]/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-[#F1E6D3] bg-white flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment or items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FFF8EC] border border-[#E8DCC9] rounded-lg text-[#2B1408] placeholder-[#8C7A6B] focus:outline-none focus:border-[#F7931E]"
            />
          </div>

          {/* Filter Categories scrollable */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#F7931E] text-white shadow-xs'
                    : 'bg-[#FFF8EC] text-[#6B5A4B] hover:bg-[#F1E6D3] hover:text-[#2B1408]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Item List Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F1E6D3] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-lg bg-[#FFF8EC] p-1 flex items-center justify-center shrink-0 border border-[#F1E6D3]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fallbackType="product"
                    titleFallback={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#F7931E] tracking-wider uppercase block">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-sm text-[#2B1408] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6B5A4B] mt-0.5">{item.specs}</p>
                </div>
              </div>

              {item.description && (
                <p className="text-[11px] text-[#8C7A6B] mt-3 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="mt-3 pt-2.5 border-t border-[#F8EFE3] flex items-center justify-between text-xs font-medium">
                <span className="text-emerald-700 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Included
                </span>
                {item.quantity && (
                  <span className="bg-[#FFF8EC] text-[#6B5A4B] px-2 py-0.5 rounded-md text-[11px] font-semibold border border-[#EFE2D0]">
                    Qty: {item.quantity}
                  </span>
                )}
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#8C7A6B]">
              <PackageCheck className="w-12 h-12 mx-auto text-[#D4C3AF] mb-2" />
              <p className="text-sm">No items found matching your filter.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#F1E6D3] bg-[#FFF8EC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#6B5A4B] text-center sm:text-left">
            Complete inventory list guaranteed under the standard ₹2,11,000 package agreement.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 border border-[#D4C3AF] text-[#2B1408] hover:bg-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquireClick();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-sm"
            >
              Enquire for this Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
