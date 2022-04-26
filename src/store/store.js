import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWare = [logger];

const enhancers = compose(
  applyMiddleware(...middleWare),
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export const store = createStore(rootReducer, undefined, enhancers);
