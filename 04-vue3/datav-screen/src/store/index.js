import { createStore } from 'vuex'

export default createStore({
  state: {
    test: {
      a: 1
    }
  },
  mutations: {
    setTestA(state, value) {
      this.state.test.a = value
    }
  },
  actions: {
    asyncActionVuex({ commit }, value) {
      setTimeout(() => {
        commit('setTestA', value)
      }, 1200)
    }
  },
  modules: {}
})
