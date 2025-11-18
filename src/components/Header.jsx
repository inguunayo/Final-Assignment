import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="/assets/logo.svg" alt="Latvijas Banka" />
          </a>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="/darbibas-jomas">Darbības jomas</a></li>
            <li><a href="/par-mums">Par mums</a></li>
            <li><a href="/publikacijas">Publikācijas</a></li>
            <li><a href="/statistika">Statistika</a></li>
            <li><a href="/kontakti">Kontakti</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM17 17l-4-4"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="language-switcher">
            <button className="lang-btn active">LV</button>
            <button className="lang-btn">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
