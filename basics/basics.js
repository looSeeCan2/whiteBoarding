/// 1. asign a string, num, boolean, array to a variable and log it to the console
const cars = "bmw";
console.log(cars);

var num = 1;
console.log(num);

let colors = false;
console.log(colors);

const myArray = [0, 1, 2, 3];
console.log(myArray);

const myArray2 = [cars, num, colors];
console.log(myArray2);

/// 2. write the syntax for a for loop
// debugger;
for (let i = 0; i < 4; i++) {
  console.log(i);
}

/// 3. write the syntax for a conditional statement. (if)
if (colors === true) {
  console.log("buy the car");
} else {
  console.log("don't buy the car");
}

/// 4. write the syntax for a function. Dont forget to call it.
function myFunction2() {
  console.log("this is cool");
}
myFunction();

/// 5. write the syntax for a function with a parameter. Dont forget to call it.
function myFunction(name, age, height) {}
myFunction();

/// 6. Lets combine all these in function
function finalFunction(name) {
  if (name === "Luciano") {
    console.log("That is my name.");
  } else {
    console.log("That is not my name!");
  }
}
finalFunction("Luciano");
