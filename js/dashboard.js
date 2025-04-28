
const open = document.getElementById("add");
const page = document.getElementById("addnew");
const close = document.getElementById("save");

import {regisdata} from "./firebaseConnect.js";
open.addEventListener("click", () =>{
    page.style.animation = "ind .6s"
    page.style.opacity = "1";
    page.style.pointerEvents = "auto";

})

close.addEventListener("click", (e) =>{
    e.preventDefault();
    let nombredev = document.getElementById("nombre").value;
    let activo = document.getElementById("activo").checked;
    let ip = document.getElementById("Ip").value;
    let protoc = document.getElementById("proto").value;
    console.log(nombredev + ip + protoc + activo);

    if(nombredev && ip !== ""){
        regisdata(nombredev,ip,protoc);
        page.style.opacity = "0";
        page.style.pointerEvents = "none";
        page.style.animation = "outd .6s"
    }else{
        alert("Los campos no puedes estar vacios");
        console.log(nombredev + ip + protoc + activo);
    }
    
})
