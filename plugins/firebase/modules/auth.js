import  firebase  from '~/plugins/firebase/index.js';

export default {
  createUserWithEmailAndPassword(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email ,password)
  },
  signInWithEmailAndPassword(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signOut() {
    return firebase.auth().signOut();
  }
}