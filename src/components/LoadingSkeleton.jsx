import React from 'react';
import '../styles/LoadingSkeleton.css';

export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-icon"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
      <div className="skeleton-link"></div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 6 }) => {
  return (
    <section className="licensing-grid">
      <div className="grid-container">
        <div className="items-grid col-3">
          {Array.from({ length: count }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonGrid;
