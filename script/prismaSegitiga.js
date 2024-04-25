// prismaSegitiga.js
module.exports = {
  luas: function (alas, tinggi) {
    return 2 * (0.5 * alas * tinggi) + 3 * alas;
  },
  volume: function (alas, tinggi, sisi) {
    return 0.5 * alas * tinggi * sisi;
  },
};
