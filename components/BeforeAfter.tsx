import React, { useState, useRef, useEffect } from 'react';

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  initial?: number; // 0-100
  // optional class names to control sizing and appearance from parent
  outerClassName?: string;
  containerClassName?: string;
};

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeSrc, afterSrc, alt = '', initial = 50, outerClassName = 'w-full max-w-lg mx-auto my-6', containerClassName = 'relative w-full h-72 bg-black overflow-hidden rounded-md' }) => {
  const [percent, setPercent] = useState<number>(initial);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // allow dragging on the image (touch/mouse)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let dragging = false;

    const setFromEvent = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const p = Math.max(0, Math.min(1, x / rect.width));
      setPercent(Math.round(p * 100));
    };

    const onDown = (e: PointerEvent) => {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      dragging = true;
      setFromEvent(e.clientX);
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try { (e.target as Element).releasePointerCapture?.(e.pointerId); } catch {}
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      setFromEvent(e.clientX);
    };

  // capture pointerdown on the container so dragging works anywhere (including handle)
  el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointermove', onMove);

    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div className={outerClassName}>
      <div
        ref={containerRef}
        className={`${containerClassName} beforeafter-container`}
        style={{ touchAction: 'none' }}
        tabIndex={0}
        onKeyDown={(e) => {
          // keyboard control: arrows adjust by 2%, page up/down by 10%, home/end
          if (e.key === 'ArrowLeft') {
            setPercent((v) => Math.max(0, v - 2));
            e.preventDefault();
          } else if (e.key === 'ArrowRight') {
            setPercent((v) => Math.min(100, v + 2));
            e.preventDefault();
          } else if (e.key === 'PageUp') {
            setPercent((v) => Math.min(100, v + 10));
            e.preventDefault();
          } else if (e.key === 'PageDown') {
            setPercent((v) => Math.max(0, v - 10));
            e.preventDefault();
          } else if (e.key === 'Home') {
            setPercent(0);
            e.preventDefault();
          } else if (e.key === 'End') {
            setPercent(100);
            e.preventDefault();
          }
        }}
      >
        {/* base (right) image - stays static */}
        <img src={afterSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover" />

        {/* before image overlay from left, clipped via clip-path so image stays full-size (no scaling) */}
        <img
          src={beforeSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)`, willChange: 'clip-path' }}
        />

        {/* vertical divider line */}
        <div style={{ left: `${percent}%` }} className="absolute top-0 h-full w-px -translate-x-1/2">
          <div className="h-full w-px bg-white"></div>
        </div>

        {/* handle (visible control) - smaller */}
        <div
          style={{ left: `${percent}%` }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-auto beforeafter-handle"
        >
          <div className="relative w-8 h-8 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center justify-center touch-none">
            {/* left triangle */}
            <div
              style={{
                position: 'absolute',
                left: 5,
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderRight: '6px solid rgba(0,0,0,0.85)'
              }}
            />
            {/* right triangle */}
            <div
              style={{
                position: 'absolute',
                right: 5,
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '6px solid rgba(0,0,0,0.85)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
