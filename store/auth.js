import firebase from '@/plugins/firebase';

export const state = () => ({
  loginedUserId: "",
  loginFailed: false
})


export const mutations = {
  setLoginedUserId(state,payload) {
    state.loginedUserId = payload.userId
  },
  setLoginFailed(state,payload) {
    state.loginedUserId = payload.status
  }
}

export const getters = {
  loginedUserId (state) {
    return state.loginedUserId
  },
  loginFailed (state) {
    return state.loginFailed
  }
}

export const actions = {
  async signIn({ commit },payload) {
    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(rslt => {
      commit({
        type:   "setLoginedUserId",
        userId: rslt.user.uid,
      });
    }).catch((error) => {
      commit({
        type:   "setLoginFailed",
        status: true,
      });
    });
  }
}