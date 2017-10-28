import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
