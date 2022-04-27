import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persisstedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [logger];

const enhancers = compose(
  applyMiddleware(...middleWare),
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export const store = createStore(persisstedReducer, undefined, enhancers);

export const persistor = persistStore(store);
