
'use strict';

const box = document.getElementById('box'); 

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); 

const heart = document.querySelector('.heart');

console.dir(box);



box.style.backgroundColor = 'blue'; //! Запись стилей css в одну строку 
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; //! Запись нескольких свойств стилей

btns[1].style.borderRadius = '50%';

circles.forEach(function(item) {
	console.log(item);
	// item.style.backgroundColor = 'gold';
});
