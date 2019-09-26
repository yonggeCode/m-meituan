import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'南京'
  },
  mutations: {
    setCity(state,val){
      state.city = val
    }
  },
  actions: {
    setCity({commit},val){
      commit('setCity',val);
    }
  }
})
