import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIH0qiiegwIudOSV7hfmXFLEcCaaMHCog",
    authDomain: "facebook-3461c.firebaseapp.com",
    databaseURL: "https://facebook-3461c.firebaseio.com",
    projectId: "facebook-3461c",
    storageBucket: "facebook-3461c.appspot.com",
    messagingSenderId: "385734878374",
    appId: "1:385734878374:web:326cb7853ceae5aea48067",
    measurementId: "G-Z51TRYPG6K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;