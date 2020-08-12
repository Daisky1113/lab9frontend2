import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: null,
    userName: '',
    productInfo: {
      productOwner: '',
      productName: '',
      tecTopix: '',
      tecDetail: '',
      serviceDetail: '',
    },
    UI: {
      dialog: false
    },
  },
  mutations: {
    setProductInfo(state, payload) {
      Object.assign(state.productInfo, payload)
    },
    setUser(state, payload) {
      state.uid = payload.uid
      state.userName = payload.displayName
    },
    clearUser(state) {
      state.uid = null
      state.userName = ''
    },
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
    async postProductInfo({ state, commit }, payload) {
      console.log(commit)
      console.log(payload)

      const productData = {
        productOwner: state.userName,
        ...payload
      }

      const docRef = firebase.firestore().collection('products').doc(state.uid)
      await docRef.set(productData)
      commit('setProductInfo', productData)
    },
    async signup({ commit }, payload) {
      console.log('サインアップ')
      console.log(commit)
      console.log(payload)

      const response = await firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.passWord)
      const user = response.user
      console.log('response')

      // ユーザーオブジェクトにユーザー名を設定する
      // このユーザーオブジェクトはfirebase.auth().currentUserの返り値と同じもの
      // ログイン時はこのユーザーオブジェクトを使う
      await user.updateProfile({
        displayName: payload.userName
      })
      console.log('displayName updated')
      console.log(user)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      commit('setUser', { uid: user.uid, displayName: user.displayName })
    },

    async login({ commit }, payload) {
      console.log('ログイン')
      console.log(commit)
      console.log(payload)

      const response = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.passWord)
      const user = response.user
      console.log(user)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      commit('setUser', { uid: user.uid, displayName: user.displayName })
    },

    logout({ commit }) {
      console.log('ログアウト')
      firebase.auth().signOut()
      commit('clearUser')
    },
  },
  modules: {
  }
})
