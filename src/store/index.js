import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import auth from './auth'
import items from './items'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quant: 7,
    items: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    article,
    auth,
    items
  },
  strict: process.env.DEV
})
