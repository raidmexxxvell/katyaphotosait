import React from 'react';
import Section from './Section';

interface Service {
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'ИНДИВИДУАЛЬНАЯ СЪЕМКА',
    description: '1-2 часа съемки, 50-70 фотографий в авторской обработке.',
    price: '15000 ₽'
  },
  {
    name: 'LOVE STORY',
    description: 'История вашей любви в кадрах. 2 часа, 80-100 фотографий.',
    price: '18000 ₽'
  },
  {
    name: 'СЕМЕЙНАЯ СЪЕМКА',
    description: 'Теплые и живые моменты вашей семьи. До 4-х человек.',
    price: '17000 ₽'
  },
  {
    name: 'КОНТЕНТ-СЪЕМКА',
    description: 'Визуальное наполнение для вашего блога или бренда. Обсуждается индивидуально.',
    price: 'от 20000 ₽'
  },
  {
    name: 'СВАДЕБНАЯ СЪЕМКА',
    description: 'Полный день или почасовая съемка вашего самого важного дня.',
    price: 'от 50000 ₽'
  },
];

const PriceList: React.FC = () => {
  return (
    <Section title="СТОИМОСТЬ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-700 pb-8 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl md:text-2xl font-serif font-medium uppercase tracking-wider mb-2 sm:mb-0">
                  {service.name}
                </h3>
                <p className="text-xl md:text-2xl font-serif font-light text-brand-light flex-shrink-0">
                  {service.price}
                </p>
              </div>
              <p className="mt-2 text-brand-gray font-sans text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PriceList;