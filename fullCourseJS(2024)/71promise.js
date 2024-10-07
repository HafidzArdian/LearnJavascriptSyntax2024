// Promise = an object that manages asynchronous operations.
//           wrap a promise object aroun {async code}
//            " i promise  to return value "

//          Pending -> Resolved -> Rejected
//          new Promise((resolve, reject) => {async code})

// Do these chore in order

// 1.Walk the dog
// 2.Clean the Kitchen
// 3.Take out the trash

function walkdog() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dogwalked = false;
  
        if (dogwalked) {
          resolve("I am walking the dog");
        } else {
          reject("I am not walking the dog");
        }
  
        resolve("I am walking the dog");
      }, 3000);
    });
  }
  
  function cleankitchen() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const kitchencleaned = true;
        if (kitchencleaned) {
          resolve("I am cleaning the kitchen");
        } else {
          reject("I am not cleaning the kitchen");
        }
      }, 2000);
    });
  }
  
  function takeouttrash() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const trashtaken = true;
        if (trashtaken) {
          resolve("I am taking out the trash");
        } else {
          reject("I am not taking out the trash");
        }
      }, 500);
    });
  }
  
  walkdog()
    .then((value) => {
      console.log(value);
      return cleankitchen();
    })
    .then((value) => {
      console.log(value);
      return takeouttrash();
    })
    .then((value) => {
      console.log(value);
    })
    .then(() => {
      console.log("I am done");
    })
    .catch((error) => {
      console.error(error);
    });
  