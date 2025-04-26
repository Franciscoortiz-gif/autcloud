import { ManageAccount } from './firebaseConnect.js';

document.getElementById("formul").addEventListener('submit',(event) => {
  event.preventDefault();

  const email = document.getElementById("floatingInput1").value;
  const password = document.getElementById("floatingPassword").value;

  const account = new ManageAccount();
  account.register(email, password);

});

console.log('Formulario de Registro');
