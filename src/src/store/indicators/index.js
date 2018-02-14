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
    default:
      return state;
  }
}