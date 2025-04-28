
export const nameuser = document.getElementById("username");
export const emailuser = document.getElementById("useremal");
export const imageuser = document.getElementById("profid");

const open = document.getElementById("add");
const page = document.getElementById("addnew");
const close = document.getElementById("save");
const nombredev = document.getElementById("nombre").value;
let activo = document.getElementById("activo").value;
let ip = document.getElementById("Ip").value;
let protoc = document.getElementById("proto").value;

import {regisdata} from "./firebaseConnect.js";

open.addEventListener("click", () =>{
    page.style.animation = "ind .6s"
    page.style.opacity = "1";
    page.style.pointerEvents = "auto";

})

close.addEventListener("click", () =>{
    if(nombredev && ip !== null){
        regisdata(nombredev,ip,protoc)
        page.style.opacity = "0";
        page.style.pointerEvents = "none";
        page.style.animation = "outd .6s"
    }else{
        alert("Los campos no puedes estar vacios");
        console.log(nombredev + ip + protoc + activo);
    }
    
})
