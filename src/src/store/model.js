import { combineReducers } from 'redux';

import { animations } from './animations';
import { projects } from './projects';
import { indicators } from './indicators';
import { scene2d } from './scene2d';

export const reducers = combineReducers({
  animations,
  projects,
  scene2d,
  indicators
});
