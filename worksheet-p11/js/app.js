import { ambilProyek } from "./Api.js";
import { render, tampilkanPesanMuat, tampilkanGalatHalaman } from "./dom.js";
import { profil, formatGenre } from "./data.js";

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

console.log(buatPerkenalan(profil));
console.log("Genre Musik:", formatGenre(profil.genreFavorit));

export let daftarLagu = [];

async function muatData() {
  tampilkanPesanMuat("Memuat data...");
  try {
    const data = await ambilProyek(); 
    daftarLagu = data;
    render(daftarLagu); 
    console.log("--- Berhasil Memuat Daftar Lagu dari Jaringan/API ---");
    console.table(daftarLagu);
  } catch (galat) {
    tampilkanGalatHalaman("Data gagal dimuat. Periksa koneksi internet Anda, lalu muat ulang halaman.");
    console.error("Galat saat memuat data:", galat.message);
  } finally {
    const pesanMuat = document.querySelector("#muat");
    if (pesanMuat) pesanMuat.hidden = true;
  }
}

muatData();