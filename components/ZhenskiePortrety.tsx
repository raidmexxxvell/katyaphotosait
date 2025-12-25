import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';

const images = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/z${i+1}/600/800?grayscale`);

const ZhenskiePortrety: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  const onPrev = () => {
    setCurrentIndex((i) => {
      if (i == null) return i;
      return (i + images.length - 1) % images.length;
    });
  };

  const onNext = () => {
    setCurrentIndex((i) => {
      if (i == null) return i;
      return (i + 1) % images.length;
    });
  };

  return (
  <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <h1 className="text-center text-4xl md:text-5xl font-serif font-light uppercase tracking-widest mb-12 md:mb-16">Женские портреты</h1>
      <div className="grid grid-cols-1 grid-cols-3 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden cursor-pointer" onClick={() => openFullscreen(index)}>
            <img
              src={src}
              alt={`Female portrait ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover bg-gray-800 opacity-0 transform transition-transform transition-opacity duration-500 ease-in-out hover:scale-105"
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Разделительная полоса с надписью ПОРТФОЛИО */}
      <div className="my-16 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-brand-light"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-brand-dark px-4 text-brand-light font-serif text-2xl uppercase tracking-widest">Портфолио</span>
        </div>
      </div>
      
      {/* Навигация к мужским портретам */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Link to="/muzhskie-portrety" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative block group overflow-hidden">
          <img
            src="https://picsum.photos/seed/male/1000/1200?grayscale"
            alt="Мужские портреты"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover bg-gray-800 opacity-0 transform transition-transform transition-opacity duration-500 ease-in-out group-hover:scale-105"
            onLoad={(e) => {
              e.currentTarget.classList.remove('opacity-0');
              e.currentTarget.classList.add('opacity-100');
            }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-brand-light font-serif text-2xl md:text-3xl uppercase tracking-widest">
              мужские портреты
            </h2>
          </div>
        </Link>
      </div>
      
      {currentIndex != null && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={closeFullscreen}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default ZhenskiePortrety;
