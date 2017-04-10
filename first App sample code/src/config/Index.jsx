import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyATA9FOu5dZFgjC_FWOG5hjJE1gTu2cCRo",
    authDomain: "react-app-portfolio.firebaseapp.com",
    databaseURL: "https://react-app-portfolio.firebaseio.com",
    projectId: "react-app-portfolio",
    storageBucket: "react-app-portfolio.appspot.com",
    messagingSenderId: "776995038011"
  };
  firebase.initializeApp(config);

  export default firebase;
