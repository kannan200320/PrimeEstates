import React from 'react';
import { HomeLogoIcon } from './Icons';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <HomeLogoIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Prime<span className="text-brand-400">Estates</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier destination for luxury residential acquisitions, architectural estates, and bespoke advisory services worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties')} className="hover:text-white transition-colors cursor-pointer">
                  All Properties
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('agents')} className="hover:text-white transition-colors cursor-pointer">
                  Licensed Advisors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('saved')} className="hover:text-white transition-colors cursor-pointer">
                  Saved Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('properties', { type: 'Villa' })} className="hover:text-white transition-colors cursor-pointer">
                  Luxury Waterfront Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'Penthouse' })} className="hover:text-white transition-colors cursor-pointer">
                  Skyline Penthouses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'House' })} className="hover:text-white transition-colors cursor-pointer">
                  Architectural Mansions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'Apartment' })} className="hover:text-white transition-colors cursor-pointer">
                  Designer Lofts & Condos
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PrimeEstates Global Realty LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
