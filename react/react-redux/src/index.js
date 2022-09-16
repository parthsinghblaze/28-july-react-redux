import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App3 from './App3';
import store from './combineReducer/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App3 />
  </Provider>
);