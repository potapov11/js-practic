const persons = {
  firstPerson: 'john',
  secondPerson: 'altyn',
  thirdPerson: {
    name: 'Dima',
    ages: {
      a: 24,
      b: 25,
        width: {
          // wallone: 100,
          // walltwo: 200,
        }
    }
  }
};


function showWallWidth(wall) {
  let string = '';

  const {width} = wall.thirdPerson.ages;
  for (let key in width) {
    if(Object.keys(width).length === 0) {
      return `Объект пуст`;
    } else {
      string += `Длина ${key} равна ${width[key]}\n`;
    }
  }
  return string;
};

console.log(showWallWidth(persons));












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


// 2) Напишите функцию showWallWidth, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Длина стены 1 равна 100 Длина стены 2 равна 200"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

