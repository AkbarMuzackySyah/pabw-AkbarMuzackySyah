import { daftarLagu } from "./app.js";

const wadah = document.querySelector("#daftar-lagu tbody");
const form = document.querySelector("#form-lagu");
const inputJudul = document.querySelector("#judul");
const inputPenyanyi = document.querySelector("#penyanyi");
const inputPencipta = document.querySelector("#pencipta");
const inputDurasi = document.querySelector("#durasi");

function buatBarisLagu(lagu) {
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

    tr.append(thJudul, tdPenyanyi, tdPencipta, tdDurasi);
    return tr;
}

const sectionLagu = document.querySelector("#daftar-lagu");
const barisFilter = document.createElement("div");
barisFilter.id = "filter";
barisFilter.className = "filter-container";
barisFilter.style.marginBottom = "1rem";
barisFilter.innerHTML = `
    <button type="button" class="tombol-filter" data-kategori="Pop Jawa">Pop Jawa</button>
    <button type="button" class="tombol-filter" data-kategori="Dangdut Koplo">Dangdut Koplo</button>
    <button type="button" class="tombol-filter" data-kategori="Hip-Hop Jawa">Hip-Hop Jawa</button>
`;
sectionLagu.insertBefore(barisFilter, document.querySelector(".tabel-wrap"));

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    barisFilter.querySelectorAll("button").forEach((btn) => {
        btn.classList.toggle("aktif", btn === tombol);
    });

    const hasilFilter = daftarLagu.filter((lagu) => kategori === "semua" || lagu.kategori === kategori);
    render(hasilFilter);
});