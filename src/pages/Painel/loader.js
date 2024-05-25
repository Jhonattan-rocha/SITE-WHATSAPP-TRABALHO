import React from 'react';
import { Loader } from './styles';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Loader />
  </div>
);

export default LoadingSpinner;
