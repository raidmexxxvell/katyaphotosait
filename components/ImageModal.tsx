import React, { useEffect, useMemo, useRef, useState } from 'react';

export interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const [scale, setScale] = useState(1);
  const startXRef = useRef<number | null>(null);

  const src = useMemo(() => images[currentIndex], [images, currentIndex]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    setScale(1);
  }, [src]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={src}
          alt="Fullscreen view"
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-full object-contain bg-gray-800"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
          onDoubleClick={() => setScale((v) => (v === 1 ? 2 : 1))}
          onWheel={(e) => {
            e.preventDefault();
            const next = scale + (e.deltaY > 0 ? -0.1 : 0.1);
            setScale(clamp(Number(next.toFixed(2)), 1, 3));
          }}
          onTouchStart={(e) => {
            startXRef.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const startX = startXRef.current;
            const endX = e.changedTouches[0]?.clientX ?? null;
            startXRef.current = null;
            if (startX == null || endX == null) return;

            const dx = endX - startX;
            if (Math.abs(dx) < 60) return;
            if (dx > 0) onPrev();
            else onNext();
          }}
        />

        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
          onClick={onClose}
          aria-label="Close fullscreen"
        >
          &times;
        </button>

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl px-3 py-2 hover:text-gray-300"
          onClick={onPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl px-3 py-2 hover:text-gray-300"
          onClick={onNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
