import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persisstedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persisstedReducer, undefined, enhancers);

export const persistor = persistStore(store);
