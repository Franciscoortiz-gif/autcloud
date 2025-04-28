const btnlog = document.getElementById("btn1");
const emailinput = document.getElementById("floatingInput1").value;
const passinput = document.getElementById("floatingPassword").value;
let usercurrent;
import {auth} from "./confire.js";

function login(email,pass){
    auth.createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
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

btnlog.addEventListener('click',(e) =>{
    console.log(e);
    usercurrent = login(emailinput, passinput);
    console.log(usercurrent);
});
    