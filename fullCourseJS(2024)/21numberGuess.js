// number guessing game

const minNUm = 1;
const maxNUm = 100;
const answer = Math.floor(Math.random() * (maxNUm - minNUm + 1));

let attempts = 0;
let guess;
let running = true;

// while (running) {
//     running = false;
// }

while (running) {
  guess = prompt(`Guess a number between ${minNUm} and ${maxNUm}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`"${guess}" is not a number , please enter a valid number`);
  } else if (guess < minNUm || guess > maxNUm) {
    window.alert(`"${guess}" is not between ${minNUm} and ${maxNUm}`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`"${guess}" is too low`);
    } else if (guess > answer) {
      window.alert(`"${guess}" is too high`);
    } else {
      window.alert(`"${guess}" is correct in ${attempts} guesses !`);
      running = false;
    }
  }
}
