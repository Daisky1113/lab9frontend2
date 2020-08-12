import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
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
    async signup({ commit }, payload) {
      console.log('サインアップ')
      console.log(commit)
      console.log(payload)

      const response = await firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.passWord)
      const user = response.user

      console.log(user)
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
