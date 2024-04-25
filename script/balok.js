// balok.js
function hitungLuasPermukaan(panjang, lebar, tinggi) {
  return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
}

function hitungVolume(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}

module.exports = {
  hitungLuasPermukaan,
  hitungVolume,
};
