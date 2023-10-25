const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const about = document.querySelector("#sobre");
const number = document.querySelector("#number");
const instruction = document.querySelector("#instruction");
const time = document.querySelector("#time");
const sendBtn = document.querySelector("#contact");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkForm();

    console.log(enviarform());

});

function checkname() {
    const nameValue = nameInput.value;

       if(nameValue === "") {
        errorInput(nameInput, "Campo Obrigatório!")
    } else {
        const formItem = nameInput.parentElement;
        formItem.className = "box-input"
    }
};

function checkabout() {
    const aboutValue = about.value;

    if(aboutValue === "") {
        errorInput(about, "Campo Obrigatório!")
    } else {
        const formItem = about.parentElement;
        formItem.className = "box-input"
    }
};


function checknumber() {
    const numberValue = number.value;

    if(numberValue === "") {
        errorInput(number, "Campo Obrigatório!")
    } else {
        const formItem = number.parentElement;
        formItem.className = "box-input"
    }
};

function checkinstruction() {
    const instructionValue = instruction.value;

    if(instructionValue === "") {
        errorInput(instruction, "Campo Obrigatório!")
    } else {
        const formItem = instruction.parentElement;
        formItem.className = "box-input"
    }
};

function checktime() {
    const timeValue = time.value;

    if(timeValue === "") {
        errorInput(time, "Campo Obrigatório!")
    } else {
        const formItem = time.parentElement;
        formItem.className = "box-input"
    }
};

function checkForm() {
  
    checkname();
    checkabout();
    checknumber();
    checkinstruction();
    checktime();

    const formItems = form.querySelectorAll(".box-input");

    const isValid = [...formItems].every((item) => {
        return item.className === "box-input"
    });

    if(isValid){
        alert("Cadastrado com sucesso!")
    }
};

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("#a")
   
    textMessage.innerText = message;
    formItem.className = "box-input error"
};

function enviarform(){

    var nameValue = document.querySelector("#name").value;
    var aboutValue = document.querySelector("#sobre").value;
    var numberValue = document.querySelector("#number").value;
    var instructionValue = document.querySelector("#instruction").value;
    var timeValue = document.querySelector("#time").value;

    const formValue = {                                 
        name: nameValue,
        about: aboutValue,
        phone: numberValue,
        instruction: instructionValue,
        schedule: timeValue,
    };

    return formValue;
};

number.addEventListener("input", () => {
    var limparValor = number.value.replace(/\D/g, "" ).substring(0,11);

    var numerosArray = limparValor.split("");

    var numeroFormato = "";

    if(numerosArray.length > 0) {
        numeroFormato += `(${numerosArray.slice(0,2).join("")})`;
    }

    if(numerosArray.length > 2) {
        numeroFormato += ` ${numerosArray.slice(2,7).join("")}`;
    }

    if(numerosArray.length > 7) {
        numeroFormato += `-${numerosArray.slice(7,11).join("")}`;
    }

    number.value = numeroFormato
})