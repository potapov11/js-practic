const persons = {
  first: 'john',
  second: 'altyn',
  third: {
    dima: 'dima',
    ages: {
      a: 24,
      b: 25,
        width: {
          wallone: 100,
          walltwo: 200,
        }
    }
  }
};

let counter = 0;

for (let key in persons) {
  if(typeof(persons[key]) === 'object') {
    for (let i in persons[key]) {
      if(typeof(persons[key][i]) === 'object') {
        console.log('it-s object');
      }
      console.log(i);
    }
  }
  console.log(key);
  counter++;
  console.log(counter);
}



