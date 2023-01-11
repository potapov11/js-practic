// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const arr = ['hello', 'world', 'this', 'is', 'great'];

const smash = words => words.join(' ');

console.log(smash(arr));

//Метод join соединяет все элементы массива в строку
