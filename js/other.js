const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let string = '';

  if(arr.length > 0) {  //! Мое решение на задачу
    arr.join(',');
    string += `Семья состоит из: ${arr}`;
    return string;
    }  
  }

console.log(showFamily(family));

// 1) Напишите функцию showFamily, которая будет принимать в себя массив 
// строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, 
// то выводится сообщение 'Семья пуста'



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  const lowerCase = [];
  arr.forEach(function(item) {
    lowerCase.push(item.toUpperCase());
    // lowerCase.push(item.toUpperCase()); //! Метод для увеличения регистра 
  });
  return lowerCase;   //! Мое решение на задачу
}

console.log(standardizeStrings(favoriteCities));



// 2) напишите функцию standardizeStrings, которая будет принимать в себя
//  массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти
//  ответы в самых разных форматах. В том числе и с разными буквами :)
//   Поэтому нам нужно привести строки в один формат для правильной работы.
