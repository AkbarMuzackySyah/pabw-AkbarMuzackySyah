## Pertemuan 11 — Modul, State, dan Penyimpanan Klien
**Proyek:** Playlist Musik Favorit Saya

### Materi yang dipelajari
- Memecah satu berkas JavaScript menjadi beberapa modul (`data.js`, `state.js`, `dom.js`, `events.js`, dan `app.js`) menggunakan `export` dan `import`.
- Menghubungkan modul ES dengan jalur relatif yang diawali `./` dan berakhiran `.js`.
- Memisahkan keadaan aplikasi (*state*) dari tampilan DOM ke dalam satu objek `state` tunggal.
- Menggambar ulang tampilan menggunakan fungsi `render(state)` berdasarkan perubahan *state*.
- Menyimpan dan memuat preferensi pengguna menggunakan `localStorage`, `JSON.stringify()`, dan `JSON.parse()`.
- Menangani simpanan yang rusak, versi skema lama, dan nilai bawaan menggunakan `try/catch`.
- Membuat tombol atur ulang untuk membersihkan simpanan `localStorage`.

### Penggunaan bantuan AI
Saya menggunakan bantuan AI untuk memahami materi worksheet, memeriksa konsistensi nama file dan fungsi, serta mempelajari pemisahan modul dan penanganan galat `localStorage`. Saya memeriksa dan menyesuaikan kode dengan proyek Playlist Musik Favorit Saya, kemudian menguji hasilnya sendiri.

### Pengujian
Hasil pengujian dicatat berdasarkan pemeriksaan langsung pada browser, Console, dan Application DevTools (`localStorage`).

### Persyaratan Node.js
- **Node.js version:** v22.11.0 (LTS)
- **npm version:** 10.9.0