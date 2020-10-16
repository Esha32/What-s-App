import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAK9mIrxdKile5x4RsQd-YCvo4UmcGbnk4",
    authDomain: "what-s-app-clone-28e3c.firebaseapp.com",
    databaseURL: "https://what-s-app-clone-28e3c.firebaseio.com",
    projectId: "what-s-app-clone-28e3c",
    storageBucket: "what-s-app-clone-28e3c.appspot.com",
    messagingSenderId: "445963778274",
    appId: "1:445963778274:web:a090ab10d209884f4dc6bb",
    measurementId: "G-D6BBXH0PNW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;