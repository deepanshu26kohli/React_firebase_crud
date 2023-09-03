import {initializeApp} from 'firebase/app';
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDLINKtmZ2DDrrO3Xb2PEFOdhnIpYsW4_s",
    authDomain: "fir-tut-c2fe0.firebaseapp.com",
    projectId: "fir-tut-c2fe0",
    storageBucket: "fir-tut-c2fe0.appspot.com",
    messagingSenderId: "991988210877",
    appId: "1:991988210877:web:a86fd81d2964670a63ebd4",
    measurementId: "G-9LZ0S7GH3S"
  };
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}