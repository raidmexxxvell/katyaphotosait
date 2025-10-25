import React from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PriceList from './components/PriceList';
import Presets from './components/Presets';
import Contact from './components/Contact';
import ZhenskiePortrety from './components/ZhenskiePortrety';
import MuzhskiePortrety from './components/MuzhskiePortrety';
import Terms from './components/Terms';
import DataConsent from './components/DataConsent';
import Offer from './components/Offer';
import PrivacyPolicy from './components/PrivacyPolicy';

const Layout: React.FC = () => {
  const location = useLocation();
  // Don't add padding on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-brand-dark text-brand-light font-sans tracking-wide leading-relaxed">
      <Header />
      <main className={isHomePage ? '' : 'pt-24 md:pt-32'}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-moey-fotografii" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="zhenskie-portrety" element={<ZhenskiePortrety />} />
        <Route path="muzhskie-portrety" element={<MuzhskiePortrety />} />
        <Route path="services" element={<PriceList />} />
        <Route path="presety" element={<Presets />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="data-consent" element={<DataConsent />} />
        <Route path="offer" element={<Offer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;