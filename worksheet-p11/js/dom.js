import { saring } from "./data.js";

const wadah = document.querySelector("#daftar-lagu tbody");
const pesanMuat = document.querySelector("#muat");
const pesanGalatHalaman = document.querySelector("#pesan-Galat-halaman");

let pesanKosong = document.querySelector("#pesan-kosong");
if (!pesanKosong) {
    pesanKosong = document.createElement("p");
    pesanKosong.id = "pesan-kosong";
    pesanKosong.textContent = "Tidak ada lagu yang tersedia.";
    pesanKosong.hidden = true;
    wadah.parentElement.after(pesanKosong);
}

export function tampilkanPesanMuat(pesan) {
    if (pesanMuat) {
        pesanMuat.hidden = false;
        pesanMuat.textContent = pesan;
    }
}
export function tampilkanGalatHalaman(pesan) {
    if (pesanGalatHalaman) {
        pesanGalatHalaman.hidden = false;
        pesanGalatHalaman.textContent = pesan;
    }
}

export function buatBarisLagu(lagu, favorit = []) {
    const tr = document.createElement("tr");

    const thJudul = document.createElement("th");
    thJudul.scope = "row";
    thJudul.textContent = lagu.judul;

    const tdPenyanyi = document.createElement("td");
    tdPenyanyi.textContent = lagu.penyanyi;

    const tdPencipta = document.createElement("td");
    tdPencipta.textContent = lagu.pencipta;

    const tdDurasi = document.createElement("td");
    tdDurasi.textContent = lagu.durasi;

    const tdAksi = document.createElement("td");
    const tombolFav = document.createElement("button");
    tombolFav.type = "button";
    tombolFav.textContent = favorit.includes(lagu.id) ? "★" : "☆";
    tombolFav.className = "favorit";
    tombolFav.dataset.id = lagu.id;
    tdAksi.append(tombolFav);
    
    tr.append(thJudul, tdPenyanyi, tdPencipta, tdDurasi, tdAksi);
    return tr;
}

export function render(state) {
    wadah.textContent = "";
    const tampil = saring(state.daftarProyek, state.kategoriAktif);

    if (!tampil || tampil.length === 0) {
        pesanKosong.hidden = false;
    } else {
        pesanKosong.hidden = true;
        const dataTerurut = [...tampil].sort((a, b) => a.judul.localeCompare(b.judul));
        dataTerurut.forEach((lagu) => {
            wadah.append(buatBarisLagu(lagu, state.favorit));
        });
    }

    document.querySelectorAll(".tombol-filter").forEach((btn) => {
        btn.classList.toggle("aktif", btn.dataset.kategori === state.kategoriAktif);
    });
}
