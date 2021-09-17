var responsive = "roll"
var turns = 3
const scoreBoardPoint = document.querySelectorAll('.scoreboardYou')
const threeOfKind = document.getElementById('threeOf')
const fourOfKind = document.getElementById('fourOf')
const smallStraight = document.getElementById('smallStraight')
const largeStraight = document.getElementById('largeStraight')
const fullHouse = document.getElementById('fullHouse')
const chance = document.getElementById('chance')
const yahtzee = document.getElementById('yahtzee')
const fullhouseRegex = /(\d)\1{1}/
const threeofakindRegex = /(\d)\1{2}/
const fourofakindRegex = /(\d)\1{3}/
const yahtzeeRegex = /(\d)\1{4}/
const smallstraightRegex = /(1234|2345|3456)/
const largestraightRegex = /(12345|23456)/

// var result = diceRoll(1, 6)

// function diceRoll(min, max) {
//     var min = Math.ceil(min);
//     var max = Math.floor(max);
//     var roll1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     var roll2 = Math.floor(Math.random() * (max - min + 1)) + min;
//     var roll3 = Math.floor(Math.random() * (max - min + 1)) + min;
//     var roll4 = Math.floor(Math.random() * (max - min + 1)) + min;
//     var roll5 = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(roll1);
//     console.log(roll2);
//     console.log(roll3);
//     console.log(roll4);
//     console.log(roll5);
// }
//  document.getElementById(responsive).onclick = function() {
//         diceroll(1, 6)

//     }
// document.getElementById("roll").onclick = result;

//function dieroll() {
//   var result = [];
//    for (var i = 0; i < 5; i++){
//      result.push("&#x268" + Math.floor(Math.random() * 6) + ";");
//    }
//    return result;
//  }

var images = ["/images/dice 1.png", "/images/Dice 2.png", "/images/Dice 3.png", "/images/Dice 4.png", "/images/Dice 5.png", "/images/Dice 6.png"]

function dieroll() {
    for (let i = 1; i < 6; i++) {
        if (hold[i] == 1)
            console.log(document.getElementById("dice" + i))
        currentDice = document.getElementById("dice" + i)
        currentNumber = Math.floor(Math.random() * 6 + 1)
        currentDice.src = images[currentNumber - 1]
        console.log(currentNumber)

    }
}

document.getElementById(responsive).onclick = function () {
    dieroll(1, 6)

}

let rollCount = 3;
const rollBtn = document.getElementById('roll');
const turnsDiv = document.getElementById('turns')

rollBtn.addEventListener('click', () => {
    rollCount--;
    if (rollCount > 0) {
        console.log('roll')
    } else {
        rollBtn.setAttribute('disabled', true)
    }
    turnsDiv.innerText = rollCount;
})

var dice = new Array(0, 0, 0, 0, 0, 0);
var hold = new Array(0, 0, 0, 0, 0, 0);














// let diceData = [
//   {
//     value: undefined,
//     status: "active"
//   },
//   {
//     value: undefined,
//     status: "active"
//   },
//   {
//     value: undefined,
//     status: "active"
//   },
//   {
//     value: undefined,
//     status: "active"
//   },
//   {
//     value: undefined,
//     status: "active"
//   },
// ]

// const diceDivs = document.querySelectorAll('.dice')

// diceDivs.forEach( (dice) => {
//   dice.addEventListener('click' , () => {

//     if (dice.dataset.status == 'active') {
//       dice.dataset.status = 'locked';
//       diceData[dice.dataset.index].status = 'locked';

//     } else {
//       dice.dataset.status = 'actuve';
//       diceData[dice.dataset.index].status = 'active';
//     }

//     console.log(diceData)
//   })
// })
