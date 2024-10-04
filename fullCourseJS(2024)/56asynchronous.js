// Synchronous = Executes line by line consectivley in a sequential manner
//                code that waits for an operation to complete

// Asynchronous = Allows Multiple operation to be performed concurrently without
//                waiting Doesnt block the execution flows and allows the program
//                to continue

//                (I/O operation, Network request, Fetching data from a server)
//                Handled with: Callbacks, Promises, Async/Await

function func1(callback) {
    setTimeout(() => {
      console.log("task 1");
      callback();
    }, 3000);
  }
  
  function func2() {
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
    console.log("task 5");
  }
  
  func1(func2);
  