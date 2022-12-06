// let number = 5; debugger

// function getNumber() {
//   console.log(number); debugger
// }

// number = 100;

// getNumber(); debugger


// number = 18;

// getNumber(); debugger

function createCounter() {
  let counter = 0;

  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };

  return myFunction;  //! Ситуация когда одна функция
  //! возвращает другую функцию
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
