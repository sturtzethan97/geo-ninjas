import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDZjRxz04YrE_vctxLj2G1pR1YiUbvWHys",
    authDomain: "geo-ninjas-19238.firebaseapp.com",
    databaseURL: "https://geo-ninjas-19238.firebaseio.com",
    projectId: "geo-ninjas-19238",
    storageBucket: "geo-ninjas-19238.appspot.com",
    messagingSenderId: "458783684925",
    appId: "1:458783684925:web:e647899a8795897063ed54",
    measurementId: "G-T5MGTRPCYG"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()