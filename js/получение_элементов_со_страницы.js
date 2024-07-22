"use strict";

const box = document.getElementById('box') // получение только одного элемента
console.log(box)

const btns = document.getElementsByTagName('button') // HTMLCollection
console.log(btns[1])

const circle = document.getElementsByClassName('circle')// HTMLCollection
console.log(circle)

const hearts = document.querySelectorAll('.heart')// HTMLCollection
hearts.forEach(item =>{
	console.log(item)
})

const oneHeart = document.querySelector('.heart') // получение первого элемента по селектору
console.log(oneHeart)
