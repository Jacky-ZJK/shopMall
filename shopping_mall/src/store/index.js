import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


const state = {
  showMainTabBar: true,
  shopCart: [],
  flag: true
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    
  }
})


export default store