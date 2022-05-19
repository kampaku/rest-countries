import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

const rootElement = document.querySelector('#root');
if (rootElement instanceof HTMLElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
