/* eslint-disable no-unused-vars */
/* eslint comma-dangle: ["error", "never"] */

import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
