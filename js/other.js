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


// !1
// let arrNum = [];
// for(let i = 1; i <= 5; i++) {
// 	arrNum.push(i);
// }

// console.log(arrNum);

// //!2
// let arrNum = [];
// let counter = 0;
// while(counter != 5) {
// 	counter++;
// 	arrNum.push(counter);
// }

// console.log(arrNum);

// Задача. Дан многомерный массив arr:

// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// // Выведите с его помощью слово 'голубой'.

// console.log(arr.ru[0]);

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// const arr = ['a', 'b', 'c'];

// function getArr(param) {
// 	console.log(arr);
// }

// getArr(arr);

// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

const arr = [2, 5, 3, 9];

//Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// const arrNewOne = arr[0] * arr[1];
// const arrNewTwo = arr[2] * arr[3];
// const result = arrNewOne + arrNewTwo;
// console.log(result);


//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// console.log(obj['c']);
// console.log(obj.c);


// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
var obj = {
    Коля: '1000', 
    Вася: '500', 
    Петя: '200'
};

function getSalary(newObj) {
    for(let key in newObj) {
        if(key === 'Коля' || key === 'Петя') {
            console.log(newObj[key]);
        }
    }
}

console.log(getSalary(obj));
