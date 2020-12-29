import firebase from '@/plugins/firebase'

export const state = () => ({
  authrized: false,
})

export const mutations = {
  authrizedSetter(state,payload) {
    state.authrized = payload.state;
  },
  clearAuthinfo(state){
    state.authrized = false;
  }
}

export const getters = {
  authStateGetter (state) {
    return state.authrized
  },
}

export const actions = {
  signInWithEmailAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(res => {
        context.commit('authrizedSetter', {state: true});
        resolve(res.user.uid);
      });
    });
  },
  createUserWithEmailAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
        context.commit('authrizedSetter', {state: true});
        resolve(res.user);
      });
    });
  },
  signOutAction: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then( () => {
        resolve();
      });
    });
  },
}