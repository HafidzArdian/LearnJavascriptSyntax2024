// Closure =  A function defined inside of another function,
//             the inner function has acces to the variables
//              and scope of the outer function.

//              Allows for private variables and state maintenance
//              used frequently in Js Frameworks : React, Vue, Angular

// function outer(){

//     let message = "Hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();

// function createCounter(){

//     let count = 0;
//     function increase(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }
//     return {increase, getCount};
// }

// const counter = createCounter();
// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();

// console.log(`the current count is ${counter.getCount()}`);

function createGame() {
    let score = 0;
  
    function increaseScore(points) {
      score += points;
      console.log(`+${points}pts`);
    }
  
    function decreaseScore(points) {
      score -= points;
      console.log(`-${points}pts`);
    }
  
    function getScore() {
      return score;
    }
    return { increaseScore, decreaseScore, getScore };
  }
  
  const game = createGame();
  
  game.increaseScore(10);
  game.increaseScore(20);
  
  game.decreaseScore(20);
  
  console.log(`Score: ${game.getScore()}`);