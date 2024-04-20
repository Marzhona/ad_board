import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AdsProvider } from './AdsContext';
import AdItem from './AdItem'; // Import AdItem component from its own file

describe('AdItem component', () => {
  const ad = {
    id: 1,
    title: 'Test Ad',
    description: 'This is a test ad',
  };

  it('renders ad title and description', () => {
    const { getByText } = render(
      <AdsProvider>
        <AdItem ad={ad} />
      </AdsProvider>
    );
    expect(getByText('Test Ad')).toBeInTheDocument();
    expect(getByText('This is a test ad')).toBeInTheDocument();
  });

  // Add your other tests here
});
