export const indicators = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_INDICATORS':
      state = { ...state };
      action.keys.forEach((key) => { state[key] = true; })
      return state;
    case 'HIDE_INDICATORS':
      state = { ...state };
      action.keys.forEach((key) => { state[key] = false; })
      return state;
    case 'TOGGLE_INDICATORS':
      state = { ...state };
      action.keys.forEach((key) => { state[key] = !state[key]; })
      return state;
    case 'NEXT_SCENE2D_FRAME':
    case 'PREV_SCENE2D_FRAME':
    case 'NEXT_ANIMATION':
      state = { ...state };
      state.load = true;
      state.demonstrations = false;
      state.pager = false;
      state.pagerHandles = false;
      return state;
    default:
      return state;
  }
}