export const state = () => ({
  loginedUserId: "",
})


export const mutations = {
  setLoginedUserId(state,payload) {
    state.loginedUserId = payload.userId
  }
}