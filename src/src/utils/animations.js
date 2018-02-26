const db = {};

export const wrapAnimation = (key, idx, count, o, oC, cb) => {
  const self = db[key] = db[key] || { wao: [], wac: [] };

  self.wao[idx] = self.wao[idx] || [];
  self.wao[idx][o] = (self.wao[idx][o] || 0) + 1;

  console.log(new Date(), JSON.parse(JSON.stringify(self)));
  if (self.wao[idx][o] < oC) {
    return;
  }

  self.wac[idx] = (self.wac[idx] || 0) + 1;
  if (self.wac[idx] >= count) {
    cb();
  }
};