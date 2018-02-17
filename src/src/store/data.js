export const data = {
  scene2d: {
    g: {
      cur: 0,
      moving: false,
      percentage: 0
    }
  },
  indicators: {
    all: true,
    pager: true,
    load: true
  }
};

export const purge = (data) => {
  data.indicators.load = true;
  return data;
}