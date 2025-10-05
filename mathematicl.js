
class Calculator {
  addition(a, b) {
    console.log(`Result: ${a + b}`);
  }

  subtraction(a, b) {
    console.log(`Result: ${a - b}`);
  }

  multiplication(a, b) {
    console.log(`Result: ${a * b}`);
  }

  division(a, b) {
    if (b !== 0) {
      console.log(`Result: ${a / b}`);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
  }
}
function main() {
  const calc = new Calculator();
  const prompt = require("prompt-sync")();

  let choice;

  do {
    console.log("\n--- Calculator Menu ---");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    choice = parseInt(prompt("Enter your choice (1-5): "));

    if (choice >= 1 && choice <= 4) {
      const num1 = parseFloat(prompt("Enter first number: "));
      const num2 = parseFloat(prompt("Enter second number: "));

      switch (choice) {
        case 1:
          calc.addition(num1, num2);
          break;
        case 2:
          calc.subtraction(num1, num2);
          break;
        case 3:
          calc.multiplication(num1, num2);
          break;
        case 4:
          calc.division(num1, num2);
          break;
      }
    } else if (choice !== 5) {
      console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 5);

  console.log("Exiting program. Goodbye!");
}