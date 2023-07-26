import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
SwiperClass.use([/* swiper modules... */])

const app = createApp(App)

app.use(router)
app.use(VueAwesomeSwiper)

app.mount('#app')
