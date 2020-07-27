import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBDw7sYqlkvUd1Ga-MIsyZ8SU1sNY3-XE',
  authDomain: 'save-the-quote.firebaseapp.com',
  databaseURL: 'https://save-the-quote.firebaseio.com',
  projectId: 'save-the-quote',
  storageBucket: 'save-the-quote.appspot.com',
  messagingSenderId: '390143523553',
  appId: '1:390143523553:web:466f4a91e60900134ad5a0',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
