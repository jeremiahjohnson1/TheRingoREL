import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from ReactDOM
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// Create the root element and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
