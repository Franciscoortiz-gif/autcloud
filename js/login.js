const btnlog = document.getElementById("btn1");
let usercurrent;
import {auth} from "./confire.js";
import {signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js'

function login(emaill,pass){
    signInWithEmailAndPassword(auth,emaill, pass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("inicio de sesion correcto se te ridigira a la pagina principal");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("A ocurrido un error "+ errorMessage);
    });
    let usercur = auth.currentUser;
    if(usercur !== null){
        window.location.href = "https://franciscoortiz-gif.github.io/autcloud/index.html";
    }
    return usercur;
};
document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("floatingInput1").value;
    const password = document.getElementById("floatingPassword").value;
    console.log(email + password);
    usercurrent = login(email, password);
    console.log(usercurrent);
});  
export {usercurrent};
