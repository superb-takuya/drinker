import firebase from '@/plugins/firebase';

export default ({ app }, inject) => {
  const api = new AuthApi;
  inject('authApi',api)
}

class AuthApi {
  signInWithEmail (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  createUserWithEmail (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signOut () {
    return firebase.auth().signOut();
  }
}
