//Implement a oddNumbers function.

function oddNumbers(number1, number2) {
  //function + parameter
  let result = "";
  if (number1 < 0 || number2 < 0) {
    return "Postive numbers";
  }
  for (let index = number1; index <= number2; index++) {
    if (index % 2 === 1) {
      if (result === "") {
        result = index;
      } else {
        result += "," + index;
      }
    }
  }
  return result;
}
//Lösung 2
/*function oddNumbers(start, end) {
  if (start < 0 || end < 0) {
    return "Both numbers must be positive.";
  }

  let result = "";

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      if (result !== "") {
        result += ",";
      }
      result += i;
    }
  }

  return result;
}*/

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//Implement a charCount function.

function charCount(word, char) {
  let count = 0;
  if (char.length !== 1) {
    //!== ungleich alternative wäre >
    return;
  }

  for (let index = 0; index < word.length; index++) {
    if (word[index].toUpperCase() === char.toUpperCase()) {
      //case insesitive (toUpperCase)
      count = count + 1; //count++ (Numbers)
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
