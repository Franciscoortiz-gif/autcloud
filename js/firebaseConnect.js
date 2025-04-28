// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { nameuser, emailuser, imageuser} from "./dash.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, sendPasswordResetEmail, onAuthStateChanged, inMemoryPersistence,setPersistence} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
//BAse de datos no relacional (NoSQL)
export const db = getFirestore(app);


 onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const name = user.displayName;
      nameuser.innerHTML = name;
      const email = user.email;
      if(email !== null){
        let srtima = email.toString();
        let srtcor = srtima.substr(0,2);
        imageuser.innerHTML = srtcor.toUpperCase();
      }
      emailuser.innerHTML = email;
      
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
  async function reguser(email, empresa, password) {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        mail: email,
        empresa: empresa,
        pass: password,
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }
  export {reguser};

  async function regisdata(nombredev, ip,protoc){
    try {
      const docRef = await addDoc(collection(db, "Dispositivos"), {
        nombre: nombredev,
        ip: ip,
        protocolo: protoc,
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }
export {regisdata};
function authenticate(email, password) {
  
  setPersistence(auth, inMemoryPersistence)
  .then(() => {
    signInWithEmailAndPassword(auth, email, password)
    .then((_) => {
      
      // Mostrar alerta de inicio de sesión exitoso
      alert("inicio de sesión exitoso");
      let usuario = auth.currentUser;
      console.log(usuario);
      window.location.href = "https://franciscoortiz-gif.github.io/autcloud/index.html";
    })
    .catch((error) => {
      console.error(error.message);
              // Mostrar alerta de error de inicio de sesión
              alert("Error al iniciar sesión: " + error.message);
    });
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
export {authenticate}

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth,email, password)
      .then((_) => {
        window.location.href = "https://franciscoortiz-gif.github.io/autcloud/login.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        console.log(currentUser)
      })
      .catch((error) => {
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
      });
  }


  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "https://franciscoortiz-gif.github.io/autcloud/index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  resetpass(email){
    sendPasswordResetEmail(auth, email).then(()=>{
        //Envia email
        alert("Correo de recuperacion enviado")
    })
    .catch((error) =>{
        const errorcode = error.code;
        const errorMessage = error.message;
        alert("No se a podido enviar el correo de recuperacion" + errorMessage)
    });
  }
}

let curren = null;
auth.onAuthStateChanged((user) => (curren = user));
  console.log(curren);
 
