const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#sobre");
const number = document.querySelector("#number");
const instruction = document.querySelector("#instruction");
const time = document.querySelector("#time");
const sendBtn = document.querySelector("#contact");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkname();  
    checkabout();
    // checknumber();
    // checkinstruction();
    // checktime();
});

function checkname() {
    const nameValue = nameInput.value;

   console.log(nameValue);
};

function checkabout() {
    const aboutInputValue = aboutInput.value;

   console.log(aboutInputValue);
};

function checknumber() {
    const numberValue = number.value;

   console.log(numberValue);
};

function checkinstruction() {
    const instructionValue = instruction.value;

   console.log(instructionValue);
};

function checktime() {
    const timeValue = time.value;

   console.log(timeValue);
};