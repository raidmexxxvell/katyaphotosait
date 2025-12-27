import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import TelegramIcon from './icons/TelegramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const navLinks = [
  { path: '/', title: 'Главная' },
  { path: '/portfolio', title: 'Портфолио' },
  { path: '/services', title: 'Стоимость' },
  { path: '/presety', title: 'Пресеты' },
  { path: '/contacts', title: 'Контакты' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-2 bg-brand-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" onClick={handleNavClick} className="text-xl md:text-2xl font-serif font-medium tracking-widest uppercase focus:outline-none transition-colors hover:text-white">
            Katya
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`font-sans uppercase text-sm tracking-wider transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-brand-light after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 ${
                  location.pathname === link.path
                    ? 'text-brand-light after:scale-x-100'
                    : 'text-brand-gray hover:text-brand-light'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-brand-light">
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-dark bg-opacity-95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto p-6 md:p-2 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-brand-light">
            <CloseIcon className="w-8 h-8"/>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={`font-serif text-2xl uppercase tracking-widest py-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              {link.title}
            </Link>
          ))}
          {/* Иконки Telegram и WhatsApp в бургер-меню */}
          <div
            className={`flex space-x-8 mt-8 transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
          >
            <a href="https://t.me/+79997357379" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-light/80 transition-colors">
              <TelegramIcon className="w-8 h-8" />
            </a>
            <a href="https://wa.me/79997357379" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-light/80 transition-colors">
              <WhatsappIcon className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;