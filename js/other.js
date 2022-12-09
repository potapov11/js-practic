// Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.

// //!  Способо через цикл
// var arr = ['Привет, ', 'мир', '!'];

// let text = [];

// for (let value of arr) {
//     text.push(value);
// }
// console.log(text);


// //! Копирование массива при помощи метода Array.from
// let text = Array.from(arr);

// console.log(text);

// var arr = ['Привет, ', 'мир', '!'];
// var str = arr[0] + arr[1] + arr[2]; //в переменной text теперь лежит строка 'Привет, мир!'
// console.log(str);

// const newArr = ['hello ', 'main ', 'world '];
// const cloneNewArr = newArr[0] + newArr[1] + newArr[2];
// console.log(cloneNewArr);


//! Синтаксис записи массива в переменную


// Задача. Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').

// var arr = ['Привет, ', 'мир', '!'];
// arr[0] = 'Пока';

// console.log(arr);

var obj = {
  'Коля':'1000',
 	'Вася':'500',
  'Петя':'200'};

	// Задача. Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

console.log(obj.Петя);
console.log(obj.Коля);

// Задача. Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
//!1
// let arrNum = [];
// for(let i = 1; i <= 5; i++) {
// 	arrNum.push(i);
// }

// console.log(arrNum);

//!2
let arrNum = [];
let counter = 0;
while(counter != 5) {
	counter++;
	arrNum.push(counter);
}

console.log(arrNum);
