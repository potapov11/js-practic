
'use strict';

const box = document.getElementById('box'); 
//!Получение элемента по Id
console.log(box);


const btns = document.getElementsByTagName('button')[2];
//!Получение нескольких элементов в виде псведомассива
console.log(btns);

//!Псевдомассив не подвержен изменениям, поэтому обращаться к элементам необходимо только через запись с индексом

//!Получение элемента по классу
const circles = document.getElementsByClassName('circle');

//!Метод querySelectorAll
const hearts = document.querySelectorAll('.heart'); //Получение псевдомассива
console.log(hearts);

hearts.forEach(function(item) { //Перебор псевдомассива с помощью forEach
    console.log(item);
});

