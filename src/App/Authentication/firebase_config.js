import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoJNI7HlMInp1jvro9AgswdkqghBpRJP0",
    authDomain: "test-app-40406.firebaseapp.com",
    projectId: "test-app-40406",
    storageBucket: "test-app-40406.appspot.com",
    messagingSenderId: "750187301591",
    appId: "1:750187301591:web:e03cf367dfa7623735fe92"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;