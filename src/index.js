import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Check if the app is running on localhost or in production
const basename = window.location.hostname === 'localhost' ? '' : '/website';

root.render(
    <BrowserRouter basename={basename}>
        <App />
    </BrowserRouter>
);
reportWebVitals();
