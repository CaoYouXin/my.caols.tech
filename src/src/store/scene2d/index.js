export const scene2d = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SCENE2D':
      state = { ...state };
      state[action.key] = { ...state[action.key], ...action.scene };
      return state;
    case 'NEXT_SCENE2D_FRAME':
      state = { ...state };
      state[action.key] = { ...state[action.key] };
      state[action.key].cur += 1;
      return state;
    case 'PREV_SCENE2D_FRAME':
      state = { ...state };
      state[action.key] = { ...state[action.key] };
      state[action.key].cur -= 1;
      return state;
    default:
      return state;
  }
}