import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBOipFDRaiwbzVoPNXfdhiCBGgDVI7-qB8",
  authDomain: "portfolio-blog-3259d.firebaseapp.com",
  databaseURL: "https://portfolio-blog-3259d.firebaseio.com",
  projectId: "portfolio-blog-3259d",
  storageBucket: "portfolio-blog-3259d.appspot.com",
  messagingSenderId: "1038100283972",
  appId: "1:1038100283972:web:7c93fd2e5653c4a9f7b211",
  measurementId: "G-K6E4480Z57"
};

// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;
