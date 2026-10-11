import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { INDIAN_STATES } from '../data/faqs';
import { EnquiryFormData } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    hasShop: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    // 10-digit Indian Mobile Validation
    const mobileDigits = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (mobileDigits.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.whatsapp.trim()) {
      const whatsappDigits = formData.whatsapp.replace(/\D/g, '');
      if (whatsappDigits.length !== 10) {
        newErrors.whatsapp = 'Enter 10-digit WhatsApp number';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
    }

    if (!formData.hasShop) {
      newErrors.hasShop = 'Please select your shop status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate enquiry API dispatch
    // =========================================================================
    // TODO: Connect this enquiry form handler to your production destination:
    // Option 1: Send to REST API backend endpoint (e.g., fetch('/api/franchise-enquiry', { method: 'POST', body: JSON.stringify(formData) }))
    // Option 2: Post to Google Sheets webhook (via Google Apps Script / SheetDB)
    // Option 3: Send via EmailJS (emailjs.send("service_id", "template_id", formData))
    // Option 4: Forward payload to WhatsApp Business API
    // =========================================================================
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Namaste Dada Kathiawadi Chai Team! I am interested in the ₹2,11,000 Franchise Package.\nName: ${formData.fullName || 'Customer'}\nLocation: ${formData.city || ''}, ${formData.state || ''}\nMobile: ${formData.mobile || ''}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#3A1A0A] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
        
        {/* Tea leaves and spice decorative textures */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-amber-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Heading and Chai Cup graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F7931E] mb-2 block">
                ENQUIRY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Ready To Start
                <br />
                <span className="text-[#F7931E]">Your Chai Business?</span>
              </h2>

              <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed mb-8 max-w-md">
                Apna naam aur location share karein. Hamari franchise team aapse package details
                aur next steps ke liye contact karegi.
              </p>

              {/* Direct Helpline Badge */}
              <div className="hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-sm mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F7931E]/20 text-[#F7931E] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-amber-200/70 block uppercase tracking-wider font-semibold">
                    Direct Franchise Helpline
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide">
                    +91 98765 43210
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-left corner: Authentic Chai Cup image with Dada seal */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mt-4 self-center lg:self-start">
              <ImageWithFallback
                src="/assets/enquiry-cup.png"
                alt="Kathiawadi Chai Cup with spices"
                fallbackType="chai-cup"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: White Rounded Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#F1E6D3]">
              
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1408] mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-[#6B5A4B] max-w-md mb-6 leading-relaxed">
                    Dhanyawad <span className="font-semibold text-[#2B1408]">{formData.fullName}</span>!
                    Dada Kathiawadi Chai franchise team aapse jald hi call aur WhatsApp par
                    sampark karegi.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          mobile: '',
                          whatsapp: '',
                          email: '',
                          city: '',
                          state: '',
                          hasShop: '',
                          message: '',
                        });
                      }}
                      className="px-4 py-3 border border-[#E0D0BC] hover:bg-[#FFF8EC] text-[#2B1408] text-sm font-semibold rounded-xl transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Full Name * | Mobile Number * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        Full Name <span className="text-[#F7931E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. Ramesh Patel"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        Mobile Number <span className="text-[#F7931E]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#6B5A4B]">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="98765 43210"
                          maxLength={10}
                          value={formData.mobile}
                          onChange={handleChange}
                          className={`w-full pl-11 pr-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none transition-colors ${
                            errors.mobile
                              ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                          }`}
                        />
                      </div>
                      {errors.mobile && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: WhatsApp Number | Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        placeholder="Optional (if different)"
                        maxLength={10}
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none transition-colors ${
                          errors.whatsapp
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="ramesh@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: City * | State * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        City <span className="text-[#F7931E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Rajkot, Ahmedabad, Surat"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none transition-colors ${
                          errors.city
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      />
                      {errors.city && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        State <span className="text-[#F7931E]">*</span>
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] focus:outline-none transition-colors ${
                          errors.state
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      >
                        <option value="">Select State</option>
                        {INDIAN_STATES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.state}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Do you already have a shop? | Message */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        Do you already have a shop? <span className="text-[#F7931E]">*</span>
                      </label>
                      <select
                        name="hasShop"
                        value={formData.hasShop}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 bg-[#FFF8EC]/60 border rounded-lg text-xs sm:text-sm text-[#2B1408] focus:outline-none transition-colors ${
                          errors.hasShop
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#E8DCC9] focus:border-[#F7931E] focus:bg-white'
                        }`}
                      >
                        <option value="">Select Option</option>
                        <option value="Yes - Owned">Yes - Owned Shop</option>
                        <option value="Yes - Rented">Yes - Rented Shop</option>
                        <option value="No">No - Looking for a place</option>
                        <option value="Planning to get one">Planning to get one soon</option>
                      </select>
                      {errors.hasShop && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.hasShop}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2B1408] mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Any questions or preferred launch timeframe..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 bg-[#FFF8EC]/60 border border-[#E8DCC9] rounded-lg text-xs sm:text-sm text-[#2B1408] placeholder-[#9C8A7B] focus:outline-none focus:border-[#F7931E] focus:bg-white transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Full-width Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#F7931E] hover:bg-[#e08215] text-[#2B1408] font-bold text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Franchise Enquiry</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
