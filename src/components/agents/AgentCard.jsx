import React from 'react';
import { StarIcon, PhoneIcon, MailIcon, AwardIcon } from '../common/Icons';

export const AgentCard = ({ agent, onSelectAgent }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Cover & Avatar Header */}
        <div className="relative h-28 bg-slate-800 overflow-hidden">
          <img 
            src={agent.coverImage} 
            alt="" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-400 border border-slate-700">
            Verified Broker
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-6 pt-0 pb-4 relative">
          <div className="flex justify-between items-end -mt-12 mb-3">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-md"
            />
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-lg">
              <StarIcon className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-extrabold text-slate-800">{agent.rating}</span>
              <span className="text-[10px] text-slate-500">({agent.reviewsCount})</span>
            </div>
          </div>

          <h3 
            onClick={() => onSelectAgent(agent.id)}
            className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer"
          >
            {agent.name}
          </h3>
          <p className="text-xs text-brand-600 font-medium">{agent.title}</p>
          <p className="text-xs text-slate-500 mt-0.5">{agent.specialty}</p>

          <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {agent.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-2 mt-4 p-2.5 bg-slate-50 rounded-xl text-center">
            <div>
              <p className="text-sm font-extrabold text-slate-900">{agent.salesVolume}</p>
              <p className="text-[10px] uppercase font-semibold text-slate-400">Career Volume</p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-brand-600">{agent.activeListingsCount} Active</p>
              <p className="text-[10px] uppercase font-semibold text-slate-400">Listings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact Actions */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center gap-2">
        <a
          href={`tel:${agent.phone}`}
          className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors"
          title={`Call ${agent.phone}`}
        >
          <PhoneIcon className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors"
          title={`Email ${agent.email}`}
        >
          <MailIcon className="w-4 h-4" />
        </a>
        <button
          onClick={() => onSelectAgent(agent.id)}
          className="flex-1 py-2 text-xs font-bold bg-slate-900 hover:bg-brand-600 text-white rounded-xl transition-all shadow-xs"
        >
          View Profile & Listings
        </button>
      </div>
    </div>
  );
};
