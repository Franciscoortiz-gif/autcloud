import {} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js'
import {} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth-compat.js'

const firebaseConfig = {
    apiKey: "AIzaSyAZee6lyFqHynH50WS5BEU8_2MZOSY9bnk",
    authDomain: "cloud-2cab7.firebaseapp.com",
    projectId: "cloud-2cab7",
    storageBucket: "cloud-2cab7.firebasestorage.app",
    messagingSenderId: "246856450734",
    appId: "1:246856450734:web:513c712598fc630646a33f",
    measurementId: "G-N1XRBSQYJ5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();