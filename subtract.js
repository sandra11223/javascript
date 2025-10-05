function subtractNumbers(a,b) {
  try {
    if (isNaN(a) || isNaN(b)) {
      throw Error("Invalid input:Both inputs must be numbers.");
    }
        return a-b;
  } 
  catch (error) {
    console.error(error.message);
  }
}
console.log(subtractNumbers(10, 5));  
subtractNumbers("abc", 4);