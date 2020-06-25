"use strict";

//  Название функции должно быть глаголом с припиской того над чем выполняется действие. 
// Функции бывают и анонимные, они вызываються один раз, поэтому не обязательно давать им имя 
//  В () аргументы функции
// Аргументов может быть бесконечное колличество
// Когда переменная создана внутри функции она называеться локальной переменной
// Что такое замыкание функции ?
// Замыкание функции это сама функция со всеми внешними переменными которые ей доступны
let num = 20;


function showFirstMessage(text) {
	console.log(text);
	console.log(num);
}

showFirstMessage(`Chaser`);
console.log(num);

// console.log(calc(4, 3));
// console.log(calc(7, 3));
// console.log(calc(6, 4));
// console.log(calc(10, 13));

// function calc(a, b) {
// 	return (a + b);
// console.log('fff');
// }
// После return нельзя ничего задавать потому что ничего не заработае. Код называеться (Unreachable)(Не достежимы код)




function ret() {
	let num = 50;



	return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Существует 3 типа функция
// Function Declaration
function foo() {
	// код
}
// Function Exprassion
let fooo = function () {
	// код
};
// Стрелочные функции
// ()=>

const logger = function () {
	console.log('Chaser');
};

logger();

// const calc = (a, b) => a + b;
// const calc = (a, b) => {return a + b;
//  };