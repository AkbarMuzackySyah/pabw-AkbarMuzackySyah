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

const daftarLagu = [
  { id: 1, judul: "Kalah", penyanyi: "Aftershine ft. Restianade", pencipta: "Andika Permana Putra", durasi: "1:06", dikategorikan: true },
  { id: 2, judul: "Los Dol", penyanyi: "Denny Caknan", pencipta: "Denny Caknan & Lek Dahlan", durasi: "4:48", dikategorikan: true },
  { id: 3, judul: "Nemen", penyanyi: "NDX AKA", pencipta: "Gilga Sahid", durasi: "4:48", dikategorikan: false }
];

console.log("--- Seluruh Daftar Lagu ---");
console.table(daftarLagu);

const laguTerkategori = daftarLagu.filter((lagu) => lagu.dikategorikan);
console.log("--- Hasil Filter (Lagu Terkategori) ---");
console.table(laguTerkategori);

const cariLagu = daftarLagu.find((lagu) => lagu.judul === "Nemen");
console.log("--- Hasil Find ('Nemen') ---");
console.log(cariLagu);

const daftarRingkas = daftarLagu.map((lagu) => ({
  judul: lagu.judul,
  penyanyi: lagu.penyanyi
}));
console.log("--- Hasil Map (Ringkasan) ---");
console.table(daftarRingkas);

const daftarUrutJudul = [...daftarLagu].sort((a, b) => a.judul.localeCompare(b.judul));
console.log("--- Hasil Sort (Salinan Terurut) ---");
console.table(daftarUrutJudul)