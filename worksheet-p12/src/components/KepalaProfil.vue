<script setup>
defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header class="header-baris">
    <h1>{{ profil.nama }}</h1>
    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#daftar-lagu">Daftar Lagu</a></li>
        <li><a href="#tambah-lagu">Tambah Lagu</a></li>
        <li><a href="#tentang-saya">Tentang Saya</a></li>
      </ul>
    </nav>
  </header>
</template>