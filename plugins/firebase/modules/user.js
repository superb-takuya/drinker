import firebase from '@/plugins/firebase';

export default ({ app }, inject) => {
  const api = new UserApi;
  inject('userApi',api)
}

class UserApi {
  getUserByID (userID) {
    return firebase.firestore().collection('users').doc(userID).get();
  }
  createUser(id, nickName){
    return firebase.firestore().collection('users').doc(id).set({
      nickName: nickName,
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
    });
  }
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
