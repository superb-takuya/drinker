import  firebase  from '~/plugins/firebase/index.js';

export default {
  getUser(uid){
    return firebase.firestore().collection('users').doc(uid).get()
  },

  createUserWithEmailAndPassword(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email ,password)
  },

  signInWithEmailAndPassword(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },

  updateUser(uid, data){
    return firebase.firestore().collection('users').doc(uid).set(data)
  },

  signOut() {
    return firebase.auth().signOut();
  }
}