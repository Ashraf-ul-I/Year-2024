
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {FIREBASE_API,FIREBASE_URL} from './environment'
const firebaseConfig = {
  apiKey: FIREBASE_API,

  authDomain: "ecommerce-52b1c.firebaseapp.com",

  databaseURL: FIREBASE_URL,

  projectId: "ecommerce-52b1c",

  storageBucket: "ecommerce-52b1c.appspot.com",

  messagingSenderId: "935135151168",

  appId: "1:935135151168:web:5e8e34effc6b14152b8ba5",

  measurementId: "G-G8TGKW1E5S"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export { db };
