"use strict";

let array = [0, 1, 24, 5 ,18, 10]
// array.pop()
// console.log(array)

// перебор элементов в массивоподобном объекте
for (let arrayElement of array) {
	console.log(arrayElement)
}

array.forEach(function (number, value, array) {
	console.log(`Номар по порядку: ${value}, значение: ${number}, в массиве: ${array}`)
})
console.log("");

const str = prompt("", "")
const products = str.split(', ')
// console.log(products)
console.log(products.join('; '));

console.log("\n");

array.sort(compareNum)
console.log(array)
function compareNum(a, b) {
	return a-b;
}