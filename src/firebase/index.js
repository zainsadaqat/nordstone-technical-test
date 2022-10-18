import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBGWFWN-Ggrze1IdRMYPFGKCd76ORQ6GV8',
  authDomain: 'nordstone-firebase-auth.firebaseapp.com',
  projectId: 'nordstone-firebase-auth',
  storageBucket: 'nordstone-firebase-auth.appspot.com',
  messagingSenderId: '847339873963',
  appId: '1:847339873963:web:ed5f36c095ed53a4a7b9ee',
  measurementId: 'G-5JW33RZL2S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
