'use strict';

if (4 == 9) {
    console.log('Ok')
} else {
    console.log('No')
}

(4 == 4) ? console.log('Ok') : console.log('No')

const num = 50;
// проверяет на строгое сравнение
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('Не в этот раз');
}

console.log( 5 === 5 && 3 > 1 || 5); // true
