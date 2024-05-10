// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import {
  getFirestore, connectFirestoreEmulator
} from 'firebase/firestore';
import {
  getAuth, connectAuthEmulator
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbZ1HFERyia_aggOUiCAWqtK1kEK8yqIQ",
  authDomain: "notification-test-1d095.firebaseapp.com",
  projectId: "notification-test-1d095",
  storageBucket: "notification-test-1d095.appspot.com",
  messagingSenderId: "870186496208",
  appId: "1:870186496208:web:da398a20e14d8371782ed5",
  measurementId: "G-22BEJQM64H"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Setup emulators for development
if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
}

export { db, auth };
