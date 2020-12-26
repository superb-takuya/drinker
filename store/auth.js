export const state = () => ({
  authrized: false,
})

export const mutations = {
  setAuthrized(state,payload) {
    state.authrized = payload.state;
  },
  clearAuthinfo(state){
    state.authrized = false;
  }
}

export const getters = {
  getAuthStatus (state) {
    return state.authrized
  },
}