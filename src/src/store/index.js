import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { fromLocalStorage, toLocalStorage } from './localStorage';
import { reducers } from './model';

export const configStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(reducers, fromLocalStorage(), applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    toLocalStorage(store.getState());
  }, 1000));

  return store;
}
