# Worksheet P12 — Build Tooling, npm, dan Framework SPA
**Pengembangan Aplikasi Berbasis Web  
* **Nama:** Akbar Muzacky Syah
* **NIM:** 25523218
* **Kelas:** A
* **Topik Proyek:** Playlist Musik Favorit Saya
## 1. Lingkungan Perkakas (Environment)
Proyek ini dibangun dan dijalankan menggunakan lingkungan perkakas berikut:
* **Node.js:** `v24.22.1` (Versi LTS)
* **npm:** `11.19.1`
* **Build Tool / Framework:** Vite + Vue 3 (SFC - Single File Components)
* **Port Server Dev:** `http://localhost:5173/`
## 2. Struktur Komponen Proyek Vue
Halaman monolitik Pertemuan 11 telah diporting menjadi arsitektur Vue 3 SPA modular yang terbagi menjadi empat komponen utama di dalam folder `src/components/`:
1. **`KepalaProfil.vue`**: Menampilkan identitas header dan menu navigasi utama. Menerima data melalui `props` (`:profil="profil"`).
2. **`DaftarProyek.vue`**: Menampilkan daftar lagu favorit, gambar ilustrasi playlist, indikator *loading/error*, dan tabel data reaktif.
3. **`TombolFilter.vue`**: Menyediakan tombol navigasi untuk menyaring daftar lagu berdasarkan kategori genre (`Semua`, `Pop Jawa`, `Dangdut Koplo`, `Hip-Hop Jawa`).
4. **`FormKontak.vue`**: Formulir penambahan lagu baru ke dalam state aplikasi secara interaktif tanpa *page reload*.
## 3. Hasil Build Produksi (`npm run build` vs `npm run preview`)
Hasil perbandingan antara server pengembangan (`npm run dev`) dan pratinjau *build* produksi (`npm run preview`):
| Yang Diukur | Sebelum Build (`npm run dev`) | Sesudah Build (`npm run preview`) |
| :--- | :--- | :--- |
| **Ukuran Seluruh Berkas** | ~1.2 MB (modul modular terpisah) | ~250 kB (terkompresi & *minified*) |
| **Jumlah Request** | ~20–30 *requests* | ~5–8 *requests* (hasil *bundling*) |
| **Lokasi Output** | Memori lokal Vite | Folder `dist/` |
> **Catatan Git:** Folder `node_modules/` dan `dist/` diabaikan oleh Git melalui `.gitignore`, sedangkan `package-lock.json` di-commit untuk mengunci kepastian versi paket.
## 4. Deklarasi Penggunaan AI (AI Declaration)
Penggunaan asisten AI dalam pengerjaan Pertemuan 12 dideklarasikan sebagai berikut:
* **Bagian yang Dibantu AI:**
  * Troubleshooting galat rute HTTP 404 (`/simpan`) akibat sisa form HTML statis monolitik.
  * Penyusunan ulang arsitektur `src/App.vue` dan pemisahan komponen modular.
  * Penyelarasan tata letak CSS grid responsif (`main.isi.content`) agar presisi dengan tampilan P11.
* **Bagian yang Dikerjakan Mandiri:**
  * Penyiapan folder kerja, eksekusi perintah npm (`create vite`, `install`, `dev`, `build`, `preview`).
  * Pengujian reaktivitas `localStorage` pada peramban dan verifikasi DevTools Network.
  * Penyimpanan riwayat commit Git dan *push* repositori ke GitHub.
