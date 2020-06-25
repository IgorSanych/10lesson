"use strict";

console.log("arr" + " - object");
console.log(4 + +" - object");
console.log(4 + +"5"); // Унарный плюс плюс который ставиться перед определённым аргументом


// Инкремент, Дикремент

let incr = 10,
	decr = 10;

// incr++; // постфиксные когда после
// decr--;

// ++incr; // префиксные когда перед
// --decr;

console.log(++incr);
console.log(--decr);

// Знак процента возрвращает остаток после деления двух чисел
console.log(5 % 2);

// Знак = называеться присваиванием 
// Знак == называеться сравниваем
// Знак === называеться строгим сравниванием 
// Знак && означает и
// Знак || означает или 

console.log(2 * 4 == 8);
console.log(2 * 4 === "8");
console.log(2 + 2 * 2 !== "6");


const isChecked = false,
	isClose = false;


console.log(isChecked || !isClose);