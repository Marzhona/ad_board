// AdsContext.js
import React, { createContext, useState, useEffect } from 'react';

const AdsContext = createContext();

const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState(() => {
    // Извлекаем объявления из локального хранилища при загрузке приложения
    const storedAds = localStorage.getItem('ads');
    return storedAds ? JSON.parse(storedAds) : [];
  });

  useEffect(() => {
    // Сохраняем объявления в локальное хранилище при каждом их изменении
    localStorage.setItem('ads', JSON.stringify(ads));
  }, [ads]);

  const addAd = (newAd) => {
    setAds([...ads, newAd]);
  };

  const deleteAd = (id) => {
    setAds(ads.filter(ad => ad.id !== id));
  };

  const editAd = (id, updatedAd) => {
    setAds(ads.map(ad => (ad.id === id ? { ...ad, ...updatedAd } : ad)));
  };

  return (
    <AdsContext.Provider value={{ ads, addAd, deleteAd, editAd }}>
      {children}
    </AdsContext.Provider>
  );
};

export { AdsProvider, AdsContext };
