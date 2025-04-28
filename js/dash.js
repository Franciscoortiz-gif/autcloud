import {usercurrent} from "./login.js";
export const nameuser = document.getElementById("username");
export const emailuser = document.getElementById("useremal");
export const imageuser = document.getElementById("profid");
const useremail = usercurrent.email;

emailuser.innerHTML = useremail;
