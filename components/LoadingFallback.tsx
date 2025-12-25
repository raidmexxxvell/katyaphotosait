import React from 'react';

export const LoadingFallback: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-brand-light">Загрузка...</div>
    </div>
  );
};
