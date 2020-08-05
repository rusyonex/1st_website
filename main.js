// Переменные
var myMessage; // a-z, A-Z, 0-9, $, _
myMessage = "Сообщение";

var myNumber = 10.1233;
var myString = "Hello"; // "10.23"
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;



// Числа
// console.log(40 + myNumber);
// console.log(40 - myNumber);
// console.log(40 * myNumber);
// console.log(40 / myNumber);
// myNumber += 1;
// myNumber--;
// console.log(myNumber);
// console.log(Math.ceil(myNumber)); //roud - округление классическое, ceil - округление в большую сторону, floor - округление в меньшую сторону


// var newNumber = 2.457;
// console.log(newNumber.toFixed(1));

// Строки
// console.log("40" + myNumber);
// console.log(myString + " Как дела?");
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

// Массивы
// var names = ["Вася", "Петя", "Леша"];
// console.log(names[1].toUpperCase());

// names[0] = "Маша";
// console.log(names[0]);

// names.push("Руслан");
// console.log(names);


// Условия
// if (5 <= 5 || myNumber > 20) {
// 	console.log("Условие выполнилось");
// }

// if (myNumber > 20) {
// 	console.log("Число меньше 20");
// } else {
// 	console.log("Число больше 20");
// }

// Циклы
// for (var i = 0; i <= 10; i++) {
// 	if (i == 5) {
// 		continue;
// 	}
// 	console.log(i);
// }

// for (var j = 0; j < names.length; j++) {
// 	console.log(names[j]);
// }

// var i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

// Функции
// function sum(x, y) {
// 	return x + y;
// }

// var result = sum(10, 59);
// console.log(sum(2, 12));

// Функции
var myObject = {
	name: "Vasia",
	surname: "Petrovich",
	age: 25,
	getFullName: function() {
		return this.name + " " + this.surname;
	}

};

// myObject.name = "Петя";
console.log(myObject.name);
console.log(myObject.getFullName());