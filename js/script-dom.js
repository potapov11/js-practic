
'use strict';

const box = document.getElementById('box'); 

const btns = document.querySelectorAll('button');
console.log(btns);

for(let i = 1; i < 2; i++) {
	btns[i].style.backgroundColor = 'gold';
}

// btns.forEach(function(item){
// 	item.style.backgroundColor = 'green';
// });

const circles = document.getElementsByClassName('circle');


const heart = document.querySelector('.heart');

box.style.backgroundColor = 'blue'; //! Запись стилей css в одну строку 
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; //! Запись нескольких свойств стилей

btns[1].style.borderRadius = '50%';

circles.forEach(function(item) {
	console.log(item);
	// item.style.backgroundColor = 'gold';
});

btns.forEach(function(item) {
	console.log(item);
	// item.style.backgroundColor = 'gold';
});


