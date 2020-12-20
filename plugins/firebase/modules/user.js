import  firebase  from '~/plugins/firebase/index.js';

export default {
  getUser(uid){
    return firebase.firestore().collection('users').doc(uid).get()
  },
  updateUser(uid, data){
    return firebase.firestore().collection('users').doc(uid).set(data)
  },
}