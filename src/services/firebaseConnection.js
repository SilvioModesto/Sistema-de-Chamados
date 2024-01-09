
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbBMjOmxwg8lndCfadk3yPiOSV0Ol4crI",
  authDomain: "tickets-55920.firebaseapp.com",
  projectId: "tickets-55920",
  storageBucket: "tickets-55920.appspot.com",
  messagingSenderId: "382849811459",
  appId: "1:382849811459:web:6d5945318e98c199433a36",
  measurementId: "G-G3ZMGHXZ5L"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };