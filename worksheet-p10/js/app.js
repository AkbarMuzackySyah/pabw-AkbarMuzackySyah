import { ambilProyek } from "./Api.js";
import { render, tampilkanPesanMuat, tampilkanGalatHalaman } from "./dom.js";

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

export let daftarLagu = [];

async function muatData() {
  tampilkanPesanMuat("Memuat data...");
  try {
    const data = await ambilProyek(); // Memanggil api.js tanpa fetch di app.js
    daftarLagu = data;
    render(daftarLagu); // Menggambar data ke halaman melalui dom.js
    console.log("--- Berhasil Memuat Daftar Lagu dari Jaringan/API ---");
    console.table(daftarLagu);
  } catch (galat) {
    tampilkanGalatHalaman("Data gagal dimuat. Periksa koneksi internet Anda, lalu muat ulang halaman.");
    console.error("Galat saat memuat data:", galat.message);
  } finally {
    // Sembunyikan elemen pesan memuat setelah proses selesai
    const pesanMuat = document.querySelector("#muat");
    if (pesanMuat) pesanMuat.hidden = true;
  }
}

muatData();