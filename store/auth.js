import firebase from '@/plugins/firebase'

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
  getAuthState (state) {
    return state.authrized
  },
}

export const actions = {
  signInWithEmail: (context, payload) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(res => {
        context.commit('setAuthrized', {state: true} );
        resolve(res.user.uid);
      });
    });
  },
}