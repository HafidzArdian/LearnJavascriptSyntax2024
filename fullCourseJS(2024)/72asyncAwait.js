// async =   async = makes a function return a promise
//          await = makes an async function wait for a promise

//          allows you write asynchronous code in a asynchronous manner
//          async doesnt have resolve or reject parameter
//          everything after await is placed in an even queue

function walkdog() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dogwalked = true;
  
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
  
  // walkdog()
  //   .then((value) => {
  //     console.log(value);
  //     return cleankitchen();
  //   })
  //   .then((value) => {
  //     console.log(value);
  //     return takeouttrash();
  //   })
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .then(() => {
  //     console.log("I am done");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  
  async function doChores() {
    try {
      const walkDogResult = await walkdog();
      console.log(walkDogResult);
      const cleanKitchenResult = await cleankitchen();
      console.log(cleanKitchenResult);
      const takeOutTrashResult = await takeouttrash();
      console.log(takeOutTrashResult);
  
      console.log("I am done");
    } catch (error) {
      console.error(error);
    }
  }
  
  doChores();
  