export const profil = {
        nama: "Akbar Muzacky Syah",
        nim: "25523218",
        peran: "Mahasiswa Informatika & Penggemar Musik",
        genreFavorit: ["Pop Jawa", "Dangdut Koplo", "Hip-Hop Jawa"],
        jumlahLagu: 3
};
export function kalimatPerkenalan() {
  return `Pengguna: ${profil.nama} | Peran: ${profil.peran}`;
}

export const formatGenre = (daftar) => daftar.join(" • ");

export function saring(daftar, kategori) {
  if (!daftar) return [];
  return daftar.filter((lagu) => kategori === "semua" || lagu.kategori === kategori);
}
