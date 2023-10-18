//Seleção de elementos
const form = document.querySelector("form");
const name = document.querySelector("#name");
const about = document.querySelector("#sobre");
const number = document.querySelector("#number");
const instruction = document.querySelector("#instruction");
const time = document.querySelector("#time");
const sendBtn = document.querySelector("#contact");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log("Enviado!");  
});
