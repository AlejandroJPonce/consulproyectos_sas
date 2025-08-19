import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes de página
import AboutUs from '../pages/AboutUs.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/conocenos', component: AboutUs },
  { path: '/servicios', component: HomePage },
  { path: '/galeria', component: HomePage },
  // Agrega más rutas aquí
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router