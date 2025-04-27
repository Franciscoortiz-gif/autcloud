
export const nameuser = document.getElementById("username");
export const emailuser = document.getElementById("useremal");
export const imageuser = document.getElementById("profid");

export const open = document.getElementById("add");
export const page = document.getElementById("addnew");
export const close = document.getElementById("save");

open.addEventListener("click", () =>{
    page.classList.add('show');
    alert("prueba");
})

close.addEventListener("click", () =>{
    page.classList.remove('show');
})
