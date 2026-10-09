import React from 'react';
import { CheckIcon, XIcon } from './Icons';

export const ToastNotification = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700/60 animate-fade-in max-w-md">
      <div className={`p-1.5 rounded-full ${toast.type === 'error' ? 'bg-rose-500/20 text-rose-400' : 'bg-brand-500/20 text-brand-400'}`}>
        {toast.type === 'error' ? (
          <XIcon className="w-4 h-4" />
        ) : (
          <CheckIcon className="w-4 h-4" />
        )}
      </div>
      <p className="text-sm font-medium text-slate-100 flex-1">{toast.message}</p>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        aria-label="Close notification"
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
