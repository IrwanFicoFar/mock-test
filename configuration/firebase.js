import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD89oxPLnFV4taaWxYHQwX67_BsZI-jDd8",
    authDomain: "mock-test-1c21f.firebaseapp.com",
    databaseURL: "https://mock-test-1c21f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mock-test-1c21f",
    storageBucket: "mock-test-1c21f.appspot.com",
    messagingSenderId: "130728344866",
    appId: "1:130728344866:web:552d94c1a027dcea2ef97b"
  };

  const app = initializeApp(firebaseConfig);
  
  export const authFirebase = getAuth(app);
  export const databaseFirebase = getDatabase(app);