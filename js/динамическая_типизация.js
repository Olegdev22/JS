"use strict";

// To string.
// Сложение числа со строкой = строка
console.log(typeof (null + ''))

const num = 5
console.log('http://someSite.com/catalog/' + num)

//To Number
console.log(+'3')
console.log(parseInt('12.3px', 10))

// let answ = +prompt('', '')
// console.log(answ)

// To boollean
// 0, '', null, undefined, NaN - false
let switcher = null
if (switcher){
	console.log('Working')
}

switcher = 1
if (switcher){
	console.log(Boolean ('Working'))
}