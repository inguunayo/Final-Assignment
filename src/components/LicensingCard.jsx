import React from 'react';
import '../styles/LicensingCard.css';

const LicensingCard = ({ title, description, link, icon }) => {
  return (
    <article className="licensing-card">
      <div className="card-content">
        {icon && (
          <div className="card-icon" aria-hidden="true">
            <img src={icon} alt="" />
          </div>
        )}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link" aria-label={`Lasīt vairāk par ${title}`}>
          <span>Lasīt vairāk</span>
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default LicensingCard;
