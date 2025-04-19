import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilos/estilos.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento con id "root" en index.html');
}