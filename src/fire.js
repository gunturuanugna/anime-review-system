import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDOuKvhE-d4CM7iLpBxFW3GkHR0BOs_Uec",
  authDomain: "restaurant-finder-2b0c7.firebaseapp.com",
  projectId: "restaurant-finder-2b0c7",
  storageBucket: "restaurant-finder-2b0c7.appspot.com",
  messagingSenderId: "300999278855",
  appId: "1:300999278855:web:c500644813b61b419c85a2"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;