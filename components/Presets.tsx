import React, { useState } from 'react';
import Section from './Section';
import BeforeAfter from './BeforeAfter';

const Presets: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Section title="ПРЕСЕТЫ">
      <div className="max-w-3xl mx-auto text-left px-4">
        {/* Цветные пресеты */}
        <h3 className="font-serif text-2xl mt-6 mb-4">Цветные пресеты</h3>
        <h2 className="font-serif text-3xl mb-4">привет, на связи Катя</h2>

        <p className="text-brand-gray mb-3 leading-relaxed">а тут вы можете найти кое-что любопытное.</p>

        <p className="font-semibold mb-2">мои пресетики, которыми я обрабатываю фотографии.</p>

        <p className="text-brand-gray mb-4 leading-relaxed">
          сразу хочу сказать важное — они не станут вашей таблеткой и не решат вопросы по цвету, если вы не совсем понимаете как работает Lightroom и все ползунки в нем. любой пресет нужно докручивать, так как исходники разные, освещение разное и все абсолютно разное. на плохой исходник даже самый универсальный пресет не ляжет, не забывайте :)
        </p>

        <p className="text-brand-gray mb-4 leading-relaxed">
          но, надеюсь, мои пресеты станут для вас новым глотком, пинком, вдохновением, опорой или еще чем-нибудь хорошим.
        </p>

        <div className="mb-4">
          <p className="font-medium">в паке 4 пресета для Lightroom (3 для RAW и 1 для JPG):</p>
          <ul className="list-disc ml-5 mt-2 text-brand-gray">
            <li>— цвет холодненький</li>
            <li>— цвет тепленький</li>
            <li>— чб для raw</li>
            <li>— чб для jpg</li>
          </ul>
        </div>

        <p className="text-brand-gray mb-4">по jpg есть нюанс, о котором я напишу в инструкционном файлике, который будет прилагаться к пресетам :)</p>

        <p className="text-brand-gray mb-6">также в папке есть пресеты для мобильной версии приложения!</p>

        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-semibold">цена: <span className="font-serif">5000 руб</span></div>
          <button onClick={openModal} className="bg-black text-white px-4 py-2 rounded-md">купить пресеты</button>
        </div>

        {/* Before/After examples - same behaviour on mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <BeforeAfter
            beforeSrc="https://picsum.photos/seed/preset-before1/1600/1200"
            afterSrc="https://picsum.photos/seed/preset-after1/1600/1200"
            alt="до/после 1"
            initial={50}
            outerClassName="w-full mx-auto my-6"
            containerClassName="relative w-full h-[520px] bg-black overflow-hidden rounded-none"
          />

          <BeforeAfter
            beforeSrc="https://picsum.photos/seed/preset-before2/1600/1200"
            afterSrc="https://picsum.photos/seed/preset-after2/1600/1200"
            alt="до/после 2"
            initial={50}
            outerClassName="w-full mx-auto my-6"
            containerClassName="relative w-full h-[520px] bg-black overflow-hidden rounded-none"
          />
        </div>

        {/* ЧБ пресеты */}
        <h3 className="font-serif text-2xl mt-10 mb-4">ч/б пресеты</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <BeforeAfter
            beforeSrc="https://picsum.photos/seed/mono-color1/1600/1200"
            afterSrc="https://picsum.photos/seed/mono-color1/1600/1200?grayscale"
            alt="чб пресет 1"
            initial={50}
            outerClassName="w-full mx-auto my-6"
            containerClassName="relative w-full h-[520px] bg-black overflow-hidden rounded-none"
          />

          <BeforeAfter
            beforeSrc="https://picsum.photos/seed/mono-color2/1600/1200"
            afterSrc="https://picsum.photos/seed/mono-color2/1600/1200?grayscale"
            alt="чб пресет 2"
            initial={50}
            outerClassName="w-full mx-auto my-6"
            containerClassName="relative w-full h-[520px] bg-black overflow-hidden rounded-none"
          />
        </div>

        {/* removed two extra static photos as requested */}

        {/* Modal stub */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white max-w-md w-full p-6 rounded-md">
              <h4 className="text-xl font-semibold mb-4">Купить пресеты</h4>
              <p className="text-brand-gray mb-6">Модальное окно-заглушка. Здесь будет форма оплаты или инструкция для связи.</p>
              <div className="flex justify-end">
                <button onClick={closeModal} className="px-4 py-2 mr-3">Отмена</button>
                <button onClick={closeModal} className="bg-black text-white px-4 py-2 rounded">Ок</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </Section>
  );
};

export default Presets;
