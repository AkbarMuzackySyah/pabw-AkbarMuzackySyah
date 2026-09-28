# Pertemuan 5 — Layout Modern: Flexbox dan Grid
* Berkas gaya yang akan dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`.
* Tema: Hijau Spotify.
* Warna utama: `#16a34a` (`--green-700`), dipilih karena memberikan nuansa segar, modern, dan identik dengan pemutar musik digital.
## Token yang saya tetapkan
| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#16a34a` | Tombol play, tautan, dan penanda utama |
| `--color-fg` | `#09090b` | Warna teks utama |
| `--color-bg` | `#f4f4f5` | Latar halaman utama |
| `--color-surface` | `#ffffff` | Latar kartu playlist dan panel |
| `--color-border` | `#e4e4e7` | Garis tepi kartu dan pemisah |
| `--color-danger` | `#ef4444` | Pesan peringatan / form tidak sah |
| `--color-focus` | `#22c55e` | Garis fokus navigasi keyboard |
| `--radius-md` | `12px` | Sudut membulat kartu dan elemen |
| `--space-4` | `1.5rem` | Jarak standar antar elemen |

### Penerapan Tata Letak (Grid dan Flexbox)
*Kerangka halaman: `display: grid; grid-template-rows: auto 1fr auto; min-height: 100dvh;`
*Navbar: `display: flex; gap: var(--space-4); align-items: center;`
*Isi dua kolom: `display: grid; grid-template-columns: 16rem 1fr; gap: var(--space-6);` 
*Galeri adaptif: `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`

#### Catatan penggunaan AI
-untuk membatu saya memahami kode lebih dalam terutama pada fungsi dari setip elemen itu sendiri