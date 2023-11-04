import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDyKxZQMc3tKgpofU4-DP1MmA5UFT8yyyY",
  authDomain: "flounge-v2.firebaseapp.com",
  projectId: "flounge-v2",
  storageBucket: "flounge-v2.appspot.com",
  messagingSenderId: "412477555964",
  appId: "1:412477555964:web:a584538523bdd2e0904379"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore()
export const colRef = collection(db, 'messages')
export const auth = getAuth(app)