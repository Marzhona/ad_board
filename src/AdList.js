import React, { useContext } from 'react';
import { AdsContext } from './AdsContext';
import AdItem from './AdItem';

const AdList = React.memo(() => {
  const { ads } = useContext(AdsContext);

  return (
    <div>
      {ads.map((ad) => (
        <AdItem key={ad.id} ad={ad} />
      ))}
    </div>
  );
});

export default AdList;
