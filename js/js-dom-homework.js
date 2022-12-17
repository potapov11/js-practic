'use strict';


const body = document.querySelector('body'); //Получили Body

body.style.backgroundColor = 'beige'; //Присвоили объекту body методом style фон. цвет
body.style.paddingLeft = '100px';

//----------------Green rectangle----------------//
const rectangle = document.createElement('div');  //!Создали элемент Div
// console.log(rectangle);
rectangle.style.cssText = 'width: 700px; height: 60px; background-color: green'; //!Задали ему стили
body.prepend(rectangle); //! Добавили в начало Body


//------------Blue Circle-----------------//

const circle = document.createElement('div');
body.append(circle);
circle.style.cssText = 'border-radius: 50%; width: 100px; height: 100px; background-color: blue; margin-top: 20px';

//-----------Darkblue triangle-----------//

const rectangleTwo = document.createElement('div');
body.append(rectangleTwo);
rectangleTwo.style.cssText = 'width: 40px; height: 500px; background-color: darkblue; margin-top: 20px';

//----------Cuadros---------------//

const cuadros = document.querySelectorAll('.cuadro');
console.log(cuadros);

// cuadros.forEach(function(element) {
//   element.style.cssText = 'width: 30px; height: 30px; background-color: red; margin-top: 20px';
// 	body.append(element);
// }); // - Первый вариант перебора элементов в NodeList с добавлениями изменений!

for (let i = 0; i < cuadros.length; i++) {
	cuadros[i].innerHTML = 'hello';
	cuadros[i].style.cssText = 'width: 30px; height: 30px; background-color: red; margin-top: 20px';
	body.append(cuadros[i]);
}



// cuadros.style.cssText = 'width: 30px; height: 30px; background-color: red';
// body.append(cuadros);


