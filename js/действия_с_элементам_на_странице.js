"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper')

// box.style.backgroundColor = 'blue' // инлайновая запись. Приоритет над стилями в css
// box.style.width = '500px'

box.style.cssText = 'background-color: yellow';

btns[1].style.borderRadius = '100%' // инлайновая запись. Приоритет над стилями в css
circle[2].style.backgroundColor = 'red'

hearts.forEach(item => {
    item.style.backgroundColor = '#000'
})

// создание элементов
const div = document.createElement('div')
div.classList.add('black'); // добавление класса

document.body.append(div); // добавление элемента в body

/* // вставка элемента в блок wrapper вконец
wrapper.append(div);

// вставка элемента в начало блока
wrapper.prepend(div)

// добавление нового элемента перед конкретным элементом в верстке
hearts[0].after(div)

// удаление одного элемента
circle[0].remove()

// замена эленета. Указываем какой элемент, за тем каким элементом заменяем
hearts[0].replaceWith(circle[0])*/

// редактирование элемента
div.innerHTML = "<h1>Hello</h1>"

// получение от пользователя какой-то информации, в защищенном методе
div.textContent = "<h13>Hello</h13>"

// вставка html кода перед блоком
div.insertAdjacentHTML('beforebegin', '<h2>World</h2>')