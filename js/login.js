import { ManageAccount } from './firebaseConnect.js';

document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("floatingInput1").value;
  const password = document.getElementById("floatingPassword").value;

  const account = new ManageAccount();
  account.authenticate(email, password);
  
});

console.log('Formulario de Inicio de Sesión');
