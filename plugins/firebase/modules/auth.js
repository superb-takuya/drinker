import firebase from '@/plugins/firebase';

export default ({ app }, inject) => {
  const api = new AuthApi;
  inject('authApi',api)
}

class AuthApi {
  createUserWithEmail (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signOut () {
    return firebase.auth().signOut();
  }
}
