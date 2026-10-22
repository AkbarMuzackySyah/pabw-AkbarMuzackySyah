<script setup>
import { ref } from 'vue'
import { tambahLaguState } from '../state.js'

const judul = ref('')
const penyanyi = ref('')
const pencipta = ref('')
const durasi = ref('')

function tambahLaguBaru() {
  if (!judul.value.trim() || !penyanyi.value.trim()) return

  const laguBaru = {
    id: Date.now(),
    judul: judul.value.trim(),
    penyanyi: penyanyi.value.trim(),
    pencipta: pencipta.value.trim(),
    durasi: durasi.value.trim(),
    kategori: 'Pop Jawa',
    dikategorikan: true
  }

  tambahLaguState(laguBaru)

  judul.value = ''
  penyanyi.value = ''
  pencipta.value = ''
  durasi.value = ''
}
</script>

<template>
  <section id="tambah-lagu">
    <h2>Tambah Lagu</h2>
    <form id="form-lagu" @submit.prevent="tambahLaguBaru" class="form-kolom" novalidate>
      <p>
        <label for="judul">Judul lagu: </label>
        <input type="text" id="judul" v-model="judul" required>
      </p>
      <p>
        <label for="penyanyi">Penyanyi: </label>
        <input type="text" id="penyanyi" v-model="penyanyi" required>
      </p>
      <p>
        <label for="pencipta">Pencipta: </label>
        <input type="text" id="pencipta" v-model="pencipta" required>
      </p>
      <p>
        <label for="durasi">Durasi (menit:detik): </label>
        <input type="text" id="durasi" v-model="durasi" required>
      </p>
      <button type="submit">Tambah Lagu</button>
    </form>
  </section>
</template>