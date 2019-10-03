import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'北京',
    user:'',
  },
  mutations: {
    setCity(state,val){
      state.city = val
    },
    isLogin(state,val){
      console.log(val);
      state.user = val
    }

  },
  actions: {
    setCity({commit},val){
      commit('setCity',val);
    }
  }
})
