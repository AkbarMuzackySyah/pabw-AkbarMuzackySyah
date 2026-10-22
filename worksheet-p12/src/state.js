import {render} from "./dom.js";

const KUNCi = "pabw-p11"
const VERSI = 2;

export const state = {
    kategoriAktif: "semua",
    favorit: [],
    daftarProyek: [],
};

export function simpan(stateObj) {
    const isi = {
        versi: VERSI,
        kategoriAktif: stateObj.kategoriAktif,
        favorit: stateObj.favorit,
    };
    localStorage.setItem(KUNCi, JSON.stringify(isi));
}

export function muat() {
    try {
        const dataMentah = localStorage.getItem(KUNCi);
        if (!dataMentah) return;
        const isi = JSON.parse(dataMentah);
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCi);
            return null;
        }
        return isi;
        } catch {
            localStorage.removeItem(KUNCi);
            return null;
        }
}

export function pulihkan(isi) {
    if (!isi) return;
    state.kategoriAktif = isi.kategoriAktif ?? "semua";
    state.favorit = isi.favorit ?? [];
}

export function aturUlang() {
    localStorage.removeItem(KUNCi);
    state.kategoriAktif = "semua";
    state.favorit = [];
    render(state);
}

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    simpan(state);
    render(state);
}

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    simpan(state);
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter((favId) => favId !== id);
    } else {
        state.favorit = [...state.favorit, id];
    }
    simpan(state);
    render(state);
}

export function tambahLaguState(laguBaru) {
    state.daftarProyek = [...state.daftarProyek, laguBaru];
    simpan(state);
    render(state);
}