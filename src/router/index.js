import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Settings from '../views/Settings.vue'
import SettingsAll from "../views/SettingsAll.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/settingsAll',
      name: 'settingsAll',
      component: SettingsAll
    },

  ]
})
