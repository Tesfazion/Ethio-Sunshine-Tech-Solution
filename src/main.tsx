import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { I18nProvider } from './i18n';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ErrorBoundary title="App error">
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>
);
