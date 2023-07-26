<template>
  <div class="container mx-auto py-10">
    <swiper :slides-per-view="4" :space-between="10">
      <swiper-slide
        ><div>
          <img src="../assets/fries.svg" /><span class="flex justify-center">پیش غذا</span>
        </div>
      </swiper-slide>
      <swiper-slide
        ><div @click="showSaladBar"><img src="../assets/salad.svg" /><span class="flex justify-center">سالاد</span></div>
      </swiper-slide>
      <swiper-slide
        ><div @click="showPasta"><img src="../assets/plate.svg" /><span class="flex justify-center">بشقاب</span></div>
      </swiper-slide>
      <swiper-slide
        ><div><img src="../assets/burger.svg" /><span class="flex justify-center">برگر</span></div>
      </swiper-slide>
      <swiper-slide
        ><div><img src="../assets/pasta.svg" /><span class="flex justify-center">پاستا</span></div>
      </swiper-slide>
      <swiper-slide
        ><div>
          <img src="../assets/sandwich.svg" /><span class="flex justify-center">ساندویچ</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container-fluid bg-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 bg-primary-200" v-if="salad">
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600">سیب زمینی گریل</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600">سیب زمینی گریل</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 bg-primary-900" v-if="pasta">
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600"> سالاد</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600">سیب زمینی گریل</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 bg-secondary-600">
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600"> سالاد</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
        <div class="flex bg-gray-100 p-4 rounded-xl justify-end">
          <div class="m-4 relative">
            <h2 class="flex justify-end text-amber-600">سیب زمینی گریل</h2>
            <p class="flex justify-end">Grilled potato fries</p>
            <h2 class="flex justify-end items-center text-gray-600 bottom-0 right-0 absolute">
              هزار تومان <span>90 </span>
            </h2>
          </div>
          <div class="w-[150px] h-[200px] right-0">
            <img src="../assets/grill-fries.jpg" class="h-full w-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      pishGhaza: true,
      salad: false,
      pasta: false,
      slides: [
        {
          image: '../assets/fries.svg',
          title: 'پیش غذا'
        },
        {
          image: '../assets/salad.svg',
          title: 'Slide 2'
        }
        // Add more slides as needed
      ],
      activeSlide: null
    }
  },
  methods: {
    changeStatusPishGhaza() {
      this.pishGhaza = true
    },
    showSaladBar() {
      this.salad = true;
      console.log(this.salad)
    },
    showPasta() {
      this.pasta = true;
      console.log(this.pasta)
    },
  }
}
</script>
<style lang="postcss">
.swiper-slide {
  @apply bg-gray-50/50 rounded-lg py-10 flex justify-center cursor-pointer;
}
</style>
