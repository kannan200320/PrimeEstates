import React, { useState } from 'react';
import { SearchIcon, StarIcon, AwardIcon } from '../components/common/Icons';
import { AgentCard } from '../components/agents/AgentCard';
import { AGENTS } from '../data/realEstateData';

export const AgentsPage = ({ onSelectAgent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Luxury Waterfront & Penthouses', 'Architectural Modern & Modern Mansions', 'Modern Condominiums & New Developments', 'Historic Estates & Equestrian Specialist'];

  const filteredAgents = AGENTS.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty = selectedSpecialty === 'All' || agent.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>Top 1% Luxury Realtors</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Elite Real Estate Advisors
          </h1>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Every PrimeEstates advisor holds a proven track record in high-value property negotiation, discrete transactions, and architectural curation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search advisor by name or specialty..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline-block">Specialty:</span>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full md:w-auto px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              <option value="All">All Specialties</option>
              {specialties.filter(s => s !== 'All').map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onSelectAgent={onSelectAgent}
            />
          ))}
        </div>

        {/* Advisory Promise Banner */}
        <div className="mt-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900">Looking to Join Our Luxury Brokerage?</h3>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            We are always selectively recruiting top producers with distinguished expertise in high-net-worth clientele and architectural properties.
          </p>
          <a
            href="mailto:careers@primeestates.com"
            className="inline-block mt-4 px-5 py-2.5 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all"
          >
            Inquire Confidential Partnership
          </a>
        </div>

      </div>
    </div>
  );
};
