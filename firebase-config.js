// firebase-config.js

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC93dtof5hhdhm-3k9Gp8rkkZA3Em7eHX0",
    authDomain: "gufcs-28cb0.firebaseapp.com",
    databaseURL: "https://gufcs-28cb0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gufcs-28cb0",
    storageBucket: "gufcs-28cb0.appspot.com",
    messagingSenderId: "563013105555",
    appId: "1:563013105555:web:cdea7bbd2f5a9453041a66",
    measurementId: "G-T70GM9R1EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the Firestore instance for use in other modules
export { db };
