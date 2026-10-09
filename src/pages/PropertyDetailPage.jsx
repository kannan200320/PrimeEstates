import React, { useState } from 'react';
import { 
  BedIcon, 
  BathIcon, 
  SqftIcon, 
  GarageIcon, 
  MapPinIcon, 
  HeartIcon, 
  ShareIcon, 
  PhoneIcon, 
  MailIcon, 
  StarIcon, 
  CheckIcon, 
  CalculatorIcon, 
  CalendarIcon, 
  ArrowRightIcon, 
  XIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PROPERTIES, AGENTS } from '../data/realEstateData';

export const PropertyDetailPage = ({ 
  propertyId, 
  onBack, 
  onSelectProperty, 
  onSelectAgent, 
  savedPropertyIds, 
  onToggleSave, 
  onShowToast 
}) => {
  const property = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];
  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];

  // Gallery Active Image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(property.price);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Tour Booking State
  const [tourType, setTourType] = useState('In-Person');
  const [tourDate, setTourDate] = useState('2026-10-15');
  const [tourTime, setTourTime] = useState('11:00 AM');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');

  // Agent Quick Message State
  const [agentMessage, setAgentMessage] = useState(`Hi ${agent.name}, I'm interested in viewing ${property.title} located at ${property.address}. Please send more details.`);

  // Mortgage Calculation Logic
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyPrincipalInterest = loanAmount > 0
    ? (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths))) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
    : 0;

  const monthlyTaxes = property.propertyTax ? Math.round(property.propertyTax / 12) : 650;
  const monthlyInsurance = Math.round((homePrice * 0.0035) / 12);
  const monthlyHOA = property.hoaFee || 0;
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance + monthlyHOA);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('Property link copied to clipboard!');
    } else {
      onShowToast('Link ready to share!');
    }
  };

  const handleBookTour = (e) => {
    e.preventDefault();
    if (!visitorName || !visitorEmail) {
      onShowToast('Please provide your name and email to confirm the tour.', 'error');
      return;
    }
    onShowToast(`Tour booked for ${visitorName} on ${tourDate} at ${tourTime}! ${agent.name} has been notified.`);
    setVisitorName('');
    setVisitorPhone('');
    setVisitorEmail('');
  };

  const handleSendAgentMessage = (e) => {
    e.preventDefault();
    if (!agentMessage.trim()) return;
    onShowToast(`Your inquiry has been dispatched directly to ${agent.name}.`);
    setAgentMessage('');
  };

  const isSaved = savedPropertyIds.includes(property.id);

  // Similar properties
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.type === property.type || p.city === property.city)
  ).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          <div className="flex justify-between items-center text-white">
            <span className="text-sm font-semibold">
              Photo {activeImageIndex + 1} of {property.images.length} - {property.title}
            </span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center py-4">
            <img
              src={property.images[activeImageIndex]}
              alt=""
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {property.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                onClick={() => setActiveImageIndex(idx)}
                className={`w-16 h-12 object-cover rounded-lg cursor-pointer transition-all ${
                  activeImageIndex === idx ? 'ring-2 ring-brand-500 scale-105' : 'opacity-50 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Bar */}
        <div className="flex items-center justify-between pb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors"
          >
            <span>← Back to Properties</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                isSaved
                  ? 'border-rose-300 bg-rose-50 text-rose-600'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-rose-200 hover:text-rose-600'
              }`}
            >
              <HeartIcon className="w-4 h-4" filled={isSaved} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-slate-300 text-xs font-semibold transition-all"
            >
              <ShareIcon className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Header Title & Pricing Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-600 text-white">
                {property.status}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
                {property.type}
              </span>
              {property.featured && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-gold-500 text-white">
                  Featured Landmark
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5">
              <MapPinIcon className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight">
              {property.priceFormatted}
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Est. ${Math.round(property.price / property.sqft).toLocaleString()} / sq.ft • Title Verified
            </p>
          </div>
        </div>

        {/* Dynamic Image Gallery */}
        <div className="space-y-3 mb-10">
          <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-lg bg-slate-900">
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-5 right-5 px-4 py-2 bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
            >
              <span>View All {property.images.length} Photos</span>
            </button>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {property.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`h-20 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                  activeImageIndex === idx ? 'border-brand-600 ring-2 ring-brand-500/30' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Key Specs Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="border-r border-slate-100 last:border-none">
              <div className="flex items-center justify-center text-brand-600 mb-1">
                <BedIcon className="w-5 h-5" />
              </div>
              <p className="text-xl font-extrabold text-slate-900">{property.beds}</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Bedrooms</p>
            </div>

            <div className="border-r border-slate-100 last:border-none">
              <div className="flex items-center justify-center text-brand-600 mb-1">
                <BathIcon className="w-5 h-5" />
              </div>
              <p className="text-xl font-extrabold text-slate-900">{property.baths}</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Bathrooms</p>
            </div>

            <div className="border-r border-slate-100 last:border-none">
              <div className="flex items-center justify-center text-brand-600 mb-1">
                <SqftIcon className="w-5 h-5" />
              </div>
              <p className="text-xl font-extrabold text-slate-900">{property.sqft.toLocaleString()}</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Living Sq.Ft.</p>
            </div>

            <div className="border-r border-slate-100 last:border-none">
              <div className="flex items-center justify-center text-brand-600 mb-1">
                <GarageIcon className="w-5 h-5" />
              </div>
              <p className="text-xl font-extrabold text-slate-900">{property.garage}</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Garage Bays</p>
            </div>

            <div className="border-r border-slate-100 last:border-none">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Year Built</p>
              <p className="text-xl font-extrabold text-slate-900">{property.yearBuilt}</p>
              <p className="text-[10px] text-emerald-600 font-bold">Turnkey Condition</p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Lot Area</p>
              <p className="text-xl font-extrabold text-slate-900">{property.lotSize}</p>
              <p className="text-[10px] text-slate-400 font-semibold">Private Parcel</p>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout (Details & Inquiries) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left 2 Cols: Description, Features, Mortgage, Neighborhood */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                Architectural Overview & Narrative
              </h2>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {property.description}
              </div>
            </div>

            {/* Key Architectural Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                Key Residence Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-1 rounded-full bg-brand-100 text-brand-700 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities & Systems */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                Amenities & Premium Inclusions
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-2.5 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE MORTGAGE CALCULATOR */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <CalculatorIcon className="w-5 h-5 text-brand-600" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Interactive Mortgage Calculator
                </h2>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Estimate monthly obligations based on loan terms, taxes, and insurance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Purchase Price ($ USD)
                    </label>
                    <input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Down Payment ({downPaymentPercent}%)</span>
                      <span className="text-brand-600">${downPaymentAmount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-brand-600 cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Interest Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Loan Term
                      </label>
                      <select
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl cursor-pointer"
                      >
                        <option value={30}>30 Years Fixed</option>
                        <option value={15}>15 Years Fixed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Calculation Output Box */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Estimated Monthly Payment
                    </p>
                    <p className="text-3xl font-extrabold text-brand-400 mt-1">
                      ${totalMonthlyPayment.toLocaleString()} <span className="text-xs text-slate-300 font-normal">/ mo</span>
                    </p>

                    <div className="mt-5 space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between pb-1 border-b border-slate-800">
                        <span>Principal & Interest</span>
                        <span className="font-bold text-white">${Math.round(monthlyPrincipalInterest).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pb-1 border-b border-slate-800">
                        <span>Property Taxes</span>
                        <span className="font-bold text-white">${monthlyTaxes.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pb-1 border-b border-slate-800">
                        <span>Home Insurance</span>
                        <span className="font-bold text-white">${monthlyInsurance.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>HOA Dues</span>
                        <span className="font-bold text-white">${monthlyHOA.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 mt-4">
                    *Estimated calculations for advisory planning. Escrow figures depend on municipal assessment.
                  </p>
                </div>

              </div>
            </div>

            {/* Neighborhood & Walkability */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                Location & Neighborhood Mobility
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl text-center">
                  <p className="text-2xl font-extrabold text-brand-600">{property.walkScore}/100</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Walk Score</p>
                  <p className="text-[11px] text-slate-500">Very Walkable</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl text-center">
                  <p className="text-2xl font-extrabold text-brand-600">{property.transitScore}/100</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Transit Score</p>
                  <p className="text-[11px] text-slate-500">Accessible</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl text-center">
                  <p className="text-2xl font-extrabold text-brand-600">9.8/10</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">School District</p>
                  <p className="text-[11px] text-slate-500">Top Rated</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl text-center">
                  <p className="text-2xl font-extrabold text-brand-600">A+</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Safety Index</p>
                  <p className="text-[11px] text-slate-500">Secure Gated</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Tour Scheduling & Agent Contact Widget */}
          <div className="space-y-6">
            
            {/* Schedule a Tour Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md sticky top-24">
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-brand-600" />
                <h3 className="text-lg font-extrabold text-slate-900">Schedule Private Tour</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Request a dedicated appointment with the listing advisor.
              </p>

              {/* In-Person vs Video Tour */}
              <div className="flex rounded-xl bg-slate-100 p-1 mb-4">
                {['In-Person', 'Video Tour'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTourType(type)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      tourType === type ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleBookTour} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={tourTime}
                    onChange={(e) => setTourTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold border border-slate-200 rounded-xl cursor-pointer outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:30 PM</option>
                    <option>3:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Tour Appointment</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Assigned Agent Box Inside Sidebar */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{agent.name}</h4>
                    <p className="text-[11px] text-brand-600 font-semibold">{agent.title}</p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <StarIcon className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{agent.rating} ({agent.reviewsCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="py-2 px-3 border border-slate-200 rounded-xl text-center text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                  >
                    <PhoneIcon className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="py-2 px-3 border border-slate-200 rounded-xl text-center text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                  >
                    <MailIcon className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>

                {/* Instant message to advisor form */}
                <form onSubmit={handleSendAgentMessage} className="mt-3 space-y-2">
                  <textarea
                    rows={2}
                    value={agentMessage}
                    onChange={(e) => setAgentMessage(e.target.value)}
                    placeholder="Quick question for this agent..."
                    className="w-full p-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-brand-500 resize-none bg-slate-50"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    Send Quick Inquiry
                  </button>
                </form>

                <button
                  type="button"
                  onClick={() => onSelectAgent(agent.id)}
                  className="w-full mt-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  View Advisor Profile & History
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  Recommended For You
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Similar Luxury Residences
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((simProp) => (
                <PropertyCard
                  key={simProp.id}
                  property={simProp}
                  onSelectProperty={onSelectProperty}
                  isSaved={savedPropertyIds.includes(simProp.id)}
                  onToggleSave={onToggleSave}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
