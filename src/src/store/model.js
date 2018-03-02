import { combineReducers } from 'redux';

import { animations } from './animations';
import { article } from './article';
import { projects } from './projects';
import { indicators } from './indicators';
import { scene2d } from './scene2d';
import { techtrees } from './techtrees';

export const reducers = combineReducers({
  animations,
  article,
  projects,
  scene2d,
  indicators,
  techtrees
});
