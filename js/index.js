console.log("I'm ready");
// Iteration 1: Names and Input
let hacker1 = 'Josh';
console.log("The driver's name is " + hacker1);
let hacker2 = 'Dani';
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker1.length){

    console.log('The driver has the longest name, it has' + hacker1.length + 'characters');

}
else if (hacker1.length < hacker1.length){

    console.log('It seems the navigator has the longest name, it has' + hacker2.length + 'characters');

}

else {

    console.log('Wow, you both have equally long names,' + hacker1.length +  ' characters!!');
}
// Iteration 3: Loops ------ 3.1
let strings = "";
for (let i = 0; i < hacker1.length; i++) {
    strings += hacker1[i].toUpperCase() + " ";
}
console.log(strings);
//-------------------

//3.2

let dReverse = "";

for (let i = hacker2.length - 1; i >=0; i--) {
    dReverse += hacker2[i] + " ";
}

console.log(dReverse);

//---------------------
//3.3

let driver = hacker1;
let navigator = hacker2;
let lexicographicOrder = driver.localeCompare(navigator)
if (lexicographicOrder == -1) {
    console.log("The driver's name goes first.");
} else if (lexicographicOrder == 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both got the same name?");
}




