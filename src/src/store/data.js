export const data = {
  scene2d: {
    g: {
      cur: 0,
      moving: false,
      percentage: 0
    }
  },
  indicators: {
    load: false,
    pager: true,
    pagerHandles: true,
    demonstrations: true
  }
};

export const purge = (data) => {
  data.animations = {};
  return data;
}