export const state = () => ({
  loginedUserId: "",
  authenticated: false
})

export const mutations = {
  setLoginedUserId(state,payload) {
    state.loginedUserId = payload.userId
  },
  setAuthenticateStatus(state,payload) {
    state.authenticated = payload.status
  }
}

export const getters = {
  loginedUserId (state) {
    return state.loginedUserId
  },
  authenticateStatus (state) {
    return state.loginFailed
  }
}

export const actions = {
}