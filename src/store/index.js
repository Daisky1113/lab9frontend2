import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UI: {
      dialog: false
    },
  },
  mutations: {
    toggleDialog(state) {
      state.UI.dialog = !state.UI.dialog
    },
    openDialog(state) {
      state.UI.dialog = true
    },
    closeDialog(state) {
      state.UI.dialog = false
    }
  },
  actions: {
    signup({ commit }, payload) {
      console.log('サインアップ')
      console.log(commit)
      console.log(payload)
    },

    login({ commit }, payload) {
      console.log('ログイン')
      console.log(commit)
      console.log(payload)
    },

    logout() {
      console.log('ログアウト')
    },
  },
  modules: {
  }
})
