import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LicensingGrid from './components/LicensingGrid';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SkeletonGrid from './components/LoadingSkeleton';
import './styles/global.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [licensingItems, setLicensingItems] = useState([]);

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setLicensingItems([
        {
          title: 'Kredītiestādes',
          description: 'Informācija par kredītiestāžu licencēšanas procesu, prasībām un kārtību.',
          link: '/licencesana/kreditiestades',
          icon: '/assets/icons/bank.svg'
        },
        {
          title: 'Maksājumu iestādes',
          description: 'Maksājumu iestāžu licencēšana un uzraudzība saskaņā ar spēkā esošajiem tiesību aktiem.',
          link: '/licencesana/maksajumu-iestades',
          icon: '/assets/icons/payment.svg'
        },
        {
          title: 'Elektroniskās naudas iestādes',
          description: 'Elektroniskās naudas iestāžu reģistrācija un darbības uzraudzība.',
          link: '/licencesana/elektroniskas-naudas-iestades',
          icon: '/assets/icons/emoney.svg'
        },
        {
          title: 'Ieguldījumu pārvaldes sabiedrības',
          description: 'Licencēšanas prasības ieguldījumu pārvaldes sabiedrībām.',
          link: '/licencesana/ieguldijumu-parvaldibas',
          icon: '/assets/icons/investment.svg'
        },
        {
          title: 'Kredītu reģistrs',
          description: 'Informācija par kredītu reģistra dalībniekiem un to pienākumiem.',
          link: '/licencesana/kreditu-registrs',
          icon: '/assets/icons/register.svg'
        },
        {
          title: 'Finanšu instrumentu tirgus',
          description: 'Finanšu instrumentu tirgus dalībnieku licencēšana un uzraudzība.',
          link: '/licencesana/finansu-instrumentu-tirgus',
          icon: '/assets/icons/market.svg'
        }
      ]);

      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection
        title="Licencēšana"
        description="Latvijas Banka nodrošina finanšu un kapitāla tirgus dalībnieku licencēšanu, uzraudzību un regulējumu, lai garantētu finanšu sistēmas stabilitāti un patērētāju aizsardzību."
      />

      {loading ? (
        <SkeletonGrid count={6} />
      ) : (
        <LicensingGrid items={licensingItems} />
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
