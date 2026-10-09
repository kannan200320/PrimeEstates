import React, { useState, useMemo, useEffect } from 'react';
import { 
  SearchIcon, 
  FilterIcon, 
  XIcon, 
  MapPinIcon, 
  ChevronDownIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PROPERTIES } from '../data/realEstateData';

export const PropertiesPage = ({ 
  initialFilters = {}, 
  onSelectProperty, 
  savedPropertyIds, 
  onToggleSave 
}) => {
  // Filter States
  const [keyword, setKeyword] = useState(initialFilters.keyword || '');
  const [status, setStatus] = useState(initialFilters.status || 'All');
  const [propertyType, setPropertyType] = useState(initialFilters.type || 'All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('All');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync initialFilters if navigated with new state
  useEffect(() => {
    if (initialFilters.keyword !== undefined) setKeyword(initialFilters.keyword);
    if (initialFilters.status !== undefined) setStatus(initialFilters.status);
    if (initialFilters.type !== undefined) setPropertyType(initialFilters.type);
    if (initialFilters.priceRange) {
      if (initialFilters.priceRange === 'under-2m') {
        setMinPrice('');
        setMaxPrice('2000000');
      } else if (initialFilters.priceRange === '2m-5m') {
        setMinPrice('2000000');
        setMaxPrice('5000000');
      } else if (initialFilters.priceRange === '5m-10m') {
        setMinPrice('5000000');
        setMaxPrice('10000000');
      } else if (initialFilters.priceRange === 'above-10m') {
        setMinPrice('10000000');
        setMaxPrice('');
      }
    }
  }, [initialFilters]);

  const allAmenitiesList = [
    'Swimming Pool',
    'Ocean View',
    'Smart Home',
    'Wine Cellar',
    'Home Theater',
    'Gym',
    'Garden',
    'Fireplace',
    'Elevator',
    'EV Charger',
    'Balcony'
  ];

  const handleToggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleResetFilters = () => {
    setKeyword('');
    setStatus('All');
    setPropertyType('All');
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('All');
    setSelectedAmenities([]);
    setSortBy('featured');
  };

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Keyword filter
      if (keyword.trim()) {
        const q = keyword.toLowerCase().trim();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesCity = prop.city.toLowerCase().includes(q);
        const matchesState = prop.state.toLowerCase().includes(q);
        const matchesAddress = prop.address.toLowerCase().includes(q);
        const matchesTagline = prop.tagline.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCity && !matchesState && !matchesAddress && !matchesTagline) {
          return false;
        }
      }

      // Status filter
      if (status !== 'All' && prop.status !== status) {
        return false;
      }

      // Property type filter
      if (propertyType !== 'All' && prop.type.toLowerCase() !== propertyType.toLowerCase()) {
        return false;
      }

      // Price filters
      if (minPrice && prop.price < Number(minPrice)) {
        return false;
      }
      if (maxPrice && prop.price > Number(maxPrice)) {
        return false;
      }

      // Beds filter
      if (minBeds !== 'All' && prop.beds < Number(minBeds)) {
        return false;
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) => 
          prop.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'beds-desc') return b.beds - a.beds;
      if (sortBy === 'sqft-desc') return b.sqft - a.sqft;
      // Default: featured first, then id
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [keyword, status, propertyType, minPrice, maxPrice, minBeds, selectedAmenities, sortBy]);

  const activeFiltersCount = 
    (keyword ? 1 : 0) +
    (status !== 'All' ? 1 : 0) +
    (propertyType !== 'All' ? 1 : 0) +
    (minPrice || maxPrice ? 1 : 0) +
    (minBeds !== 'All' ? 1 : 0) +
    selectedAmenities.length;

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated Real Estate Collection
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Browse through {PROPERTIES.length} verified luxury residences, penthouses, and architectural estates.
          </p>
        </div>

        {/* Search & Top Action Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Keyword Search Bar */}
          <div className="relative w-full md:w-96">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by city, address, or keyword..."
              className="w-full pl-10 pr-9 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            {keyword && (
              <button
                onClick={() => setKeyword('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <XIcon className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Status Quick Pills */}
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-slate-100 p-1 rounded-xl">
            {['All', 'For Sale', 'For Rent'].map((st) => (
              <button
                key={st}
                onClick={() => setStatus(st)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  status === st
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Right Controls: Sort & Grid/List view */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl bg-slate-50 text-slate-700"
            >
              <FilterIcon className="w-4 h-4 text-brand-600" />
              <span>Filters ({activeFiltersCount})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 hidden sm:inline-block font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="beds-desc">Most Bedrooms</option>
                <option value="sqft-desc">Largest Area</option>
              </select>
            </div>
          </div>

        </div>

        {/* Main Content Layout (Sidebar + Results) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* FILTER SIDEBAR (Desktop & Mobile Drawer) */}
          <aside className={`lg:col-span-1 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6 sticky top-28">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4 text-brand-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </h3>
                </div>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Property Type
                </label>
                <div className="space-y-1.5">
                  {['All', 'Villa', 'Penthouse', 'House', 'Apartment', 'Townhouse', 'Studio'].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                      <input
                        type="radio"
                        name="propType"
                        checked={propertyType === type}
                        onChange={() => setPropertyType(type)}
                        className="text-brand-600 focus:ring-brand-500 rounded-full"
                      />
                      <span>{type === 'All' ? 'All Types' : type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Bedrooms
                </label>
                <div className="flex gap-1.5">
                  {['All', '1', '2', '3', '4', '5'].map((beds) => (
                    <button
                      key={beds}
                      type="button"
                      onClick={() => setMinBeds(beds)}
                      className={`flex-1 py-1 text-xs font-semibold rounded-lg border transition-all ${
                        minBeds === beds
                          ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {beds === 'All' ? 'Any' : `${beds}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities Multi-Checklist */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Amenities & Features
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {allAmenitiesList.map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleToggleAmenity(amenity)}
                        className="rounded text-brand-600 focus:ring-brand-500"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Close Button */}
              <div className="lg:hidden pt-4 border-t border-slate-100">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-2 bg-brand-600 text-white font-bold text-xs rounded-xl"
                >
                  Apply Filters ({filteredProperties.length} Results)
                </button>
              </div>

            </div>
          </aside>

          {/* PROPERTY RESULTS GRID / LIST */}
          <main className="lg:col-span-3">
            
            {/* Results Count & Active Tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="text-sm font-semibold text-slate-700">
                Showing <span className="text-brand-600 font-bold">{filteredProperties.length}</span> of {PROPERTIES.length} luxury residences
              </p>

              {/* Active Filter Chips */}
              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  {keyword && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium">
                      Keyword: "{keyword}"
                      <button onClick={() => setKeyword('')}><XIcon className="w-3 h-3" /></button>
                    </span>
                  )}
                  {status !== 'All' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium">
                      Status: {status}
                      <button onClick={() => setStatus('All')}><XIcon className="w-3 h-3" /></button>
                    </span>
                  )}
                  {propertyType !== 'All' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium">
                      Type: {propertyType}
                      <button onClick={() => setPropertyType('All')}><XIcon className="w-3 h-3" /></button>
                    </span>
                  )}
                  {selectedAmenities.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium">
                      {a}
                      <button onClick={() => handleToggleAmenity(a)}><XIcon className="w-3 h-3" /></button>
                    </span>
                  ))}
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-slate-500 hover:text-rose-600 underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Results Output */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onSelectProperty={onSelectProperty}
                    isSaved={savedPropertyIds.includes(property.id)}
                    onToggleSave={onToggleSave}
                  />
                ))}
              </div>
            ) : (
              /* Empty Results State */
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 mx-auto flex items-center justify-center mb-4">
                  <SearchIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No properties match your criteria</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
                  We couldn't find any homes matching your selected filters. Try broadening your price range, reducing amenities, or resetting filters.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
