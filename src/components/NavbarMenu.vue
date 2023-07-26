<template>
  <div class="container-fluid bg-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10" v-show="salad">
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
export default {
  setup() {
    return {
      pishGhaza: true,
      salad: false
    }
  },
  methods: {
    changeStatusPishGhaza() {
      this.pishGhaza = true
    },
    showSaladBar() {
      this.salad =true;
      console.log(this.salad)
    }
  }
}
</script>
<style>
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
