import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'женские портреты',
    link: '/zhenskie-portrety',
    image: 'https://picsum.photos/seed/female/1000/1200?grayscale'
  },
  {
    title: 'мужские портреты',
    link: '/muzhskie-portrety',
    image: 'https://picsum.photos/seed/male/1000/1200?grayscale'
  }
];

const Portfolio: React.FC = () => {
  return (
  <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map(category => (
          <Link to={category.link} key={category.title} className="relative block group overflow-hidden">
            <img 
              src={category.image} 
              alt={category.title}
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
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;