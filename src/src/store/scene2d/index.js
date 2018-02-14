import { oneScene2d } from './one';

export const scene2d = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SCENE2D':
      const ret = { ...state };
      ret[action.key] = oneScene2d(ret[action.key], action);
      return ret;
    default:
      return state;
  }
}