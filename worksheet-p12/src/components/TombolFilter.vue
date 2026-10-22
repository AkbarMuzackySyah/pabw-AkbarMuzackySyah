<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div id="filter" class="filter-container" style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <button 
      class="tombol-filter"
      :class="{ aktif: state.kategoriAktif === 'semua' }" 
      @click="pilihKategori('semua')">
      Semua
    </button>
    <button 
      class="tombol-filter"
      :class="{ aktif: state.kategoriAktif === 'Pop Jawa' }" 
      @click="pilihKategori('Pop Jawa')">
      Pop Jawa
    </button>
    <button 
      class="tombol-filter"
      :class="{ aktif: state.kategoriAktif === 'Dangdut Koplo' }" 
      @click="pilihKategori('Dangdut Koplo')">
      Dangdut Koplo
    </button>
    <button 
      class="tombol-filter"
      :class="{ aktif: state.kategoriAktif === 'Hip-Hop Jawa' }" 
      @click="pilihKategori('Hip-Hop Jawa')">
      Hip-Hop Jawa
    </button>
  </div>
</template>