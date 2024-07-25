import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {};

const app = initializeApp(firebaseConfig)

const db = getFirestore()
export const colRef = collection(db, 'messages')
export const auth = getAuth(app)
