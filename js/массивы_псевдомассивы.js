"use strict";

let array = [0, 1, 4, 5 ,8, 10]
// array.pop()
// console.log(array)

// перебор элементов в массивоподобном объекте
for (let arrayElement of array) {
	console.log(arrayElement)
}

array.forEach(function (number, value, array) {
	console.log(`Номар по порядку: ${value}, значение: ${number}, в массиве: ${array}`)
})
