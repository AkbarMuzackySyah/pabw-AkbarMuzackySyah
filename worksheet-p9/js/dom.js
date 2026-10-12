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