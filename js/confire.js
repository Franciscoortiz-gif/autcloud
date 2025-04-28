import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js'
import {getAuth} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZee6lyFqHynH50WS5BEU8_2MZOSY9bnk",
    authDomain: "cloud-2cab7.firebaseapp.com",
    projectId: "cloud-2cab7",
    storageBucket: "cloud-2cab7.firebasestorage.app",
    messagingSenderId: "246856450734",
    appId: "1:246856450734:web:513c712598fc630646a33f",
    measurementId: "G-N1XRBSQYJ5"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
