export const showIndicator = (...keys) => ({
  type: 'SHOW_INDICATORS',
  keys
});

export const hideIndicator = (...keys) => ({
  type: 'HIDE_INDICATORS',
  keys
});

export const toggleIndicator = (...keys) => ({
  type: 'TOGGLE_INDICATORS',
  keys
});