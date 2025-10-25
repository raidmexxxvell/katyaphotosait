import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpArrowIcon from './icons/UpArrowIcon';

const Footer: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  
  const shareLink = () => {
    const url = window.location.href;
    
    // Проверяем поддержку Web Share API
    if (navigator.share) {
      navigator.share({
        title: 'Katya - Photographer',
        url: url
      }).catch(console.error);
    } else {
      // Копируем ссылку в буфер обмена для браузеров без поддержки Web Share API
      navigator.clipboard.writeText(url).then(() => {
        alert('Ссылка скопирована в буфер обмена');
      }).catch(console.error);
    }
  };

  return (
    <footer className="py-8 border-t border-gray-800">
  <div className="container mx-auto px-4 md:px-8">
        {/* Share button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center space-x-2 text-brand-light hover:text-brand-gray transition-colors"
          >
            <UpArrowIcon className="w-5 h-5 rotate-45" />
            <span>Поделиться ссылкой</span>
          </button>
        </div>
        
        {/* Share Modal */}
        {isShareModalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setIsShareModalOpen(false)}>
            <div className="bg-brand-dark p-6 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-brand-light">Поделиться ссылкой</h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="text-brand-light hover:text-brand-gray text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    shareLink();
                    setIsShareModalOpen(false);
                  }}
                  className="w-full py-2 px-4 bg-brand-light text-brand-dark rounded hover:bg-brand-gray transition-colors"
                >
                  Копировать ссылку
                </button>
                
                {/* Кнопки для основных мессенджеров */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-center"
                >
                  WhatsApp
                </a>
                
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-60 transition-colors text-center"
                >
                  Telegram
                </a>
                
                <a
                  href={`mailto:?subject=Катя - Фотограф&body=Смотри, какая классная фотосессия: ${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-center"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        )}
        
        <div className="pt-6">
          <div className="text-center text-brand-gray space-y-2">
            <p className="font-sans text-sm">© {currentYear} whoimkatya</p>
            <p className="font-sans text-sm">Ульянкина Екатерина Владиславовна</p>
            <p className="font-sans text-sm">ИНН 502909440704</p>
            <p className="font-sans text-sm">whoimkatya@gmail.com</p>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/terms" className="text-brand-gray hover:text-brand-light transition-colors">Пользовательское соглашение</Link>
            <Link to="/privacy-policy" className="text-brand-gray hover:text-brand-light transition-colors">Политика конфиденциальности</Link>
            <Link to="/data-consent" className="text-brand-gray hover:text-brand-light transition-colors">Согласие на обработку данных</Link>
            <Link to="/offer" className="text-brand-gray hover:text-brand-light transition-colors">Оферта</Link>
          </div>
          
          <div className="mt-6 text-center">
            <p className="font-sans text-xs text-brand-gray">все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;