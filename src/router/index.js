import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
<<<<<<< HEAD
    routes,
=======
    mode: 'history',
    base: process.env.BASE_URL,
    routes
>>>>>>> 15daac7e73249cabca243e66dccb35709ba6dd16

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
<<<<<<< HEAD
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
=======
    // mode: process.env.VUE_ROUTER_MODE,
    // base: process.env.VUE_ROUTER_BASE
>>>>>>> 15daac7e73249cabca243e66dccb35709ba6dd16
  })

  return Router
}
