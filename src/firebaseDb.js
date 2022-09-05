import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcNCX8QesNLMVcDzhpDZJAW5vLUnlo9eU",
  authDomain: "crud-9b220.firebaseapp.com",
  projectId: "crud-9b220",
  databaseURL: "https://crud-9b220-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "crud-9b220.appspot.com",
  messagingSenderId: "805511178701",
  appId: "1:805511178701:web:8f832dca534158862f7c84",
  measurementId: "G-RE8YK2GGTR"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
