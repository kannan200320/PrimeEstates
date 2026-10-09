import React, { useState } from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons';

export const Footer = ({ onNavigate, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address', 'error');
      return;
    }
    onShowToast(`Thank you! ${email} has been subscribed to PrimeEstates Private Insights.`);
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-brand-500/20">
                P
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Prime<span className="text-brand-400">Estates</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier destination for luxury residential acquisitions, architectural estates, and bespoke advisory services worldwide.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span>Licensed Brokerage</span>
              </div>
              <span>•</span>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties')} className="hover:text-white transition-colors">
                  All Properties
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('agents')} className="hover:text-white transition-colors">
                  Licensed Advisors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('saved')} className="hover:text-white transition-colors">
                  Saved Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
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
                <button onClick={() => onNavigate('properties', { type: 'Villa' })} className="hover:text-white transition-colors">
                  Luxury Waterfront Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'Penthouse' })} className="hover:text-white transition-colors">
                  Skyline Penthouses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'House' })} className="hover:text-white transition-colors">
                  Architectural Mansions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties', { type: 'Apartment' })} className="hover:text-white transition-colors">
                  Designer Lofts & Condos
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Sign up */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Market Insights</h4>
            <p className="text-xs text-slate-400">
              Subscribe to receive off-market listings and quarterly luxury property reports.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md hover:shadow-brand-500/20"
              >
                Subscribe to Digest
              </button>
            </form>
          </div>

        </div>

        {/* Global Locations & Contact Bar */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 border-b border-slate-900">
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold">Flagship Headquarter</p>
              <p>450 Park Avenue, Suite 2800, New York, NY 10022</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <PhoneIcon className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold">Client Advisory Desk</p>
              <p>+1 (800) 555-REAL (Toll Free)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MailIcon className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold">Private Inquiries</p>
              <p>vip-concierge@primeestates.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PrimeEstates Global Realty LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: PrimeEstates adheres to state and federal licensing regulations.'); }} className="hover:text-slate-400">Terms of Use</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Notice: We respect and safeguard your confidentiality.'); }} className="hover:text-slate-400">Privacy Policy</a>
            <a href="#sitemap" onClick={(e) => { e.preventDefault(); onNavigate('properties'); }} className="hover:text-slate-400">Listings Directory</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
