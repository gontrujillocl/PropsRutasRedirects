import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'
import Administrador from '../views/Administrador.vue'
import Simple from '../views/Simple.vue'
import Avanzado from '../views/Avanzado.vue'
import NoEncontrado from '../views/NoEncontrado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: 'inicio'  */ '../views/Inicio.vue')
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: () => import(/* webpackChunkName: 'sobremi'  */ '../views/SobreMi.vue'),
    alias: '/Acerca'
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: 'contacto'  */ '../views/Contacto.vue'),
    alias: '/Contactarme'
  },
  {
    path: '/Post/:entrada',
    component: Post,
    children: [{
      path: '/Articulo',
      name: 'Articulo',
      component: () => import(/* webpackChunkName: 'articulo'  */ '../views/Articulo.vue')
    }]
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/Administrador',
    component: Administrador,
    children: [{
      path: '/Administrador/Simple',
      component: Simple,
      name: 'simple'
    },
    {
      path: '/Administrador/Avanzado',
      component: Avanzado,
      name: 'avanzado'

    },
    {
      path: '/Administrador/*',
      component: NoEncontrado,
      name: 'NoEncontrado'
    }
  ]

  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/portada',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
