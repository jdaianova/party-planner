import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/roboto";
import "@fontsource/roboto/400.css"; //[100,300,400,500,700,900]
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);