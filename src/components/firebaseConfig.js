// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyC4miu9oDm0wb6S4PxVeLepAGSx21mm1rA",
  authDomain: "digital-ally-979c3.firebaseapp.com",
  projectId: "digital-ally-979c3",
  storageBucket: "digital-ally-979c3.firebasestorage.app",
  messagingSenderId: "174000626085",
  appId: "1:174000626085:web:fe5c1f8c95f066bb8af04c",
  measurementId: "G-KJTZT2PHX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Only import and initialize analytics in a browser environment
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        const analytics = getAnalytics(app);
        console.log('Firebase Analytics initialized');
      } else {
        console.log('Firebase Analytics not supported in this environment');
      }
    });
  });
}

export {firestore, storage};