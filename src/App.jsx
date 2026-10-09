import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AuthPage } from './pages/AuthPage';
import { ToastNotification } from './components/common/ToastNotification';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AgentsPage } from './pages/AgentsPage';
import { AgentDetailPage } from './pages/AgentDetailPage';
import { ContactPage } from './pages/ContactPage';
import { SavedPropertiesPage } from './pages/SavedPropertiesPage';

function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState('prop-1');
  const [selectedAgentId, setSelectedAgentId] = useState('agent-1');
  const [filterParams, setFilterParams] = useState({});

  // Saved / Bookmarked Properties
  const [savedPropertyIds, setSavedPropertyIds] = useState(() => {
    try {
      const saved = localStorage.getItem('pe_saved_properties');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-3'];
    } catch {
      return ['prop-1', 'prop-3'];
    }
  });

  // User Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('pe_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Floating Toast Notifications
  const [toast, setToast] = useState(null);

  // Sync saved favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pe_saved_properties', JSON.stringify(savedPropertyIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedPropertyIds]);

  // Sync user state to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('pe_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('pe_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  // Auto-dismiss toast after 4.5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleNavigate = (page, params = {}) => {
    setFilterParams(params);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (id) => {
    setSelectedPropertyId(id);
    setCurrentPage('property-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAgent = (id) => {
    setSelectedAgentId(id);
    setCurrentPage('agent-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSave = (id) => {
    if (savedPropertyIds.includes(id)) {
      setSavedPropertyIds(savedPropertyIds.filter((item) => item !== id));
      showToast('Property removed from saved portfolio');
    } else {
      setSavedPropertyIds([...savedPropertyIds, id]);
      showToast('Property added to your saved portfolio!');
    }
  };

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* Sticky Global Navigation (Hidden on Sign In / Register page) */}
      {currentPage !== 'auth' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          savedCount={savedPropertyIds.length}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}

      {/* Main Page Content Body */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProperty={handleSelectProperty}
            onSelectAgent={handleSelectAgent}
            savedPropertyIds={savedPropertyIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {currentPage === 'properties' && (
          <PropertiesPage
            initialFilters={filterParams}
            onSelectProperty={handleSelectProperty}
            savedPropertyIds={savedPropertyIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {currentPage === 'property-details' && (
          <PropertyDetailPage
            propertyId={selectedPropertyId}
            onBack={() => handleNavigate('properties')}
            onSelectProperty={handleSelectProperty}
            onSelectAgent={handleSelectAgent}
            savedPropertyIds={savedPropertyIds}
            onToggleSave={handleToggleSave}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'agents' && (
          <AgentsPage
            onSelectAgent={handleSelectAgent}
          />
        )}

        {currentPage === 'agent-details' && (
          <AgentDetailPage
            agentId={selectedAgentId}
            onBack={() => handleNavigate('agents')}
            onSelectProperty={handleSelectProperty}
            savedPropertyIds={savedPropertyIds}
            onToggleSave={handleToggleSave}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onShowToast={showToast}
          />
        )}

        {currentPage === 'saved' && (
          <SavedPropertiesPage
            savedPropertyIds={savedPropertyIds}
            onSelectProperty={handleSelectProperty}
            onToggleSave={handleToggleSave}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'auth' && (
          <AuthPage
            initialMode={filterParams.mode || 'login'}
            onAuthSuccess={handleAuthSuccess}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      {currentPage !== 'auth' && (
        <Footer
          onNavigate={handleNavigate}
          onShowToast={showToast}
        />
      )}

      {/* Interactive Toast Notifications */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
