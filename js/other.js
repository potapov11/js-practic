// const str = prompt('', '');

// const products = str.split(', ');

// console.log(products);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let value of arr) {
  console.log(value + ' hello');
};

arr.forEach(function(item, i,) {
  console.log(`Этот элемент имеет в себе индекс ${i} со значением ${item}`);
});
