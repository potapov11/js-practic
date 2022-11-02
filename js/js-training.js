// const hamburger = true;
// const fries = false;

// if(hamburger && fries) {
//   console.log('Я сыт');
// }

// console.log((hamburger && fries));

// В JS есть пять сущностей которые всегда false:

// 1. null
// 2. Undefined
// 3. 0
// 4. ''  - пустая строка
// 5. NaN

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && fries && cola);

if (hamburger === 3 && fries === 1 && cola === 1) {
  console.log('Мы сыты');
} else {
  console.log('Идем в другое место');
}

const StringUser = 'kbkbkbkjbkjb';
const StringUser2 = 'zxczxczxxzccx';

console.log(StringUser && StringUser2);


