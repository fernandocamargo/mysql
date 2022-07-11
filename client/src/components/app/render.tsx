import { Suspense as OnDemand } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as Types from './types';
import { Home } from './routes';

export default (({ className }) => (
  <div className={className}>
    <h1>Products</h1>
    <OnDemand fallback="Loading...">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </OnDemand>
  </div>
)) as Types.Default;
