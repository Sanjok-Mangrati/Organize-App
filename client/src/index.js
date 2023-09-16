// Import necessary styles and libraries
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the entire application using React.StrictMode and BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
