export const oneScene2d = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SCENE2D':
      return { ...state, ...action.scene };
    default:
      return state;
  }
}