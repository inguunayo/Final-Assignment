import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ title, description }) => {
  return (
    <section className="hero-section" id="main-content">
      <div className="hero-container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumb-list">
            <li>
              <a href="/">Sākums</a>
            </li>
            <li>
              <span className="separator" aria-hidden="true">/</span>
              <a href="/darbibas-jomas">Darbības jomas</a>
            </li>
            <li>
              <span className="separator" aria-hidden="true">/</span>
              <span className="current" aria-current="page">{title}</span>
            </li>
          </ol>
        </nav>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
