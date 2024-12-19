import React from 'react';
import ReactDOM from 'react-dom/client'; // Changez l'importation
import App from './App';
import './styles.css'; 


const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisez createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
