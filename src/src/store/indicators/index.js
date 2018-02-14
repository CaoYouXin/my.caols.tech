export const indicators = (state = {}, action) => {
  const ret = { ...state };
  switch (action.type) {
    case 'SHOW_INDICATORS':
      action.keys.forEach((key) => { ret[key] = true; })
      return ret;
    case 'HIDE_INDICATORS':
      action.keys.forEach((key) => { ret[key] = false; })
      return ret;
    case 'TOGGLE_INDICATORS':
      action.keys.forEach((key) => { ret[key] = !ret[key]; })
      return ret;
    default:
      return state;
  }
}