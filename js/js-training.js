const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'balck',
    background: 'red',
  }
};

console.log(options['colors']['border']);

let counter=0;
for (let key in options) {
  if(typeof(options[key]) === 'object') {
    for(let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else{
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(counter);


// let counter = 0;

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'balck',
    background: 'red',
  }
};

// for (let key in options) {
//   counter++;
// }
// console.log(counter);

console.log(Object.keys(options));
