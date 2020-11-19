import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
render(app, document.getElementById('root'));

reportWebVitals();
