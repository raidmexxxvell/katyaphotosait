import React from 'react';
import Section from './Section';
import Footer from './Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Section title="">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <img
                src="https://picsum.photos/800/1000?grayscale"
                alt="Katya"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover bg-gray-800 opacity-0 transition-opacity duration-300"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('opacity-0');
                  e.currentTarget.classList.add('opacity-100');
                }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-brand-light font-sans text-lg md:text-xl leading-relaxed mb-6">
                привет, я Катя
              </p>
              <div className="text-brand-gray font-sans text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  я в фотографии уже 10 лет и за все это время я пришла к выводу, что лучшая фотография — это фотография о Вас. не об одежде или образах, а о Вас.
                </p>
                <p>
                  именно по этой причине я настоятельно прошу девушек быть без макияжа и в самой простой одежде. без масок и экспериментальных образов. кривляться, дурачиться, хохотать и не бояться плакать, если сильно захотелось. просто быть собой. даже если настроение максимально паршивое. зато это Вы.
                </p>
                <p>
                  а я постараюсь трепетно и аккуратно передать это через свои глаза и сердце.
                </p>
                <p>
                  ну и через моего соулмейта — камеру.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;