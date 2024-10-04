// Error = An Object that is created to represent a problem that occurs
//        Occur often with user input or establishin a connection

// try{}  =  encloses code that might potentially cause an error
// catch{} =  catch and handle any thrown Errors from try {}
// finally{} =  (optional), always executes. used mostly for clean up
//              ex. close files, close connections, release resources

// Network Error
// Promise Rejection
// Security Error

// console.log("Hello World");

// try {
//   console.log("x");
//   // Network Error
//   // Promise Rejection
//   // Security Error
// } catch (error) {
//   console.error(error);
// } finally {
//   // close files
//   // close connections
//   // release resources
//   console.log("This always executed");
// }
// console.log("You Have Reached The END !");

try{
    const dividend = window.prompt("Enter Dividend :");
    const divisor = window.prompt("Enter Divisor :");
  
    if(divisor == 0){
      throw new Error("Divisor cannot be 0");
    }
  
    if(typeof dividend !== 'number' || typeof divisor !== 'number'){
      throw new Error("Input must be a number");
    }
  
    const result = dividend / divisor;
    console.lag(result)
  
  }catch(error){
    console.error(error);
  }
  
  console.log("You Have Reached The END !");
  
  