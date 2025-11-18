import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LicensingGrid from './components/LicensingGrid';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  // Sample data for licensing categories
  const licensingItems = [
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
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection
        title="Licencēšana"
        description="Latvijas Banka nodrošina finanšu un kapitāla tirgus dalībnieku licencēšanu, uzraudzību un regulējumu, lai garantētu finanšu sistēmas stabilitāti un patērētāju aizsardzību."
      />
      <LicensingGrid items={licensingItems} />
      <Footer />
    </div>
  );
};

export default App;
