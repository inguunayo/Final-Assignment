import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ title, description }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="breadcrumb">
          <a href="/">Sākums</a>
          <span className="separator">/</span>
          <a href="/darbibas-jomas">Darbības jomas</a>
          <span className="separator">/</span>
          <span className="current">{title}</span>
        </div>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
