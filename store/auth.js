export const state = () => ({
  loginedUserId: "",
})


export const mutations = {
  setLoginedUserId(state,userId) {
    state.loginedUserId = userId
  }
}