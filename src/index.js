import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/output.css';
import LoginRegistrationPage from './view/LoginRegister'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginRegistrationPage />
  </React.StrictMode>
);
