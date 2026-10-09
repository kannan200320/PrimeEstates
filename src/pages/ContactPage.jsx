import React, { useState } from 'react';
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  ChevronDownIcon, 
  CheckIcon, 
  ArrowRightIcon 
} from '../components/common/Icons';
import { FAQS } from '../data/realEstateData';

export const ContactPage = ({ onShowToast }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Buying Luxury Estate',
    budget: '$3M - $6M',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    onShowToast(`Thank you, ${formData.name}! Your message regarding "${formData.inquiryType}" has been delivered to our Senior Advisory Committee.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Buying Luxury Estate',
      budget: '$3M - $6M',
      message: ''
    });
  };

  const offices = [
    {
      city: 'New York Flagship',
      address: '450 Park Avenue, 28th Floor',
      state: 'New York, NY 10022',
      phone: '+1 (212) 555-0199',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80'
    },
    {
      city: 'Beverly Hills Atelier',
      address: '9601 Wilshire Boulevard, Penthouse Suite',
      state: 'Beverly Hills, CA 90210',
      phone: '+1 (310) 555-0288',
      image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=600&q=80'
    },
    {
      city: 'Miami Coastal Gallery',
      address: '1111 Lincoln Road, Suite 700',
      state: 'Miami Beach, FL 33139',
      phone: '+1 (305) 555-0377',
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Confidential Client Concierge
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Let's Discuss Your Real Estate Vision
          </h1>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Whether seeking an off-market trophy property, scheduling a private jet tour, or requesting a confidential estate appraisal, our Senior Partners are here to serve.
          </p>
        </div>

        {/* 2-Column: Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">Direct Communication</h3>
                <p className="text-xs text-slate-400 mt-1">Available 7 days a week for discrete private representation.</p>
              </div>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-brand-400 border border-slate-700">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold uppercase text-[10px]">Toll-Free Concierge</p>
                    <p className="text-sm font-bold text-white mt-0.5">+1 (800) 555-REAL</p>
                    <p className="text-[11px] text-slate-500">Mon - Sun: 8:00 AM - 9:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-brand-400 border border-slate-700">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold uppercase text-[10px]">Private Inquiries</p>
                    <p className="text-sm font-bold text-white mt-0.5">concierge@primeestates.com</p>
                    <p className="text-[11px] text-slate-500">Encrypted transmission & confidentiality assured</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-brand-400 border border-slate-700">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold uppercase text-[10px]">Flagship Office</p>
                    <p className="text-sm font-bold text-white mt-0.5">450 Park Avenue, Suite 2800</p>
                    <p className="text-[11px] text-slate-500">New York, NY 10022</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  PrimeEstates respects and upholds strict non-disclosure agreements (NDAs) for high-profile clients and public figures upon request.
                </p>
              </div>
            </div>

            {/* Quick Benefits Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">What to Expect</h4>
              {[
                'Response from a Licensed Partner within 2 hours',
                'Comprehensive Comparative Market Analysis (CMA)',
                'Access to off-market non-MLS luxury pocket inventory',
                'Direct coordination with your legal and tax advisors'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="p-0.5 bg-brand-50 text-brand-600 rounded">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below and a dedicated advisory partner will contact you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Inquiry Type Radio / Buttons */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    I Am Interested In
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Buying Luxury Estate',
                      'Listing/Selling Property',
                      'Private Investment Advisory',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border text-left transition-all ${
                          formData.inquiryType === type
                            ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. victoria@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer"
                    >
                      <option>$1M - $3M</option>
                      <option>$3M - $6M</option>
                      <option>$6M - $12M</option>
                      <option>$12M - $25M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the property styles, preferred locations, or timing for your acquisition..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md shadow-brand-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Confidential Inquiry</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Global Office Locations Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">Our National Advisory Ateliers</h2>
            <p className="text-xs text-slate-500 mt-1">Visit our private client consultation salons in prime locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((off, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="h-44 overflow-hidden relative">
                  <img src={off.image} alt={off.city} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-white font-bold text-base drop-shadow-md">
                    {off.city}
                  </span>
                </div>
                <div className="p-5 text-xs space-y-1.5 text-slate-600">
                  <p className="font-semibold text-slate-900">{off.address}</p>
                  <p>{off.state}</p>
                  <p className="text-brand-600 font-bold pt-1">{off.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Got Questions?</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/70 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-800">{faq.question}</span>
                    <span className={`transform transition-transform text-slate-400 ${isOpen ? 'rotate-180 text-brand-600' : ''}`}>
                      <ChevronDownIcon className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
