// index.js
const segitiga = require("./script/segitiga");
const balok = require("./script/balok");
const prismaSegitiga = require("./script/prismaSegitiga");

// Contoh penggunaan modul segitiga
console.log("Luas Segitiga:", segitiga.luas(5, 4));
console.log("Volume Segitiga:", segitiga.volume(5, 4, 6));

// Contoh penggunaan modul balok
console.log("Luas Permukaan Balok:", balok.luas(3, 4, 5));
console.log("Volume Balok:", balok.volume(3, 4, 5));

// Contoh penggunaan modul prismaSegitiga
console.log("Luas Permukaan Prisma Segitiga:", prismaSegitiga.luas(5, 4));
console.log("Volume Prisma Segitiga:", prismaSegitiga.volume(5, 4, 6));
