<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper bg-red-300"
    >
      <swiper-slide class="rounded-lg"
        >
        <div class="h-20 w-20"><img
          src="../assets/fries.svg"/> 
        </div>
        <div class="flex justify-center font-bold text-2xl">پیش غذا</div>
        </swiper-slide
      ><swiper-slide
        ><img
          src="../assets/salad.svg" /></swiper-slide
      >
      <!-- <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
      ><swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-9.jpg"
      /></swiper-slide> -->
    </swiper>
    <div class="container mx-auto px-auto">
      <div class="grid grid-cols-2">
        <div class="flex">
          <div class="w-10 h-10 mx-4">
            <img src="../assets/grill-fries.jpg"/>
          </div>
          <div class="grid grid-cols-3">
            <h2>سیب زمینی گریل</h2>
            <p>Grilled potato fries</p>
            <h2>۹۰ هزار تومان</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  // import "./style.css";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
  </script>
<style>
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>