// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export class ManageAccount {
  register(email, password) {
    email = document.getElementById("floatingInput1").value;
    password = document.getElementById("floatingPassword").value;
    auth.createUserWithEmailAndPassword(email, password)
      .then((_) => {
        window.location.href = "https://franciscoortiz-gif.github.io/autcloud/login.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    email = document.getElementById("floatingInput1").value;
    password = document.getElementById("floatingPassword").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "https://franciscoortiz-gif.github.io/autcloud/index.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
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
}
