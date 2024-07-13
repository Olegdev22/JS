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
console.log(options.name)

delete options.name;
console.log(options);

// цикл перебора ключ: значение в объекте
for(let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let value in options[key]) {
            console.log(`Свойство ${value} имеет значение: ${options[key][value]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение: ${options[key]}`);
    }
}
