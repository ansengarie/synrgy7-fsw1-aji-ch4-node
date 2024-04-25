// prismaSegitiga.js
function hitungLuasPermukaan(alas, tinggi) {
  return 2 * (0.5 * alas * tinggi) + 3 * alas;
}

function hitungVolume(alas, tinggi, sisi) {
  return 0.5 * alas * tinggi * sisi;
}

module.exports = {
  hitungLuasPermukaan,
  hitungVolume,
};
