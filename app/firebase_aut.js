 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyB_fMftq5-RjtiuhExO4-ZolXoAo-8l2Pk",
  authDomain: "bibliotecateocallib.firebaseapp.com",
  projectId: "bibliotecateocallib",
  storageBucket: "bibliotecateocallib.appspot.com",
  messagingSenderId: "263376353164",
  appId: "1:263376353164:web:5505fb71cb1cf1a17188a9"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)