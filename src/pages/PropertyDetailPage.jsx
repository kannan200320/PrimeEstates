import React, { useState } from 'react';
import { 
  BedIcon, 
  BathIcon, 
  SqftIcon, 
  GarageIcon, 
  MapPinIcon, 
  HeartIcon, 
  ShareIcon, 
  XIcon 
} from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PROPERTIES } from '../data/realEstateData';

export const PropertyDetailPage = ({ 
  propertyId, 
  onBack, 
  onSelectProperty, 
  savedPropertyIds, 
  onToggleSave, 
  onShowToast 
}) => {
  const property = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];

  // Gallery Active Image (Exactly 3 images)
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Property link copied to clipboard!');
    } else if (onShowToast) {
      onShowToast('Link ready to share!');
    }
  };

  const isSaved = savedPropertyIds.includes(property.id);

  // Similar properties
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.type === property.type || p.city === property.city)
  ).slice(0, 3);

  // Strictly 3 images per user requirement
  const galleryImages = (property.images || []).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          <div className="flex justify-between items-center text-white">
            <span className="text-sm font-semibold">
              Photo {activeImageIndex + 1} of {galleryImages.length} - {property.title}
            </span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center py-4">
            <img
              src={galleryImages[activeImageIndex]}
              alt=""
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex justify-center gap-3 overflow-x-auto py-2">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                onClick={() => setActiveImageIndex(idx)}
                className={`w-20 h-14 object-cover rounded-xl cursor-pointer transition-all ${
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
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-slate-300 text-xs font-semibold transition-all cursor-pointer"
            >
              <ShareIcon className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Header Title & Pricing Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                property.status === 'For Sale' ? 'bg-brand-100 text-brand-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {property.status}
              </span>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-md">
                {property.type}
              </span>
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
              Est. ${Math.round(property.price / property.sqft).toLocaleString()} / sq.ft • Verified Title
            </p>
          </div>
        </div>

        {/* Dynamic Image Gallery - Exactly 3 Images */}
        <div className="space-y-3 mb-10">
          <div className="relative h-64 sm:h-[440px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-slate-900">
            <img
              src={galleryImages[activeImageIndex] || galleryImages[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View All 3 Photos</span>
            </button>
          </div>

          {/* Exactly 3 Thumbnails Row */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`h-20 sm:h-28 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                  activeImageIndex === idx ? 'border-brand-600 ring-2 ring-brand-500/30 scale-[1.01]' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Key Specs Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
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
              <p className="text-[10px] text-blue-600 font-bold">Turnkey Condition</p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Lot Area</p>
              <p className="text-xl font-extrabold text-slate-900">{property.lotSize}</p>
              <p className="text-[10px] text-slate-400 font-semibold">Private Parcel</p>
            </div>
          </div>
        </div>

        {/* Comprehensive Property Details Content (Clean Full-Width Architectural Showcase) */}
        <div className="space-y-8">
          
          {/* Description / Architectural Narrative */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">
              Architectural Overview & Narrative
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {property.description}
            </div>
          </div>

          {/* Amenities & Premium Inclusions */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">
              Amenities & Premium Inclusions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Specifications Summary */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">
              Property Information & Facts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Property Type</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.type}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status</p>
                <p className="text-sm font-bold text-blue-600 mt-0.5">{property.status}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Year Built</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.yearBuilt}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Living Area</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.sqft.toLocaleString()} Sq.Ft.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Lot Size</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.lotSize}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Garages</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.garage} Vehicle Bays</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Price / Sq.Ft.</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">${Math.round(property.price / property.sqft).toLocaleString()}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{property.city}, {property.state}</p>
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
