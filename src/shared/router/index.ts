import { createRouter, createWebHistory } from 'vue-router'
import presentation from '@/presentation/layouts/Presentation.vue'
import ErrorPage from '@components/ErrorPage.vue'
//Routes
import { catalogoRoute } from '@/catalog/router/index'
//Stores
import Cookies from 'js-cookie';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: presentation,
      /* beforeEnter: (to, from, next) => {
        if(Cookies.get('sesionActive') !== 'true'){
          next();
        } else {
          next({ name: 'principal' });
        }
      } */
    },
    {
      ...catalogoRoute
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'presentation' }
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    }
  ],
})

export default router
