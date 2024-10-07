// callback hell = situation where you have nested callbacks
//                 and you dont know how many times you will need

function task1(callback) {
  setTimeout(() => {
    console.log("task 1");
    callback();
  }, 2000);
  
}
function task2(callback) {
  setTimeout(() => {
    console.log("task 2");
    callback();
  }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("task 3");
        callback();
      }, 3000);
}
function task4(callback) {
    setTimeout(() => {
        console.log("task 4");
        callback();
      }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {console.log("End of tasks")});
    });
  });
})
