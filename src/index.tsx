import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';

const rootElement = document.querySelector('#root');
if (rootElement instanceof HTMLElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  );
}
