import firebase from '@/plugins/firebase'
const firestorage = firebase.storage()

export const state = () => ({
  id: "",
  iconURL: "",
  credit: 0,
  nickName: "",
})

export const mutations = {
  userSetter(state,payload) {
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
  },
  userNickNameSetter(state,payload){
    state.nickName = payload.nickName;
  },
  userIconURLSetter(state, payload){
    state.iconURL = payload.iconURL;
  }
}
  
export const getters = {
  userGetter(state){
    return {
      id: state.id,
      iconURL: state.iconURL,
      credit: state.credit,
      nickName: state.nickName,
    }
  },
  userIdGetter(state){
    return state.id;
  }
}

export const actions = {
  getUserByIdAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('users').doc(payload.id).get().then((res) => {
        resolve(res.data())
      });
    });
  },
  createUserAction:(context, payload) =>{
    return new Promise((resolve, reject) =>{
      firebase.firestore().collection('users').doc(payload.id).set({
        nickName: payload.nickName,
        display: false,
        iconURL:"/images/default-image.png",
        introduct: "",
        freeTime: "",
        chatApps: {
          zoom: false,
          line: false,
          discode: false,
          other: false,
        },
        salary: 0,
        credit: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then(()=>{
        resolve();
      });
    })
  },
  updateUserAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('users').doc(payload.id).update({
        nickName: payload.nickName,
        display: payload.display,
        introduct: payload.introduct,
        freeTime: payload.freeTime,
        salary: payload.salary,
        chatApps: {
          zoom: payload.zoom,
          line: payload.line,
          discode: payload.discode,
          other: payload.other,
        },
        updatedAt: new Date(),
      }).then(() => {
        resolve();
      });
    });
  },
  uploadIconToStrageAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      const uploadTask = firestorage.ref('users/'+ payload.id + payload.file.name).put(payload.file).then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          resolve(url)
        });
      });
    });
  },
  updateUserIconURLAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('users').doc(payload.id).update({
        iconURL: payload.iconURL
      }).then(() => {
        context.commit('userIconURLSetter', {iconURL: payload.iconURL});
        resolve();
      });
    });
  },
}