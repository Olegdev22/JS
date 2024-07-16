'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}
// console.log(options.name)
//
// delete options.name;
// console.log(options);
console.log(`Через метод Object.keys: ${Object.keys(options).length}`)   // узнать сколько пар/ключей в объекте

const {border, bg} = options.colors// деструткуризация объекта - достать свойства объекта, вложенные в объетк
console.log(`Результат деструткризации: ${border}`)

// цикл перебора ключ: значение в объекте
let counter = 0; // посчитаем сколько всего ключ/значение в объекте со вложеными объектами
for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let value in options[key]) {
            console.log(`Свойство ${value} имеет значение: ${options[key][value]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение: ${options[key]}`);
        counter++;
    }

    console.log(`Если считать по старинке через счетчик: ${counter} пар`)
}
