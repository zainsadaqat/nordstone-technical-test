import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/userContext';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);
