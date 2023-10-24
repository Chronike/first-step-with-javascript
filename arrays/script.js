//Implement a removeItem function.
//1.Der erste Parameter ist ein Array.
//2.Der zweite Parameter ist eine Zahl. Es handelt sich um den nicht auf Null basierenden Index des Elements, das gelöscht werden soll.
//3.Entfernen Sie das Element und geben Sie ein Array zurück.
//4. Stellen Sie sicher, dass das ursprüngliche Array nicht mutiert wurde.

// TODO: Implement the removeItem function

function removeItem(array, num) {
  const arrayRemove = structuredClone(array);
  arrayRemove.splice(num - 1, 1);
  return arrayRemove;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//Aufgabe 2.
//Implement a sumOfCharacters function.
//Die Funktion hat einen Parameter, bei dem es sich um ein Array handelt.
//Überprüfen Sie den Typ jedes Array-Eintrags. Wenn es sich um eine Zeichenfolge handelt, speichern Sie die Anzahl der Zeichen.
//Die Funktion gibt die Gesamtsumme aller Zeichen zurück.

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
      count += arr[index].length;
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
