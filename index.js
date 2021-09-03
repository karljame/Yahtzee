var responsive = "roll"

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

function dieroll() {
    var result = [];
    for (var i = 0; i < 5; i++){
      result.push("&#x268" + Math.floor(Math.random() * 6) + ";");
    }
    return result;
  };