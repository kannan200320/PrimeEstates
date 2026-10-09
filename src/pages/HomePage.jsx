import React, { useState } from 'react';
import { 
  SearchIcon, 
  MapPinIcon, 
  HomeIcon, 
  ShieldCheckIcon, 
  AwardIcon, 
  StarIcon, 
  ArrowRightIcon, 
  CheckIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { AgentCard } from '../components/agents/AgentCard';
import { PROPERTIES, AGENTS, CITIES, TESTIMONIALS } from '../data/realEstateData';

export const HomePage = ({ 
  onNavigate, 
  onSelectProperty, 
  onSelectAgent, 
  savedPropertyIds, 
  onToggleSave 
}) => {
  // Hero search bar state
  const [searchStatus, setSearchStatus] = useState('For Sale');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchType, setSearchType] = useState('All');
  const [searchPriceRange, setSearchPriceRange] = useState('All');

  // Featured properties filter tab
  const [activeCategory, setActiveCategory] = useState('All');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    onNavigate('properties', {
      keyword: searchKeyword,
      status: searchStatus,
      type: searchType,
      priceRange: searchPriceRange
    });
  };

  const filteredFeatured = PROPERTIES.filter((prop) => {
    if (activeCategory === 'All') return prop.featured;
    return prop.type.toLowerCase() === activeCategory.toLowerCase();
  }).slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center justify-center bg-slate-950 overflow-hidden">
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
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
            Curated Architectural Living
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Discover Your Extraordinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Sanctuary</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The premier portfolio of bespoke waterfront residences, skyline penthouses, and private architectural estates across prime international markets.
          </p>

          {/* Search Box Card */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-xl p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/20 text-left">
            
            {/* Status Tabs */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
              {['For Sale', 'For Rent'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSearchStatus(status)}
                  className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                    searchStatus === status
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {status}
                </button>
              ))}
              <span className="text-xs text-slate-400 ml-auto hidden sm:inline-block font-medium">
                100% Verified Escrow
              </span>
            </div>

            {/* Input Controls Grid */}
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              {/* Location Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Location or Keyword
                </label>
                <div className="relative">
                  <MapPinIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Malibu, New York, Miami..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Property Type Dropdown */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Property Type
                </label>
                <div className="relative">
                  <HomeIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                  >
                    <option value="All">All Property Types</option>
                    <option value="Villa">Luxury Villa</option>
                    <option value="Penthouse">Skyline Penthouse</option>
                    <option value="House">Modern House</option>
                    <option value="Apartment">Apartment & Condo</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
              </div>

              {/* Price Range Dropdown */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Price Range
                </label>
                <select
                  value={searchPriceRange}
                  onChange={(e) => setSearchPriceRange(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                >
                  <option value="All">Any Price</option>
                  <option value="under-2m">Under $2,000,000</option>
                  <option value="2m-5m">$2,000,000 - $5,000,000</option>
                  <option value="5m-10m">$5,000,000 - $10,000,000</option>
                  <option value="above-10m">$10,000,000+</option>
                </select>
              </div>

              {/* Search Submit Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <SearchIcon className="w-4 h-4" />
                  <span>Search Properties</span>
                </button>
              </div>

            </form>
          </div>

          {/* Quick Metrics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            <div>
              <p className="text-3xl font-extrabold text-white tracking-tight">$2.4B+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Sales Volume</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white tracking-tight">4,500+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Properties Sold</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-400 tracking-tight">99.4%</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white tracking-tight">15+ Yrs</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Luxury Experience</p>
            </div>
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
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>View All Available Properties ({PROPERTIES.length})</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. EXPLORE BY DESTINATION / CITIES */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
              Coveted Metropolises
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Explore by Premier Destinations
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              From waterfront retreats in Miami and Malibu to architectural lofts in Manhattan and Austin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <div
                key={city.name}
                onClick={() => onNavigate('properties', { keyword: city.name })}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {city.name}, {city.state}
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">
                        {city.propertiesCount}
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg text-emerald-300">
                      Avg {city.avgPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE PRIMEESTATES */}
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

          {/* Right Image Composition */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Prime Architectural Residence"
                className="w-full h-[460px] object-cover"
              />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Escrow Protection</p>
                  <p className="text-[11px] text-slate-500">Institutional grade security & closing standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP PERFORMING AGENTS SPOTLIGHT */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-brand-400 text-xs font-bold uppercase tracking-wider">
                Licensed Advisory Team
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                Meet Our Elite Real Estate Advisors
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Distinguished realtors dedicated to white-glove advisory and record-breaking transactions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('agents')}
              className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1.5"
            >
              <span>View All Advisors</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onSelectAgent={onSelectAgent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-600 text-xs font-bold uppercase tracking-wider">
            Verified Experiences
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Trusted by Leaders & Visionaries
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Read firsthand accounts from our esteemed buyers and sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">{item.role}</p>
                  <p className="text-[10px] font-semibold text-brand-600 mt-0.5">{item.property}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-800 via-brand-700 to-emerald-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">
              Begin Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
              Ready to Discover Your Next Sanctuary or Value Your Home?
            </h2>
            <p className="text-emerald-100 text-sm mt-3 leading-relaxed">
              Connect with an elite advisor today for a confidential portfolio review, private property tour, or custom comparative market valuation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('properties')}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-brand-800 font-bold text-xs rounded-xl shadow-lg transition-all"
              >
                Browse Listings
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-brand-900/40 hover:bg-brand-900/60 border border-white/20 text-white font-bold text-xs rounded-xl transition-all"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
