export const profil = {
        nama: "Akbar Muzacky Syah",
        nim: "25523218",
        peran: "Mahasiswa Informatika & Penggemar Musik",
        genreFavorit: ["Pop Jawa", "Dangdut Koplo", "Hip-Hop Jawa"],
        jumlahLagu: 3
};


export function buatPerkenalan({ nama, peran }) {
    return `Pengguna: ${nama} | Peran: ${peran}`;
}

export const formatGenre = (daftar) => daftar.join(" • ");
