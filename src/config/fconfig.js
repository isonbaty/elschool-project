// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuMkSP9FjmQDZTkDJOB1iVhJ7IlapMoa4',
  authDomain: 'ischool-efb9e.firebaseapp.com',
  projectId: 'ischool-efb9e',
  storageBucket: 'ischool-efb9e.appspot.com',
  messagingSenderId: '239195052750',
  appId: '1:239195052750:web:e38b197d75d5708a14ce9f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
