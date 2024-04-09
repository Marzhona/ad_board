import { createContext, useState, useCallback } from 'react';

const AdsContext = createContext();

const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  const addAd = useCallback((newAd) => {
    setAds((prevAds) => [...prevAds, newAd]);
  }, []);

  const deleteAd = useCallback((id) => {
    setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
  }, []);

  return (
    <AdsContext.Provider value={{ ads, addAd, deleteAd }}>
      {children}
    </AdsContext.Provider>
  );
};

export { AdsProvider, AdsContext };
