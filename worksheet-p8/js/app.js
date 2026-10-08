const profil = {
  nama: "Akbar Muzacky Syah",
  nim: "25523218",
  peran: "Mahasiswa Informatika & Penggemar Musik",
  genreFavorit: ["Pop Jawa", "Dangdut Koplo", "Hip-Hop Jawa"],
  jumlahLagu: 3
};

const kalimatPerkenalan = `Halo! Saya ${profil.nama} (${profil.nim}), seorang ${profil.peran} yang memiliki ${profil.jumlahLagu} lagu favorit.`;
console.log(kalimatPerkenalan);
console.log("Tipe data nama:", typeof profil.nama);
console.log("Tipe data nim:", typeof profil.nim);
console.log("Tipe data peran:", typeof profil.peran);
console.log("Tipe data genreFavorit:", typeof profil.genreFavorit);
console.log("Tipe data jumlahLagu:", typeof profil.jumlahLagu);

function buatPerkenalan({ nama, peran }) {
  return `Pengguna: ${nama} | Peran: ${peran}`;
}

const formatGenre = (daftar) => daftar.join(" • ");

console.log(buatPerkenalan(profil));
console.log("Genre Musik:", formatGenre(profil.genreFavorit));