import React, { useState, useEffect, useRef } from 'react';
import '../styles/SearchModal.css';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would perform the search
      console.log('Searching for:', searchQuery);
      // Navigate to search results page
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="search-title">
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <h2 id="search-title" className="search-modal-title">Meklēt</h2>
          <button
            className="search-close-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM17 17l-4-4"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              ref={inputRef}
              type="search"
              className="search-input"
              placeholder="Meklējiet informāciju..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search input"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={handleClear}
                aria-label="Clear search"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          <button type="submit" className="search-submit-btn">
            Meklēt
          </button>
        </form>

        <div className="search-suggestions">
          <h3 className="suggestions-title">Populārās tēmas</h3>
          <div className="suggestions-list">
            <button type="button" className="suggestion-tag" onClick={() => setSearchQuery('Licences')}>
              Licences
            </button>
            <button type="button" className="suggestion-tag" onClick={() => setSearchQuery('Maksājumi')}>
              Maksājumi
            </button>
            <button type="button" className="suggestion-tag" onClick={() => setSearchQuery('Statistika')}>
              Statistika
            </button>
            <button type="button" className="suggestion-tag" onClick={() => setSearchQuery('Euro')}>
              Euro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
