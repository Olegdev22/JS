'use strict'

// Место для третьей задачи
function getMathResult(number, n) {
    if (typeof (n) !== 'number' || n <= 0) {
        return number;
    }

    let str = ''

    for (let i = 1; i <= n; i++) {
        if (i === n) {
            str += `${number * i}`;
        } else {
            str += `${number * i}---`;
        }
    }
    return console.log(str);
}

getMathResult(10, 3);


const str = 'test'
console.log(str.toUpperCase())

const fruit = 'Some fruit'
console.log(fruit.indexOf('f'))

const logg = 'Hello World!';
console.log(logg.slice(6, 11));

const num = 12.4
console.log(Math.round(num));

const test = '13.9px';
console.log(parseInt(test))

///
console.log('\n');
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
// (тоже базовая математика, иногда используется в создании анимаций).
// Эта функция принимает в себя целое число со значением длины ребра куба.
//     Ответ выведите в формате строки, который изображен в
// Если в функцию попал неправильный аргумент
// или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// Место для первой задачи

function calculateVolumeAndArea(length) {

    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        console.log("При вычислении произошла ошибка");
    } else {
        let volume = 0,
            area = 0;

        volume = length * length * length;
        area = 6 * (length * length);

        console.log(`Объем куба ${volume}, площадь всей поверхности ${area}`);
    }
}

calculateVolumeAndArea(9)
console.log('\n');
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
//     "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
function getCoupeNumber(setNumber) {
    if (typeof (setNumber) !== 'number' || setNumber < 0 || !Number.isInteger(setNumber)) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if (setNumber === 0 || setNumber > 36) {
        console.log(`Таких мест в вагоне не существует`);
    } else {
        let cupeNumber = Math.ceil((setNumber / 4))
        console.log(`Номер купе: ${cupeNumber}`)
    }
}

getCoupeNumber(7)
console.log("Задание следующее");
// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
//  Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
//
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
//
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        console.log("Ошибка, проверьте данные");
    }

    const hours = Math.floor(minutesTotal / 60),
        minutes = minutesTotal % 60;

    let hoursStr = '',
        minutesStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов'
    }

    switch (minutes) {
        case 10:
        case 20:
        case 30:
        case 40:
        case 50:
            minutesStr = 'минут';
            break;
        default:
            minutesStr = 'минуты';
    }

    return console.log(`Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`);
}

getTimeFromMinutes(2)

console.log("Задание следующее");

/*
*Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
* Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11
* */
function findMaxNumber(num1, num2, num3, num4) {
    if (typeof (num1) !== 'number' ||
        typeof (num2) !== 'number' ||
        typeof (num3) !== 'number' ||
        typeof (num4) !== 'number') {
        return 0;
    } else {
        return console.log(Math.max(num1, num2, num3, num4));
    }
}

findMaxNumber(-1, 5, 6.6, 0)
console.log("Задание следующее Фибоначи без рекурсии");
/*
* Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
* Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
* Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"
* */
function fib(number) {
    if (typeof (number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        console.log("Ошибка, проверьте данные");
    }

    let result = '';
    let first = 0
    let second = 1;

    for (let i = 0; i < number; i++) {
        if (i + 1 === number) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    return console.log(result);
}
fib(7)