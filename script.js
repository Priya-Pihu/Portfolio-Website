const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

let link = document.querySelector("#linkedin");
link.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/priya-das-97b749254/", "_blank");
})
let insta = document.querySelector("#insta");
insta.addEventListener('click', ()=>{
    window.open("https://www.instagram.com/dora_priya_2117?igsh=MWY0Nmd1cXR4czNmbA==", "_blank");
})
let git = document.querySelector("#git");
git.addEventListener('click', ()=>{
    window.open("https://github.com/Priya-Pihu", "_blank");
})
let faceb = document.querySelector("#faceb");
faceb.addEventListener('click', ()=>{
    window.open("https://github.com/Priya-Pihu", "_blank");
})