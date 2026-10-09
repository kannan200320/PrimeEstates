import React from 'react';
import { BedIcon, BathIcon, SqftIcon, MapPinIcon, HeartIcon } from '../common/Icons';

export const PropertyCard = ({ 
  property, 
  onSelectProperty, 
  isSaved = false, 
  onToggleSave,
  viewMode = 'grid' 
}) => {
  const isList = viewMode === 'list';

  return (
    <div 
      className={`group bg-white rounded-2xl overflow-hidden border border-slate-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex ${
        isList ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      {/* Property Image Container */}
      <div className={`relative overflow-hidden ${isList ? 'md:w-5/12 h-64 md:h-auto' : 'h-64'} bg-slate-100`}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md text-white shadow-sm ${
            property.status === 'For Sale' ? 'bg-brand-600/90' : 'bg-blue-600/90'
          }`}>
            {property.status}
          </span>
          {property.featured && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md bg-gold-500/90 text-white shadow-sm">
              Featured
            </span>
          )}
          <span className="text-[11px] font-medium px-2 py-1 rounded-lg backdrop-blur-md bg-slate-900/70 text-slate-200">
            {property.type}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(property.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            isSaved 
              ? 'bg-rose-500 text-white shadow-md' 
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500'
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save property"}
        >
          <HeartIcon className="w-4 h-4" filled={isSaved} />
        </button>

        {/* Price on Image Bottom for Mobile / Grid */}
        <div className="absolute bottom-3 left-3 z-10 text-white">
          <p className="text-2xl font-extrabold tracking-tight drop-shadow-md">
            {property.priceFormatted}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className={`p-5 flex flex-col justify-between flex-1 ${isList ? 'md:p-6' : ''}`}>
        <div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1.5">
            <MapPinIcon className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
            <span className="truncate">{property.address}, {property.city}, {property.state}</span>
          </div>

          <h3 
            onClick={() => onSelectProperty(property.id)}
            className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer line-clamp-1"
          >
            {property.title}
          </h3>

          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specs Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="grid grid-cols-3 gap-2 py-1 text-slate-700 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <BedIcon className="w-4 h-4 text-slate-400" />
              <span>{property.beds} <span className="text-[11px] font-normal text-slate-500">Beds</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <BathIcon className="w-4 h-4 text-slate-400" />
              <span>{property.baths} <span className="text-[11px] font-normal text-slate-500">Baths</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <SqftIcon className="w-4 h-4 text-slate-400" />
              <span>{property.sqft.toLocaleString()} <span className="text-[11px] font-normal text-slate-500">sqft</span></span>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 flex items-center justify-between">
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Verified Title
            </span>
            <button
              onClick={() => onSelectProperty(property.id)}
              className="px-3.5 py-1.5 text-xs font-bold text-brand-700 hover:text-white bg-brand-50 hover:bg-brand-600 rounded-xl transition-all shadow-xs"
            >
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
