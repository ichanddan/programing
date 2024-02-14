// create a game where you start with any random game number. Ask the user to keep guessing game number until the user enters correct value.
console.log("guessing number under 1 to 30");
let game=prompt("guessing the number");
let guess=23;
while (game !=guess) {
    game=prompt(" wrong guessing the number. enter again");
}
console.log("you are correct guessing",game);    




// if (guess==game) {
//     console.log("you are correct guessing",game);    
// } else{
//     console.log("you are wrong guessing",game);
// }