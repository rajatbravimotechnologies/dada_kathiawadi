import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FranchisePage } from './pages/FranchisePage';
import { WhatsIncludedPage } from './pages/WhatsIncludedPage';
import { ProcessPage } from './pages/ProcessPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFF3D9] text-[#292720] flex flex-col font-sans selection:bg-[#B87343]/30 selection:text-[#173F35]">
        {/* Navigation Bar across all pages */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/included" element={<WhatsIncludedPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp Support Button */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
