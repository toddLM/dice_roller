let dieRolls = [];

let diceRollButton = document.querySelector("#rollButton");
let numDice = document.querySelector("#numDice");
let totalSpan = document.querySelector("#total");
let showAllRollsBtn = document.querySelector("#showAllBtn");
let rollsList = document.querySelector("#allRolls");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



diceRollButton.addEventListener("click", function (event) {
    let howManyToRoll = numDice.value
    //console.log(howManyToRoll)

    let sum = 0;
    for (let i = 1; i <= howManyToRoll; i++) {
        let currentRoll = getRandomIntInclusive(1, 6)
        dieRolls.push(currentRoll);
        sum += currentRoll;

    }

    totalSpan.innerHTML = sum
})

showAllRollsBtn.addEventListener("click", function (event) {
    for (let i = 1; i < dieRolls.length; i++) {
        rollsList.innerHTML += "<li>" + dieRolls[i] + "</li>"

        
    }
})
