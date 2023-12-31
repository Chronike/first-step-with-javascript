// Copy the following complete code block to your script.js file and try to spot and fix the errors.
const size = 25;
let result;

/*if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}*/ //falsch

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//Implementieren Sie eine oddEven Funktion.

let oddEven = function (n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//Implementieren Sie eine oldYoung Funktion.
/*function oldYoung(age) {
  if (age >= 50) {
    return "elder person";
  } else if (age >= 16) {
    return "young person";
  } else if (age < 16 && age >= 0) {
    return "children";
  } else {
    return "invalid parameter";
  }
}*/

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid parameter";
  }
  if (age >= 50) {
    return "elder person";
  } else if (age >= 16) {
    return "young person";
  } else if (age < 16 && age >= 0) {
    return "children";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
