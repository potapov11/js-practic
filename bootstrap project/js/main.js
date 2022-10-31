// let button = document.querySelector(".inputsubmit").onclick = myClick;
// console.log(button);
// let img = document.querySelector('img');

// function myClick(){
//   // console.log('hello');
//   let value = document.querySelector('.input').value;
//   // console.log(value);
//   if(value < 20) {
//     img.src = 'img/little.jpg';
//   } else if(value < 40) {
//     img.src = 'img/middle.jpg';
//   } else {
//     img.src = 'img/old.jpg';
//   }
// }


// let button = document.querySelector('.inputsubmit').onclick = myClick;

// function myClick() {
//   let inputExp = document.querySelector('.input').value;
//   let newObj = {
//     name: 'John',
//     age: 23,
//     work:{
//       firm: 'Himmash',
//       experience: inputExp,
//     },
//   };
  
//   console.log(newObj);
// }

// let newObj = {
//   name: 'John',
//   age: 23,
//   work:{
//     firm: 'Himmash',
//     experience: inputExp,
//   },
// };

// newObj.work.firm = 'Gorod';
// newObj.work.experience = 10;

// console.log(newObj);




let button = document.querySelector('.inputsubmit').click = myClick;

function myClick() {
  let inputExp = document.querySelector('.input').value;
  return inputExp;
}

let resultFunc = myClick;
resultFunc();

let newObj = {
  name: 'John',
  age: 23,
  work:{
    firm: 'Himmash',
    experience: resultFunc,
  }
};

console.log(newObj);

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет', '');

// console.log(answers);
