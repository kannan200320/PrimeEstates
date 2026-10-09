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
      if (onShowToast) onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    if (onShowToast) {
      onShowToast(`Thank you, ${formData.name}! Your message regarding "${formData.inquiryType}" has been delivered to our Senior Advisory Committee.`);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Buying Luxury Estate',
      budget: '$3M - $6M',
      message: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Private Client Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Connect With Our Advisory Concierge
          </h1>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Whether inquiring about an architectural acquisition, bespoke estate disposition, or portfolio advisory, our team handles all communications with discretion.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Direct Concierge Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Communication Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl flex-shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Concierge Line</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">+1 (800) 555-PRIME</p>
                    <p className="text-xs text-slate-500">24/7 dedicated private client support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl flex-shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Confidential Email</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">concierge@primeestates.com</p>
                    <p className="text-xs text-slate-500">Average response within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl flex-shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">450 Park Avenue, 28th Floor</p>
                    <p className="text-xs text-slate-500">New York, NY 10022</p>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Client Assurances</h4>
                {[
                  'Strict confidentiality agreements and discrete representation',
                  'Verified titles and background portfolio verification',
                  'Immediate direct broker response'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send a Confidential Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Complete the brief form below and a senior advisor specializing in your requirements will contact you directly.
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
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border text-left transition-all cursor-pointer ${
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
                  className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md shadow-brand-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Confidential Inquiry</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Accordion - Strictly 3 FAQs per user requirement */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Got Questions?</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 3).map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/70 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
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
