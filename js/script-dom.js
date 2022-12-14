
// 'use strict';

// const box = document.getElementById('box'); 

// const btns = document.querySelectorAll('button');
// console.log(btns);

// // for(let i = 1; i < 2; i++) {
// // 	btns[i].style.backgroundColor = 'gold';
// // }

// btns.forEach(function(item){
// 	console.log(btns[item]);
// });

const circles = document.getElementsByClassName('circle');
// console.log(circles);


const heart = document.querySelectorAll('.heart');
console.log(heart);
const heartOne = heart[0];
const heartTwo = heart[1];

// box.style.backgroundColor = 'blue'; //! Запись стилей css в одну строку 
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px'; //! Запись нескольких свойств стилей

// btns[1].style.borderRadius = '50%';

// btns.forEach(function(item) {
// 	console.log(item);
// 	// item.style.backgroundColor = 'gold';
// });

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
const div = document.createElement('div'); //! Создаем элемент -1

div.classList.add('black'); //! Присваиваем ему класс black -2

// wrapper.prepend(div);

// document.body.append(div); //! Добавляем элемент в конец блока body

wrapper.append(div);

heartTwo.before(div);

heartOne.after(div);

heartOne.remove();

// document.querySelector('.wrapper').style.display = 'flex';

circles[1].replaceWith(heartTwo);

div.innerHTML = '<h1>Hello World</h1>';
