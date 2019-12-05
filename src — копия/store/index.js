import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quant: 7
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    article,
    auth
  },
  strict: process.env.DEV
})
