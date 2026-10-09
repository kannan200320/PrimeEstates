import React, { useState } from 'react';
import { 
  StarIcon, 
  PhoneIcon, 
  MailIcon, 
  AwardIcon, 
  CheckIcon, 
  MapPinIcon, 
  ArrowRightIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { AGENTS, PROPERTIES } from '../data/realEstateData';

export const AgentDetailPage = ({ 
  agentId, 
  onBack, 
  onSelectProperty, 
  savedPropertyIds, 
  onToggleSave, 
  onShowToast 
}) => {
  const agent = AGENTS.find((a) => a.id === agentId) || AGENTS[0];
  const agentListings = PROPERTIES.filter((p) => p.agentId === agent.id);

  // Direct Inquiry Form
  const [inquirerName, setInquirerName] = useState('');
  const [inquirerEmail, setInquirerEmail] = useState('');
  const [inquirerPhone, setInquirerPhone] = useState('');
  const [inquirerType, setInquirerType] = useState('Buying');
  const [inquirerMsg, setInquirerMsg] = useState(`Hello ${agent.name}, I would like to schedule an advisory consultation regarding luxury properties in your portfolio.`);

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    if (!inquirerName || !inquirerEmail) {
      onShowToast('Please provide your name and email address.', 'error');
      return;
    }
    onShowToast(`Consultation request sent to ${agent.name}! You will receive a direct response shortly.`);
    setInquirerName('');
    setInquirerEmail('');
    setInquirerPhone('');
    setInquirerMsg('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors"
          >
            <span>← Back to Advisors</span>
          </button>
        </div>

        {/* Cover & Profile Header Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm mb-10">
          
          {/* Cover Photo */}
          <div className="h-56 sm:h-72 w-full relative bg-slate-900">
            <img
              src={agent.coverImage}
              alt=""
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
              {agent.license}
            </div>
          </div>

          {/* Profile Overview Bar */}
          <div className="px-6 sm:px-10 pb-8 pt-0 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-16 sm:-mt-20 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-28 sm:w-36 h-28 sm:h-36 rounded-3xl object-cover ring-4 ring-white shadow-xl bg-white"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {agent.name}
                    </h1>
                    <span className="p-1 rounded-full bg-brand-100 text-brand-700">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-brand-600 mt-0.5">{agent.title}</p>
                  <p className="text-xs text-slate-500">{agent.specialty}</p>
                </div>
              </div>

              {/* Rating & Action buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-slate-500" />
                  <span>{agent.phone}</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Email Advisor</span>
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">{agent.salesVolume}</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Total Volume</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-600">{agent.rating}</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Rating ({agent.reviewsCount} Reviews)</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">{agent.experience}</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-600">{agentListings.length}</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-0.5">Active Listings</p>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Column Details: Bio & Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          
          {/* Left 2 Cols: Biography, Languages, Awards */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                About {agent.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                {agent.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Languages Spoken
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.languages.map((lang) => (
                      <span key={lang} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Broker Credential
                  </h4>
                  <p className="text-xs font-semibold text-slate-800">{agent.license}</p>
                  <p className="text-[11px] text-blue-600 font-medium">Active & Standing with Department of Real Estate</p>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <AwardIcon className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-extrabold text-slate-900">Awards & Honors</h3>
              </div>
              <div className="space-y-2.5">
                {agent.awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-semibold text-slate-800">{award}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Col: Contact & Consultation Request */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md sticky top-24">
              <h3 className="text-lg font-extrabold text-slate-900">Consult with {agent.name.split(' ')[0]}</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Schedule a confidential conversation regarding luxury acquisitions or home valuations.
              </p>

              <form onSubmit={handleConsultationSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">Inquiry Purpose</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Buying', 'Selling'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquirerType(type)}
                        className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          inquirerType === type
                            ? 'border-brand-600 bg-brand-50 text-brand-700'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={inquirerName}
                    onChange={(e) => setInquirerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={inquirerEmail}
                    onChange={(e) => setInquirerEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={inquirerPhone}
                    onChange={(e) => setInquirerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Describe your property interests..."
                    value={inquirerMsg}
                    onChange={(e) => setInquirerMsg(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Advisory Request</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Agent's Active Listings */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                Exclusive Inventory
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Active Listings by {agent.name} ({agentListings.length})
              </h2>
            </div>
          </div>

          {agentListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentListings.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onSelectProperty={onSelectProperty}
                  isSaved={savedPropertyIds.includes(prop.id)}
                  onToggleSave={onToggleSave}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-white rounded-2xl text-center border border-slate-200 text-xs text-slate-500">
              No active public listings at this moment. Off-market pocket listings available upon direct consultation.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
