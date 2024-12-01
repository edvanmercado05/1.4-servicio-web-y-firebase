// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyB_fMftq5-RjtiuhExO4-ZolXoAo-8l2Pk",
  authDomain: "bibliotecateocallib.firebaseapp.com",
  projectId: "bibliotecateocallib",
  storageBucket: "bibliotecateocallib.appspot.com",
  messagingSenderId: "263376353164",
  appId: "1:263376353164:web:5505fb71cb1cf1a17188a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
