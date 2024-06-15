import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pan'
    }, 
    {
      path: '/:categoria', 
      name: 'productos', 
      conponent: () => import('@/views/ProductosView.vue'),
      props: true,
    }   
  ]
})

export default router
