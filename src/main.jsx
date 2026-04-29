import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './mobile.css'
import App from './App.jsx'

import { createRoot, hydrateRoot } from 'react-dom/client'

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}
