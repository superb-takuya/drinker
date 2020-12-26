export const state = () => ({
  id: "",
  iconURL: "",
  credit: 0,
  nickName: "",
})

export const mutations = {
    setUser(state,payload) {
      state.id = payload.id;
      state.iconURL = payload.iconURL;
      state.credit = payload.credit;
      state.nickName = payload.nickName;
    },
    clearUser(state){
      state.id = "";
      state.iconURL = "";
      state.credit = 0;
      state.nickName = "";
    }
  }
  
export const getters = {
  getUser(state){
    return {
      id: state.id,
      iconURL: state.iconURL,
      credit: state.credit,
      nickName: state.nickName,
    }
  }
}