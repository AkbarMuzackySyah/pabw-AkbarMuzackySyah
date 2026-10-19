import { ambilProyek } from './Api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalatHalaman, tampilkanPesanMuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {

  pulihkan(muat());


  pasangPendengar();


  tampilkanPesanMuat("Memuat data...");
  try {
    const data = await ambilProyek();
    isiProyek(data);
  } catch (galat) {
    tampilkanGalatHalaman("Data gagal dimuat. Periksa koneksi internet Anda, lalu muat ulang halaman.");
  } finally {
    const pesanMuat = document.querySelector("#muat");
    if (pesanMuat) pesanMuat.hidden = true;
  }
}

mulai();