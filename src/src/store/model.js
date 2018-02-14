import { combineReducers } from 'redux';

import { indicators } from './indicators';
import { scene2d } from './scene2d';

export const reducers = combineReducers({
  scene2d,
  indicators
});
