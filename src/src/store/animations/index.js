export const animations = (state = {}, action) => {
  switch (action.type) {
    case 'NEXT_ANIMATION':
      const ret = { ...state };
      ret[action.key] = ret[action.key] || [];
      ret[action.key] = [...ret[action.key], true];
      return ret;
    default:
      return state;
  }
}