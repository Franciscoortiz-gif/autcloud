import { ManageAccount } from './firebaseConnect.js';

document.getElementById("formul").addEventListener('submit',(event) => {
  event.preventDefault();

  const email = document.getElementById("floatingInput1").value;
  const password = document.getElementById("floatingPassword").value;

  const account = new ManageAccount();
  account.register(email, password);

});


const pass = document.getElementById("floatingPassword"),
      icon = document.getElementById("iconeye");

icon.addEventListener('click', (e) =>{
  if(pass.type === "password"){
    pass.type = "text";
    icon.classList.remove("bx-show-alt");
    icon.classList.add("bx-hide");
  }else{
    pass.type = "password";
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show-alt");
    
  }
})

console.log('Formulario de Registro');
