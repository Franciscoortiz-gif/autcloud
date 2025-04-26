import { auth } from './firebaseConnect.js';

const user = auth.currentUser;
const name = document.getElementById("username");
const emailuser = document.getElementById("useremal");
if(user !== null){
    name.innerHTML = user.displayName;
    emailuser.innerHTML = user.email;

}