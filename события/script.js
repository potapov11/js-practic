let skills = {
  "4": "React",
  "1": "HTML",
  "2": "CSS",
  "3": "JavaScript",
  "5": "NodeJS",
};
     
let mySkills = {};

//! Клонировнаие объекта в другой объект путем перебора for in

for (let key in skills) {
  mySkills[key] = skills[key];
}

console.log(mySkills);
