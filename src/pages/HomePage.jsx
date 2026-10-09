import React, { useState } from 'react';
import { 
  AwardIcon, 
  ArrowRightIcon, 
  CheckIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PROPERTIES } from '../data/realEstateData';

export const HomePage = ({ 
  onNavigate, 
  onSelectProperty, 
  onSelectAgent, 
  savedPropertyIds, 
  onToggleSave 
}) => {
  // Featured properties filter tab
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFeatured = PROPERTIES.filter((prop) => {
    if (activeCategory === 'All') return prop.featured;
    return prop.type.toLowerCase() === activeCategory.toLowerCase();
  }).slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[620px] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Architectural Estate"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse transition-opacity duration-1000"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/80 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Discover Your Extraordinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Sanctuary</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The premier portfolio of bespoke waterfront residences, skyline penthouses, and private architectural estates across prime international markets.
          </p>

          {/* Hero Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('properties')}
              className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-brand-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All Residences</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-xl backdrop-blur-md transition-all cursor-pointer"
            >
              Private Consultation
            </button>
          </div>

        </div>
      </section>

      {/* 2. FEATURED PROPERTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
              <AwardIcon className="w-4 h-4" />
              <span>Exclusive Portfolio</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Luxury Properties
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Hand-picked architectural estates representing the finest craftsmanship and prime locations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
            {['All', 'Villa', 'Penthouse', 'House'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Featured' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatured.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelectProperty={onSelectProperty}
              isSaved={savedPropertyIds.includes(property.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('properties')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>View All Available Properties ({PROPERTIES.length})</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. WHY CHOOSE PRIMEESTATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
              The PrimeEstates Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Why Discerning Buyers & Investors Choose Us
            </h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              We redefine real estate advisory by blending bespoke client representation with state-of-the-art technological convenience, ensuring your privacy and capital are always protected.
            </p>

            <div className="space-y-4 mt-8">
              {[
                {
                  title: '100% Verified Legal Titles',
                  desc: 'Every property goes through a rigorous multi-tier audit to ensure clean titles, clear zoning, and zero liens.'
                },
                {
                  title: 'Discreet Private Representation',
                  desc: 'Confidential negotiation by seasoned luxury brokers experienced with high-profile acquisitions.'
                },
                {
                  title: 'Direct Private Concierge & Tour Scheduling',
                  desc: 'Seamlessly schedule private in-person or live video tours with instant broker confirmations.'
                },
                {
                  title: 'Off-Market Pocket Listings',
                  desc: 'Access exclusive off-market listings not published on public MLS boards.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover:border-brand-200 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Composition (Clean without floating escrow badge) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Prime Architectural Residence"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
