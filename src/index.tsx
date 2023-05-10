import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LoginPage from './features/auth/components/login-page/login-page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <div>Works</div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
console.log('Js works!');
