import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
