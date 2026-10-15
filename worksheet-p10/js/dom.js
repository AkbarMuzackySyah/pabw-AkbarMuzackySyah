import { daftarLagu } from "./app.js";

const wadah = document.querySelector("#daftar-lagu tbody");
const form = document.querySelector("#form-lagu");
const inputJudul = document.querySelector("#judul");
const inputPenyanyi = document.querySelector("#penyanyi");
const inputPencipta = document.querySelector("#pencipta");
const inputDurasi = document.querySelector("#durasi");

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
    <button type="button" class="tombol-filter" data-kategori="semua">Semua</button>
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

export function render(data) {
    wadah.textContent = "";
    if (!data || data.length === 0) {
        pesanKosong.hidden = false;
        return;
    }
    pesanKosong.hidden = true;
    
    const dataTerurut = [...data].sort((a, b) => a.judul.localeCompare(b.judul));
    dataTerurut.forEach((lagu) => {
        wadah.append(buatBarisLagu(lagu));
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const judul = inputJudul.value.trim();
    const penyanyi = inputPenyanyi.value.trim();
    const pencipta = inputPencipta.value.trim();
    const durasi = inputDurasi.value.trim();

    let isValid = true;

    [inputJudul, inputPenyanyi, inputPencipta, inputDurasi].forEach((input) => {
        if (input.value.trim() === "") {
        input.classList.add("user-invalid");
        input.setAttribute("aria-invalid", "true");
        isValid = false;
        } else {
        input.classList.remove("user-invalid");
        input.removeAttribute("aria-invalid");
    }
});

if (!isValid ) return;

const laguBaru = {
    id: daftarLagu.length + 1,
    judul,
    penyanyi,
    pencipta,
    durasi,
    kategori: "Pop Jawa",
};

daftarLagu.push(laguBaru);
render(daftarLagu);

form.reset();
[inputJudul, inputPenyanyi, inputPencipta, inputDurasi].forEach((input) => {
    input.classList.remove("user-invalid");
    input.removeAttribute("aria-invalid");
    });
});

