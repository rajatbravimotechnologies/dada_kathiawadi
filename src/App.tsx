/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { FeatureStrip } from './components/FeatureStrip';
import { Investment } from './components/Investment';
import { WhatsIncluded } from './components/WhatsIncluded';
import { ItemsModal } from './components/ItemsModal';
import { Process } from './components/Process';
import { EnquirySection } from './components/EnquirySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC] text-[#2B1408] flex flex-col font-sans selection:bg-[#F7931E]/30 selection:text-[#3A1A0A]">
      {/* 1. Navbar */}
      <Navbar onEnquireClick={() => scrollToSection('contact')} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('franchise')}
          onEnquireClick={() => scrollToSection('contact')}
        />

        {/* 2. Our Story Section */}
        <OurStory onKnowMoreClick={() => scrollToSection('franchise')} />

        {/* 3. Feature Strip */}
        <FeatureStrip />

        {/* 4. Your Investment Section */}
        <Investment
          onViewIncludedClick={() => scrollToSection('included')}
          onEnquireClick={() => scrollToSection('contact')}
        />

        {/* 5. What's Included Section */}
        <WhatsIncluded onOpenModal={() => setIsModalOpen(true)} />

        {/* 6. Process - Franchise Kaise Le? Section */}
        <Process />

        {/* 7. Enquiry Section */}
        <EnquirySection />

        {/* 8. FAQs Section */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* All 26 Items In Detail Modal */}
      <ItemsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnquireClick={() => scrollToSection('contact')}
      />
    </div>
  );
}
