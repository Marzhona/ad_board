import React, { Suspense } from 'react';
import { AdsProvider } from './AdsContext';
import './App.css';

const AdForm = React.lazy(() => import('./AdForm'));
const AdList = React.lazy(() => import('./AdList'));

const App = () => {
  return (
    <AdsProvider>
      <div className="container">
        <h1>Advertisement Board</h1>
        <div className="form-container">
          <Suspense fallback={<div>Loading...</div>}>
            <AdForm />
          </Suspense>
        </div>
        <div className="ad-container">
          <Suspense fallback={<div>Loading...</div>}>
            <AdList />
          </Suspense>
        </div>
      </div>
    </AdsProvider>
  );
};

export default App;
