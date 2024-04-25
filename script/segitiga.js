// segitiga.js
module.exports = {
  luas: function (alas, tinggi) {
    return 0.5 * alas * tinggi;
  },
  volume: function (alas, tinggi, sisi) {
    return (1 / 3) * this.luas(alas, tinggi) * sisi;
  },
};
