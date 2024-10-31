import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contador from './Contador.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Contador />
  </React.StrictMode>
);

