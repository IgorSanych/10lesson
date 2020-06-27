"use strict";

// Объекты в JavaScript это так называемые ассоциативые массивы которые присутствуют в др языках на пример PHP

// const obj = new Object(); // УСТАРЕВШАЯ КОНСТРУКЦИЯ ПОСТРОЕНИЯ ОБЪЕКТА.

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('Test');
	}
};

options.makeTest();

const {
	border,
	bg
} = options.colors;
console.log(border);

// console.log(Object.keys(options).length); // выводит колличество массивов 

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойства ${key} имеет значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Свойства ${key} имеет значение ${options[key]}`);
		counter++;
	}
}
console.log(counter);