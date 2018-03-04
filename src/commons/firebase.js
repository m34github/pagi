import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAFn7y3Ie0OfO_KIlMwvPKiPPDiHrZZc3Q",
  authDomain: "pagi-pwa.firebaseapp.com",
  databaseURL: "https://pagi-pwa.firebaseio.com",
  projectId: "pagi-pwa",
  storageBucket: "pagi-pwa.appspot.com",
  messagingSenderId: "823243632615"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
