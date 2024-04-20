// AdsContext.test.js

import React from 'react';
import { render, act } from '@testing-library/react';
import { AdsProvider, AdsContext } from './AdsContext';

test('adds new ad to ads list', () => {
  let result;
  const TestComponent = () => {
    const { ads, addAd } = React.useContext(AdsContext);
    result = ads;

    React.useEffect(() => {
      addAd({ id: 1, title: 'Test Ad', description: 'Test Description' });
    }, [addAd]);

    return null;
  };

  render(
    <AdsProvider>
      <TestComponent />
    </AdsProvider>
  );

  expect(result).toHaveLength(1);
  expect(result[0]).toEqual({ id: 1, title: 'Test Ad', description: 'Test Description' });
});

test('deletes ad from ads list', () => {
  let result;
  const TestComponent = () => {
    const { ads, addAd, deleteAd } = React.useContext(AdsContext);
    result = ads;

    React.useEffect(() => {
      addAd({ id: 1, title: 'Test Ad', description: 'Test Description' });
      deleteAd(1);
    }, [addAd, deleteAd]);

    return null;
  };

  render(
    <AdsProvider>
      <TestComponent />
    </AdsProvider>
  );

  expect(result).toHaveLength(0);
});
