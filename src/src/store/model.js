import { combineReducers } from 'redux';

import { animations } from './animations';
import { indicators } from './indicators';
import { scene2d } from './scene2d';

export const reducers = combineReducers({
  animations,
  scene2d,
  indicators
});
