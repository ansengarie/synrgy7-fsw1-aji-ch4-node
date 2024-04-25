// balok.js
module.exports = {
  luas: function (panjang, lebar, tinggi) {
    return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
  },
  volume: function (panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
  },
};
