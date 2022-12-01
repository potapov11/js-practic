const persons = {
  first: 'john',
  second: 'altyn',
  third: {
    dima: 'dima',
    ages: {
      a: 24,
      b: 25,
    }
  }
};

let {ages, dima} = persons.third;
let dima = 'kolya';
console.log(ages);
console.log(dima);
