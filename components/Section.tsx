import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="pb-20 md:pb-28">
  <div className="container mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-center text-4xl md:text-5xl font-serif font-light uppercase tracking-widest mb-12 md:mb-16">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;