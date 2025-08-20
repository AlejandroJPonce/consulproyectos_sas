import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes de página
import AboutUs from '../pages/AboutUs.vue'
import HomePage from '../pages/HomePage.vue'
import Services from '../pages/Services.vue'
import Gallery from '../pages/Gallery.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/conocenos', component: AboutUs },
  { path: '/servicios', component: Services },
  { path: '/galeria', component: Gallery },
  // Agrega más rutas aquí
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router