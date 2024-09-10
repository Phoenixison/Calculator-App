let btngroup = document.querySelectorAll('.btns')
let p = document.querySelector('p')
let display = document.getElementById('display')

function addToScreen(a) {
    display.value += a;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(e) {
        display.value = "Error";
        alert("You have entered wrong value !");
    }
}

function clearScreen() {
    display.value = "";
}

