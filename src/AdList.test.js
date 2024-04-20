// AdList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import AdList from './AdList';
import { AdsContext } from './AdsContext';

test('renders list of ads', () => {
  const ads = [
    { id: 1, title: 'Ad 1', description: 'Description for Ad 1' },
    { id: 2, title: 'Ad 2', description: 'Description for Ad 2' },
  ];

  const { getByText } = render(
    <AdsContext.Provider value={{ ads }}>
      <AdList />
    </AdsContext.Provider>
  );

  expect(getByText('Ad 1')).toBeInTheDocument();
  expect(getByText('Description for Ad 1')).toBeInTheDocument();
  expect(getByText('Ad 2')).toBeInTheDocument();
  expect(getByText('Description for Ad 2')).toBeInTheDocument();
});
