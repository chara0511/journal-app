import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBIsGz8nkbIUtDNyVdtI1dS-VHOCAmRDM0',
  authDomain: 'journal-app-2e9ff.firebaseapp.com',
  databaseURL: 'https://journal-app-2e9ff.firebaseio.com',
  projectId: 'journal-app-2e9ff',
  storageBucket: 'journal-app-2e9ff.appspot.com',
  messagingSenderId: '780006227187',
  appId: '1:780006227187:web:025ac2c144384efad10b86',
  measurementId: 'G-H8BQX92CB9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics().logEvent('notification_received');

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, firebase, googleAuthProvider };
