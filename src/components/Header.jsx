import React, { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('LV');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.header-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      setSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const switchLanguage = (lang) => {
    setActiveLanguage(lang);
    // In a real app, this would trigger language switching logic
  };

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <header className="header" onKeyDown={handleKeyDown}>
        <div className="header-container">
          <div className="logo">
            <a href="/" aria-label="Latvijas Banka home">
              <img src="/assets/logo.svg" alt="Latvijas Banka" />
            </a>
          </div>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
            <ul className="nav-list">
              <li><a href="/darbibas-jomas">Darbības jomas</a></li>
              <li><a href="/par-mums">Par mums</a></li>
              <li><a href="/publikacijas">Publikācijas</a></li>
              <li><a href="/statistika">Statistika</a></li>
              <li><a href="/kontakti">Kontakti</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="search-btn"
              onClick={toggleSearch}
              aria-label="Open search"
              aria-expanded={searchOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM17 17l-4-4"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="language-switcher" role="group" aria-label="Language selection">
              <button
                className={`lang-btn ${activeLanguage === 'LV' ? 'active' : ''}`}
                onClick={() => switchLanguage('LV')}
                aria-label="Switch to Latvian"
                aria-pressed={activeLanguage === 'LV'}
              >
                LV
              </button>
              <button
                className={`lang-btn ${activeLanguage === 'EN' ? 'active' : ''}`}
                onClick={() => switchLanguage('EN')}
                aria-label="Switch to English"
                aria-pressed={activeLanguage === 'EN'}
              >
                EN
              </button>
            </div>

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
