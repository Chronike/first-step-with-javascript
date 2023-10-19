//Implement a welcomeMsg function.
function welcomeMsg(name) {
  return "Willkommen " + name;
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

//Implement a calcGrossPrice function.
function calcGrossPrice(price, tax) {
  return price * tax + price;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//Implementieren Sie eine addPositiveFunktion.
function addPositive(number1, number2) {
  return number1 + number2;
}
console.log(addPositive(2, 3));

function addPositive(number1, number2) {
  return number1 - number2;
}
console.log(addPositive(3, -5));

function addPositive(number1, number2) {
  return (number1 + number2) * -1;
}
console.log(addPositive(-1, -8));
