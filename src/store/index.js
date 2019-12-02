import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import auth from './auth'

Vue.use(Vuex)

export default function () {
  return new Vuex.Store({
    modules: {
      article,
      auth
    },
    strict: process.env.DEV
  })
}
