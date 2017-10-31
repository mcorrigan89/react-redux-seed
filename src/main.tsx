import './styles/style.scss';
declare global {
  interface Window {
    setInitialState: (state?: any) => void;
    store: object;
  }
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore } from './store/store';

import { Root } from './root';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  // This is left here for convenience during development - feel free to remove it.
  window.store = store;
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept(require('./root'), () => {
    render(Root);
  });
}
