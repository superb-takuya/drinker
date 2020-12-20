import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDI1oq8_PY0WpF1KiF1yp0c43n8bujqFHI",
  authDomain: "hostes-dev.firebaseapp.com",
  databaseURL: "https://hostes-dev.firebaseio.com",
  projectId: "hostes-dev",
  storageBucket: "hostes-dev.appspot.com",
  messagingSenderId: "409465424296",
  appId: "1:409465424296:web:85d32c119d443f7bec759d",
  measurementId: "G-JJRN6960YM"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase