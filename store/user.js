import firebase from '@/plugins/firebase'
const firestorage = firebase.storage()

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
  },
  setUserNickName(state,payload){
    state.nickName = payload.nickName;
  },
  setUserIconURL(state, payload){
    state.iconURL = payload.iconURL;
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
  },
  getUserId(state){
    return state.id;
  }
}

export const actions = {
  uploadIconToStrage: (context, payload) => {
    return new Promise((resolve, reject) => {
      const uploadTask = firestorage.ref('users/'+ payload.userId + payload.file.name).put(payload.file).then(snapshot => {
        console.log(snapshot);
        snapshot.ref.getDownloadURL().then(url => {
          resolve(url)
        });
      });
    });
  },
  updateUserIconURL: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('users').doc(payload.userId).update({
        iconURL: payload.iconURL
      }).then(() => {
        resolve();
      });
    });
  },
  updateUser(id, nickName, display, iconURL, introduct, freeTime, salary, zoom, line, discode, other){
    return firebase.firestore().collection('users').doc(id).set({
      nickName: nickName,
      display: display,
      iconURL: iconURL,
      introduct: introduct,
      freeTime: freeTime,
      salary: salary,
      chatApps: {
        zoom: zoom,
        line: line,
        discode: discode,
        other: other,
      },
      updatedAt: new Date(),
    });
  }
}