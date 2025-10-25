import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
  <main className="flex-grow container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-light uppercase tracking-widest text-center mb-12 text-brand-light">
            Политика конфиденциальности
          </h1>
          
          <div className="text-brand-gray space-y-6 leading-relaxed">
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта whoimkatya.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Сбор информации</h2>
            
            <p>
              Мы собираем информацию, которую вы предоставляете при регистрации, заполнении форм, отправке сообщений, а также техническую информацию, автоматически собираемую при посещении сайта.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Использование информации</h2>
            
            <p>
              Собранная информация используется для предоставления услуг, улучшения работы сайта, связи с пользователями и выполнения обязательств перед ними.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Разглашение информации</h2>
            
            <p>
              Мы не передаем персональные данные третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Хранение и защита данных</h2>
            
            <p>
              Мы принимаем все необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Изменения в политике</h2>
            
            <p>
              Настоящая политика может быть изменена без предварительного уведомления. Изменения вступают в силу с момента их публикации на сайте.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Контактная информация</h2>
            
            <p>
              Если у вас есть вопросы по поводу настоящей политики, вы можете связаться с нами по адресу: whoimkatya@gmail.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;