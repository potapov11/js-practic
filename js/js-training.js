// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'   
//   }
// };

// function showExperience(plan) {
//   const {skills: {exp}} = plan; //! Пример синтаксиса деструктуризации объекта в объекте
//   return exp;
// }

// console.log(showExperience(personalPlanPeter));


const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'   
  }
};

function showProgrammingLangs(plan) {
  let result = "";
  for (let lang in plan.skills.programmingLangs) { //! Изучить синтаксис этой функции!!!
      if (lang === "") {
          console.log("");
      } else {
          result += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}\n`;
      }
  }
  return result;
}

function showProgrammingLangs(plan) {
 
  const {programmingLangs} = plan.skills;
  let str = '';

  if (Object.keys(programmingLangs).length === 0) { //! Интересеное решение на проверку пустого объекта
      return '';
  } else {
      for (let val in programmingLangs) {
          str += `Язык ${val} изучен на ${programmingLangs[val]}\n`;
      }
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));













const car = {
  type: 'taxi',
  mark: 'ford',
  colors: {
    doors: 'green',
    cartrunk: 'red'
  }
};

function getColor(ourcar) {
  let string = '';
  const {colors} = car;
  for (let a in colors) {
    string+= `${a} в этой машине цвета ${colors[a]}\n`;
  }
  return string; 
};

console.log(getColor(car));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

