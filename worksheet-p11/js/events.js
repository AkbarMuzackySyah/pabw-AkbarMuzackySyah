import { pilihKategori, tambahFavorit, aturUlang, tambahLaguState, state } from './state.js';

export function pasangPendengar() {
    const barisFilter = document.querySelector("#filter");
    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest(".tombol-filter");
            if (tombol) {
                pilihKategori(tombol.dataset.kategori);
            }
        });
    }

    const tombolAturUlang = document.querySelector("#aturulang");
    if (tombolAturUlang) {
        tombolAturUlang.addEventListener("click", () => {
            aturUlang();
        });
    }

    const wadahTabel = document.querySelector("#daftar-lagu tbody");
    if (wadahTabel) {
        wadahTabel.addEventListener("click", (event) => {
            const tombol = event.target.closest(".favorit");
            if (tombol) {
                tambahFavorit(Number(tombol.dataset.id));
            }
        });
    }

    const form = document.querySelector("#form-lagu");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputJudul = document.querySelector("#judul");
            const inputPenyanyi = document.querySelector("#penyanyi");
            const inputPencipta = document.querySelector("#pencipta");
            const inputDurasi = document.querySelector("#durasi");

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

            if (!isValid) return;

            const laguBaru = {
                id: Date.now(),
                judul,
                penyanyi,
                pencipta,
                durasi,
                kategori: "Pop Jawa"
            };

            tambahLaguState(laguBaru);

            form.reset();
            [inputJudul, inputPenyanyi, inputPencipta, inputDurasi].forEach((input) => {
                input.classList.remove("user-invalid");
                input.removeAttribute("aria-invalid");
            });
        });
    }
}