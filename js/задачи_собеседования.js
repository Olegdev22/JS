"use strict";

/*
* Какое будет выведено значение: let x = 5; alert( x++ ); // 6
 Чему равно такое выражение: [ ] + false - null + true ? // NaN
 Что выведет этот код: let y = 1; let x = y = 2; alert(x); // 2
 Чему равна сумма [ ] + 1 + 2 // string 12
 Что выведет этот код: alert( "1"[0] ) // 1
 Чему равно 2 && 1 && null && 0 && undefined ? // null
 Есть ли разница между выражениями? !!( a && b ) и (a && b)? // false
 Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3
 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // false
 Что выведет этот код: alert( +"Infinity" ); // infinity
 Верно ли сравнение: "Ёжик" > "яблоко" // false
 Чему равно 0 || "" || 2 || undefined || true || falsе  // 2
* */

const restorantData = {
	menu: [
		{
			name: 'Salad Caesar',
			price: '14$'
		},
		{
			name: 'Pizza Diavola',
			price: '9$'
		},
		{
			name: 'Beefsteak',
			price: '17$'
		},
		{
			name: 'Napoleon',
			price: '7$'
		}
	],
	waitors: [
		{
			name: 'Alice',
			age: 22
		},
		{
			name: 'John',
			age: 24
		}
	],
	averageLunchPrice: '20$',
	openNow: true
};

function isOpen(prop) {
	let answer = '';
	prop ? answer = 'Открыто' : answer = 'Закрыто';
	
	return answer;
}

console.log(restorantData.openNow)

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);
	
	copy.waitors = [{name: 'Mike', age: 32}];
	return copy;
}

console.log(transferWaitors(restorantData));