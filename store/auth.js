import firebase from '@/plugins/firebase';

export const state = () => ({
  authrized: false,
  loginedUserId: "",
  loginedUserIconURL: "",
  loginedUserCredit: 0,
  loginedUserNickName: "",
})

export const mutations = {
  setAuthrized(state,payload) {
    state.authrized = payload.loginState;
    state.loginedUserId = payload.userId;
    state.loginedUserIconURL = payload.userIconURL;
    state.loginedUserCredit = payload.userCredit;
    state.loginedUserNickName = payload.userNickName;
  },
  clearAuthinfo(state){
    state.authrized = false;
    state.loginedUserId = "";
    state.loginedUserIconURL = "";
    state.loginedUserCredit = 0;
    state.loginedUserNickName = "";
  }
}

export const getters = {
  getAuthStatus (state) {
    return state.authrized
  },
  getLoginedUser(state){
      return {
          userID: state.loginedUserId,
          iconURL: state.loginedUserIconURL,
          credit: state.loginedUserCredit,
          userNickName: state.loginedUserNickName,
      }
  }
}