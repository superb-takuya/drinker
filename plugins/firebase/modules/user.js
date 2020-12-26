import firebase from '@/plugins/firebase';

export default ({ app }, inject) => {
  const api = new UserApi;
  inject('userApi',api)
}

class UserApi {
  getUserByID (userID) {
    return firebase.firestore().collection('users').doc(userID).get();
  }
}
