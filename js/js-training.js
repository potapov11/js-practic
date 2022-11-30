const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'balck',
    background: 'red',
  },
  makeTest: function() {
    console.log('Test');
  }
};

options.makeTest();


// console.log(options.name )('Проверка через точку');
// console.log(options['width']) ('Проверка через скобку');
// console.log(options['colors']['border']);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;

//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// };


// const numbers = {
//   a: 2,
//   b: 3,
//   c: {
//     x: 7,
//     y: 12,
//   }
// };

// const newNumbers = copy(numbers);
// console.log(newNumbers);

function copyObj (mainObj) {
  let newObj = {};

  let key;

  for(key in mainObj) {
    newObj[key] = mainObj[key];
  }
  return newObj;
}

const namesObj = {
  a: 'John',
  b: 'Altun',
  c: 'Nikolai',
};

// console.log(namesObj);
// const newNamesObj = copyObj(namesObj);

const add = {
  d: 17,
  i: 20,
};

// console.log(Object.assign(namesObj, add));
// console.log(namesObj); 

const newAdd = Object.assign({}, add);
newAdd.d = 20;
console.log(newAdd);
