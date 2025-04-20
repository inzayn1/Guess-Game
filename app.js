let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximun = parseInt(prompt("enter a valid number"));

}

const targetNum= Math.floor(Math.random()* maximum) + 1;

let guess  = prompt("Enter your first guess!(type 'q' to quit)");
let attempts = 1;

while ( parseInt( guess) !== targetNum) {
    if (guess === "q") break; 
    guess = parseInt(guess);
    
    if (guess > targetNum) {
      guess =  prompt("Too high! Enter a new guess!");
      attempts++;
        }
    else if (guess < targetNum) {
        guess= prompt("Too low! Enter a new guess!");
        attempts++;
    }
    else{
        guess= prompt("invalid input! Enter a new guess!");
        }
    }


if (guess === "q") {
    console.log("You quit the game!")
}
else {
console.log(`Congratulations! You got it! it took u ${attempts} guesses `);
}
