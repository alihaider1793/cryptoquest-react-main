import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import WalletsProvider from './providers/WalletsProvider';
import store from './store/store';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <WalletsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WalletsProvider>
  </Provider>,
  document.getElementById('root')
);
