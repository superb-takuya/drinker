import firebase from '@/plugins/firebase';
export const state = () => ({
  authrized: false,
  loginedUserId: "",
  loginedUserIconURL: "",
  loginedUserCredit: 0,
  loginedUserNickName: "",
})

export const mutations = {
  setAuthenticateStatus(state,payload) {
    state.authrized = payload.status
  },
  setLoginedUser(state,payload) {
    state.loginedUserId = payload.userId
    state.loginedUserIconURL = payload.userIconURL
    state.loginedUserCredit = payload.userCredit
    state.loginedUserNickName = payload.userNickName
  },
}

export const getters = {
  authenticateStatus (state) {
    return state.loginFailed
  },
  loginedUserId (state) {
    return state.loginedUserId
  },
  loginedUserIconURL (state) {
    return state.loginedUserIconURL
  },
  loginedUserCredit (state) {
    return state.loginedUserCredit
  },
  loginedUserNickName (state) {
    return state.loginedUserNickName
  },
}

export const actions = {
  async signIn(){
  }
}