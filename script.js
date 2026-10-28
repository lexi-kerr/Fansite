let leukejstekst = document.querySelector("#leukejstekst")
leukejstekst.style.fontFamily = "Arial";
leukejstekst.style.margin = "10px";

let myInput = document.querySelector("#myInput");
let naam = document.querySelector("#naam");
let myButton = document.querySelector("#myButton");
let myButton2 = document.querySelector("#myButton2");


myButton.addEventListener("click", myFunc);
myButton2.addEventListener("click", myAge);

function myFunc() {
    fanpage_tekst.innerHTML = myInput.value;
}

let someage = 40;

function myAge() {
    if(naam.value < someage){
        welkomTitel.innerHTML = "His age is less than " + someage;

        welkomTitel.style.backgroundColor = "green";
        leukejstekst.innerHTML = "Jippie!";
    }else{
        welkomTitel.innerHTML = "His age is greater than " + someage;
        welkomTitel.style.backgroundColor = "red";
        leukejstekst.innerHTML = "Oeh....";
    }
}

function leesInput() {
    welkomTitel.innerHTML += naam.value;
}

//knop.addEventListener("click", leesInput);


let fanpage_tekst = document.querySelector("#fanpage_tekst");
let welkomTitel = document.querySelector("#welkomTitel");


