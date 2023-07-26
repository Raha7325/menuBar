<template>
   <div class="bg-red-300">
      <div class="py-3 flex justify-center">
         <div class="flex items-center justify-center bg-gray-300/50 w-[170px] rounded-3xl">
            <h1 class="font-bold px-8 text-white">Cool Cat</h1>
            <img src="../assets/cool-cat-small.png" class="rounded-full w-10 h-10 right-0"/>
         </div>
      </div>
      <hr />
      <swiper-menu-list />
      <!-- <NavbarMenu /> -->
   </div>
</template>

<script lang="ts" setup>
// import NavbarMenu from './NavbarMenu.vue'
import SwiperMenuList from './SwiperMenuList.vue';
</script>
