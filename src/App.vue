<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
import NavbarMenu from './components/NavbarMenu.vue'
</script>

<template>
    <div class="grid grid-rows-2">
      <MenuBar />
      <NavbarMenu />
    </div>
 

  <!-- <header>
    <div class="wrapper">
      <div class="bg-green-400 text-xs">hi</div>
      <h1 class="text-3xl font-bold underline text-yellow-500">
    Hello world!
  </h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
