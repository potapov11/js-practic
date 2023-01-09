

const a = [3,9,8,7,5,3,5,2];
const b = ['hi', 'hello'];

console.log(a.indexOf(8));

// console.log(b.indexOf('Hello'));

// console.table(a);
// console.log(a.indexOf(2, 4)); //Где 4 это необязательный параметр, указывающий с какой позиции нужно начинать поиск



function indexOfEmul(arr, item, from = 0) { //Принимает два параметра - массив(arr) и значение(item) которое будет искать
  let result = -1;
  for (let i = from; i < arr.length; i++) {
    if(arr[i] === item) {
      return i;
    }
  }
return result;
}

console.log(indexOfEmul(a, 8));
