// segitiga.js
function hitungLuasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

function hitungVolumeSegitiga(alas, tinggi, sisi) {
  return (1 / 3) * hitungLuasSegitiga(alas, tinggi) * sisi;
}

// Ekspor fungsi-fungsi yang dibutuhkan
module.exports = {
  hitungLuasSegitiga,
  hitungVolumeSegitiga,
};
