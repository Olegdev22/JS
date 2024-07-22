"use strict";

// если переменной присваивать объект в котором делать изменения, то так же в изначальном объекте они будут

function copy(mainObj) { // Поверхностная копия объекта
	let objCopy = {}
	
	for (let key in mainObj) {
		objCopy[key] = mainObj[key]
	}
	
	return objCopy
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
}

const newNumbers = copy(numbers)

newNumbers.a = 10
newNumbers.c.x = 10

console.log(newNumbers)
console.log(numbers)

// соединение объектов (Поверхностных копий)
const add = {
	d: 17,
	e: 20
}

console.log(Object.assign(numbers, add))

const clone = Object.assign({}, add)
clone.d = 20
console.log(add)
console.log(clone)
console.log("")

// копирование массива
const oldarray = ['a', 'b', 'c']
const newArray = oldarray.slice()

newArray[1] = 'wdwdwdd1'
console.log(oldarray)
console.log(newArray)
console.log('')

// вариант разворачивает массывы в набор данных в массив + свои данные // Спред оператор
const video = ['youtube', 'vimeo', 'rutube'],
		blogs = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet)
console.log('')

function log(a, b, c) {
	console.log(a)
	console.log(b)
	console.log(c)
}

const num = [2, 5, 6]
log(...num)

// вариант для создания поверхностной копии массива
const array = ["a", "b"]
const newAarray = [...array]
console.log(newAarray)

// разворачивание (Спред оператор) для объектов, создания поверхностной копии
const q = {
	one: 1,
	two: 2
}

const newObj = {...q}
newObj.one = 10
console.log(newObj)
console.log(q)

