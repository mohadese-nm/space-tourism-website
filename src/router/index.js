import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import ('../views/homePage.vue')
  },
  
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/destination/destinationPage.vue'),
    redirect: {name: 'moon'},
    children: [
      {
        path: '/moon',
        name: 'moon',
        component: ()=> import('../views/destination/moonPage.vue')
      },

      {
        path: '/mars',
        name: 'mars',
        component: ()=> import('../views/destination/marsPage.vue')
      },

      {
        path: '/europa',
        name: 'europa',
        component: ()=> import('../views/destination/europaPage.vue')
      },

      {
        path: '/titan',
        name: 'titan',
        component: ()=> import('../views/destination/titanPage.vue')
      }
    ]
  },
  
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/crew/crewPage.vue'),
    redirect: {name: 'douglas'},
    children: [
      {
        path: '/douglas',
        name: 'douglas',
        component: ()=> import('../views/crew/douglasPage.vue')
      },

      {
        path: '/mark',
        name: 'mark',
        component: ()=> import('../views/crew/markPage.vue')
      },

      {
        path: '/victor',
        name: 'victor',
        component: ()=> import('../views/crew/victorPage.vue')
      },

      {
        path: '/anousheh',
        name: 'anousheh',
        component: ()=> import('../views/crew/anoushehPage.vue')
      }
    ]
  },
  
  {
    path: '/technology',
    name: 'technology',
    component: () => import ('../views/technologyPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
