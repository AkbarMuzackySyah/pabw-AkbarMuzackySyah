<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
import { saring } from '../data.js'
import TombolFilter from './TombolFilter.vue'

const tampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})
</script>

<template>
  <section id="daftar-lagu">
    <h2>Daftar Lagu</h2>

    <p id="muat" v-if="state.memuat" hidden>Memuat data...</p>
    <p id="pesan-Galat-halaman" class="pesan-galat" v-else-if="state.galat">{{ state.galat }}</p>
    <p id="kosong" v-else-if="tampil.length === 0" hidden>Belum ada data lagu.</p>
    
    <figure>
      <img src="/playlist-favorit.webp"
           alt="Tampilan antarmuka playlist lagu musik favorit"
           width="640" height="360" loading="lazy">
      <figcaption>Koleksi playlist lagu favorit yang sering didengarkan sehari-hari.</figcaption>
    </figure>
    
    <div class="table-wrap table-container" v-if="!state.memuat && !state.galat">
      <table>
        <caption>Daftar Lagu Favorit Saya</caption>
        <thead>
          <tr>
            <th scope="col">Judul lagu</th>
            <th scope="col">Penyanyi</th>
            <th scope="col">Pencipta</th>
            <th scope="col">Durasi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lagu in tampil" :key="lagu.id">
            <th scope="row">{{ lagu.judul }}</th>
            <td>{{ lagu.penyanyi }}</td>
            <td>{{ lagu.pencipta }}</td>
            <td>{{ lagu.durasi }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <TombolFilter />
  </section>
</template>