<script setup>
import { onMounted, watch } from 'vue'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'
import { profil } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())   
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi content">
      <div class="konten-utama">
        <DaftarProyek />
        <FormKontak />
      </div>

      <aside class="sidebar">
        <section id="tentang-saya">
          <h2>Tentang Saya</h2>
          <p>Saya adalah seorang mahasiswa yang suka mendengarkan musik. Saya memiliki koleksi playlist lagu favorit yang terus bertambah setiap hari.</p>
        </section>
      </aside>
    </main>

    <footer>
      <p>{{ profil.nama }} · {{ profil.nim }} · {{ profil.tahun ?? '2026' }}</p>
    </footer>
  </div>
</template>