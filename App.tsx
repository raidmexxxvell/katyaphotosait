import React, { Suspense } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { LoadingFallback } from './components/LoadingFallback';

const Home = React.lazy(() => import('./components/Home'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const PriceList = React.lazy(() => import('./components/PriceList'));
const Presets = React.lazy(() => import('./components/Presets'));
const Contact = React.lazy(() => import('./components/Contact'));
const ZhenskiePortrety = React.lazy(() => import('./components/ZhenskiePortrety'));
const MuzhskiePortrety = React.lazy(() => import('./components/MuzhskiePortrety'));
const Terms = React.lazy(() => import('./components/Terms'));
const DataConsent = React.lazy(() => import('./components/DataConsent'));
const Offer = React.lazy(() => import('./components/Offer'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));

const Layout: React.FC = () => {
  const location = useLocation();
  // Don't add padding on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-brand-dark text-brand-light font-sans tracking-wide leading-relaxed">
      <Header />
      <main className={isHomePage ? '' : 'pt-24 md:pt-32'}>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
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