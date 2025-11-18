import React from 'react';
import LicensingCard from './LicensingCard';
import '../styles/LicensingGrid.css';

const LicensingGrid = ({ items }) => {
  return (
    <section className="licensing-grid">
      <div className="grid-container">
        <div className="items-grid col-3">
          {items.map((item, index) => (
            <LicensingCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensingGrid;
