import Vue from 'vue'
import Vuex from 'vuex'
import video from './video'
import list from './list'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    video,
    list
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
