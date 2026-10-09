import React from 'react';
import { HeartIcon, ArrowRightIcon } from '../components/common/Icons';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PROPERTIES } from '../data/realEstateData';

export const SavedPropertiesPage = ({ 
  savedPropertyIds, 
  onSelectProperty, 
  onToggleSave, 
  onNavigate 
}) => {
  const savedProperties = PROPERTIES.filter((p) => savedPropertyIds.includes(p.id));

  const totalValue = savedProperties.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
              <HeartIcon className="w-4 h-4 text-rose-500 fill-rose-500" filled />
              <span>Personal Collection</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Saved Luxury Properties
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              You have {savedProperties.length} bookmarked residences in your private portfolio.
            </p>
          </div>

          {savedProperties.length > 0 && (
            <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-xs">
              <p className="text-[10px] uppercase font-bold text-slate-400">Total Portfolio Value</p>
              <p className="text-xl font-extrabold text-brand-600">
                ${totalValue.toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        {savedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelectProperty={onSelectProperty}
                isSaved={true}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          /* Empty Favorites State */
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200/80 shadow-xs max-w-xl mx-auto my-12">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 mx-auto flex items-center justify-center mb-4">
              <HeartIcon className="w-8 h-8 text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Your saved portfolio is empty</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm mx-auto">
              Tap the heart icon on any estate or penthouse to save and compare residences later.
            </p>
            <button
              onClick={() => onNavigate('properties')}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              <span>Explore All Properties</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
