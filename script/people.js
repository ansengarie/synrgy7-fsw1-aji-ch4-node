const fs = require("fs");

// Data people
const people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

// Fungsi async untuk menulis data ke dalam file
function writeDataToFile(data) {
  fs.writeFile("people.txt", JSON.stringify(data), (error) => {
    if (error) {
      console.error("Terjadi kesalahan saat menulis ke dalam file:", error);
    } else {
      console.log("Data berhasil ditulis ke dalam file.");
    }
  });
}

// Fungsi untuk membaca data dari file
function readDataFromFile() {
  fs.readFile("people.txt", "utf8", (error, data) => {
    if (error) {
      console.error("Terjadi kesalahan saat membaca dari file:", error);
    } else {
      console.log("Data yang dibaca dari file:");
      console.log(data);
    }
  });
}

module.exports = { readDataFromFile };

function getDataName() {
  const names = people.map((person) => person.name);
  console.log("Nama-nama orang:");
  console.log(names);
}

// Fungsi untuk mendapatkan detail orang berdasarkan ID
function getDetail(id) {
  const person = people.find((person) => person.id === id);
  if (person) {
    console.log("Detail orang dengan ID", id, ":");
    console.log(person);
  } else {
    console.log("Orang dengan ID", id, "tidak ditemukan.");
  }
}

module.exports = {
  people,
  writeDataToFile,
  readDataFromFile,
  getDataName,
  getDetail,
};
