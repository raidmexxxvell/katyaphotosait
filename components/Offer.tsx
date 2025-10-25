import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Offer: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
  <main className="flex-grow container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-light uppercase tracking-widest text-center mb-12 text-brand-light">
            Оферта
          </h1>
          
          <div className="text-brand-gray space-y-6 leading-relaxed">
            <p>
              Настоящая оферта (далее – Оферта) является официальным предложением Ульянкиной Екатерины Владиславовны (далее – Исполнитель) заключить договор на оказание услуг по проведению фотосессий на указанных в настоящем документе условиях.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Предмет оферты</h2>
            
            <p>
              Исполнитель обязуется оказать услуги по проведению фотосессии, а Заказчик обязуется оплатить и принять оказанные услуги в порядке и на условиях, определенных настоящей Офертой.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Стоимость услуг</h2>
            
            <p>
              Стоимость услуг определяется исходя из выбранного пакета фотосессии и указывается в прайс-листе на сайте. Цена указывается в российских рублях.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Порядок оплаты</h2>
            
            <p>
              Оплата производится в порядке, согласованном сторонами. После оплаты Исполнитель подтверждает бронирование даты и времени фотосессии.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Ответственность сторон</h2>
            
            <p>
              Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств в соответствии с действующим законодательством Российской Федерации.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Фотоматериалы</h2>
            
            <p>
              Фотоматериалы, полученные в результате фотосессии, передаются Заказчику в электронном виде в оговоренный срок. Исполнитель оставляет за собой право использовать фотографии в своих рекламных и творческих целях, если иное не оговорено дополнительно.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Отмена и перенос фотосессии</h2>
            
            <p>
              Перенос или отмена фотосессии возможны не позднее чем за 72 часа до ее начала. В противном случае Исполнитель вправе удержать 50% предоплаты.
            </p>
            
            <h2 className="text-xl font-serif font-medium text-brand-light mt-8 mb-4">Прочие условия</h2>
            
            <p>
              Настоящая Оферта вступает в силу с момента акцепта Заказчиком и действует до полного исполнения обязательств сторонами. Все споры, возникающие в связи с исполнением настоящей Оферты, подлежат разрешению в установленном законодательством Российской Федерации порядке.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offer;