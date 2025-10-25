
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen w-full flex items-center justify-center text-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light uppercase tracking-widest">
          Anya Pankina
        </h1>
        <p className="mt-4 text-lg md:text-xl text-brand-gray uppercase tracking-wider font-sans font-light">
          Makeup artist & Hair stylist
        </p>
      </div>
    </section>
  );
};

export default Hero;
