// index.js
const fs = require("fs");
const segitiga = require("./script/segitiga");
const balok = require("./script/balok");
const prismaSegitiga = require("./script/prismaSegitiga");
const {
  people,
  writeDataToFile,
  readDataFromFile,
} = require("./script/people");

// Menggunakan modul segitiga
console.log("Luas Segitiga:", segitiga.hitungLuasSegitiga(5, 4));
console.log("Volume Segitiga:", segitiga.hitungVolumeSegitiga(5, 4, 6));

// Menggunakan modul balok
console.log("Luas Permukaan Balok:", balok.hitungLuasPermukaan(3, 4, 5));
console.log("Volume Balok:", balok.hitungVolume(3, 4, 5));

// Menggunakan modul prismaSegitiga
console.log(
  "Luas Permukaan Prisma Segitiga:",
  prismaSegitiga.hitungLuasPermukaan(5, 4)
);
console.log("Volume Prisma Segitiga:", prismaSegitiga.hitungVolume(5, 4, 6));

// Menggunakan modul balok
const luasPermukaanBalok = balok.hitungLuasPermukaan(3, 4, 5);
const volumeBalok = balok.hitungVolume(3, 4, 5);
console.log("Luas Permukaan Balok:", luasPermukaanBalok);
console.log("Volume Balok:", volumeBalok);

// Menulis hasil volume balok ke dalam file result.txt
fs.writeFileSync("result.txt", `Volume Balok: ${volumeBalok}`);

// Panggil fungsi untuk menulis data ke dalam file
writeDataToFile(people);

// Panggil fungsi untuk membaca data dari file
readDataFromFile();
