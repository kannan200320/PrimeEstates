import React, { useState } from 'react';
import { HomeLogoIcon } from '../components/common/Icons';

export const AuthPage = ({ initialMode = 'login', onAuthSuccess, onNavigate }) => {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setResetSent(false);

    if (mode === 'register') {
      // Name validation: must be greater than 2 letters
      if (!name || name.trim().length <= 2) {
        setError('please enter a valid name');
        return;
      }
      if (!email || !email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }
      if (!password || password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      if (!agreeTerms) {
        setError('You must agree to the Terms of Service and Privacy Policy');
        return;
      }

      // Store new registered account in localStorage
      try {
        const stored = localStorage.getItem('pe_registered_users');
        const usersList = stored ? JSON.parse(stored) : [];
        const newUser = {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password,
          role: 'VIP Member',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        };
        const updatedList = [...usersList.filter(u => u.email !== newUser.email), newUser];
        localStorage.setItem('pe_registered_users', JSON.stringify(updatedList));
      } catch (err) {
        console.error(err);
      }

      // "after proper register next move to sigin"
      setMode('login');
      setPassword('');
      setError('');
      setSuccessMessage('Registration successful! Please sign in with your credentials.');
      return;
    }

    // Sign In Mode
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Verify against registered users
    let registeredUsers = [];
    try {
      const stored = localStorage.getItem('pe_registered_users');
      registeredUsers = stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error(err);
    }

    const foundUser = registeredUsers.find(u => u.email === email.trim().toLowerCase());
    if (foundUser && foundUser.password !== password) {
      setError('Incorrect password. Please try again.');
      return;
    }

    // "proper sigin the account should be create"
    const activeUser = foundUser ? {
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role || 'VIP Member',
      avatar: foundUser.avatar
    } : {
      name: email.split('@')[0].replace('.', ' ') || 'VIP Member',
      email: email.trim().toLowerCase(),
      role: 'VIP Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    };

    onAuthSuccess(activeUser);
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-4 flex items-center z-10">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs text-slate-600 hover:text-brand-600 flex items-center gap-1.5 transition-colors font-semibold py-1 px-2.5 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <span>← Back to Home</span>
        </button>
      </div>

      {/* Auth Card (Bright Mode with Blue Branding) */}
      <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 relative z-10">
        
        {/* Card Header with Logo */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-blue-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
            <HomeLogoIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Prime<span className="text-brand-600">Estates</span>
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="text-left mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'login' ? 'Sign In to Your Account' : 'Create New Account'}
          </h1>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            {mode === 'login' 
              ? 'Enter your credentials to access your saved properties and portfolio.'
              : 'Register your buyer or seller membership account today.'}
          </p>
        </div>

        {/* Tab Switcher (Sign In / Register with Blue Buttons) */}
        <div className="grid grid-cols-2 bg-slate-100 p-1 rounded-2xl border border-slate-200 mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); setSuccessMessage(''); setResetSent(false); }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); setSuccessMessage(''); setResetSent(false); }}
            className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Register
          </button>
        </div>

        {/* Inline Error Alert (No Popups!) */}
        {error && (
          <div className="p-3 mb-4 text-xs font-medium bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0"></span>
            <span>{error}</span>
          </div>
        )}

        {/* Inline Success Notice (No Popups!) */}
        {successMessage && (
          <div className="p-3 mb-4 text-xs font-medium bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
            <span>{successMessage}</span>
          </div>
        )}

        {/* Inline Password Reset Info (No Popups!) */}
        {resetSent && (
          <div className="p-3 mb-4 text-xs font-medium bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
            <span>Password reset instructions have been dispatched to your email.</span>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {mode === 'register' && (
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Must be greater than 2 letters"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === 'login' ? 'Enter your password' : 'Minimum 6 characters'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>

          {/* Options: Remember Me / Terms Checkbox */}
          {mode === 'login' ? (
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 accent-brand-600 cursor-pointer"
                />
                <span className="text-[11px] font-medium">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setResetSent(true)}
                className="text-[11px] font-semibold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          ) : (
            <div className="pt-1">
              <label className="flex items-start gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 accent-brand-600 cursor-pointer"
                />
                <span className="text-[11px] font-medium leading-snug">
                  I agree to the <span className="text-brand-600 font-semibold underline">Terms of Service</span> and <span className="text-brand-600 font-semibold underline">Privacy Policy</span>.
                </span>
              </label>
            </div>
          )}

          {/* Primary Action Button (Blue Button) */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-500/20 mt-4 cursor-pointer"
          >
            {mode === 'login' ? 'Sign In' : 'Register Account'}
          </button>

          {/* Switch Tab Link at Bottom */}
          <div className="text-center pt-5">
            {mode === 'login' ? (
              <p className="text-xs text-slate-500">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('register'); setError(''); setSuccessMessage(''); setResetSent(false); }}
                  className="font-bold text-brand-600 hover:text-brand-700 hover:underline transition-colors cursor-pointer"
                >
                  Register here
                </button>
              </p>
            ) : (
              <p className="text-xs text-slate-500">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError(''); setSuccessMessage(''); setResetSent(false); }}
                  className="font-bold text-brand-600 hover:text-brand-700 hover:underline transition-colors cursor-pointer"
                >
                  Log in here
                </button>
              </p>
            )}
          </div>

        </form>

      </div>
    </div>
  );
};
