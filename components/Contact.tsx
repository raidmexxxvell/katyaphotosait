
import React from 'react';
import Section from './Section';
import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const socialLinks = [
  { Icon: InstagramIcon, href: '#', name: 'Instagram' },
  { Icon: TelegramIcon, href: '#', name: 'Telegram' },
  { Icon: WhatsappIcon, href: '#', name: 'WhatsApp' },
];

const Contact: React.FC = () => {
  return (
    <Section title="КОНТАКТЫ">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-brand-gray text-lg mb-8">
          Для записи и по любым вопросам вы можете связаться со мной удобным для вас способом.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-10">
          {socialLinks.map(({ Icon, href, name }) => (
            <a 
              key={name} 
              href={href} 
              aria-label={name}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-brand-light transition-colors duration-300"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        <div className="font-sans text-lg">
          <p>
            <a href="mailto:anya.pankina@example.com" className="hover:text-white transition-colors duration-300">
              anya.pankina@example.com
            </a>
          </p>
          <p className="mt-2">
            <a href="tel:+79991234567" className="hover:text-white transition-colors duration-300">
              +7 (999) 123-45-67
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
