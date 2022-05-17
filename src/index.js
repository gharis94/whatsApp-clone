import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/userContext';
import { RoomProvider } from './Context/roomContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <UserProvider>
        <App />
      </UserProvider>
      </RoomProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);


