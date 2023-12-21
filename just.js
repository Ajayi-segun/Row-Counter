

 //function for myFunction()
let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("zero");

function myFunction() {
    console.log("This button was clicked");
    count = count += 1;
    countEl.textContent = count;
}
myFunction();

//function for reduce()
function reduce() {
    console.log("This button was clicked");
    count -= 1;
    countEl.textContent = count;
}
reduce();

//function save() 
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}
save();