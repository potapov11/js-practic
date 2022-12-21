
const log = console.log;

let student = {
  name: "Семён",
  age: 21,
  "student level": "junior",
  course: "JavaScript разработчик",
};
     //!Проверка наличия свойства у объекта двумя способами
if (student["work experience"] === undefined || "work experience" in student === false) {
log('Студент не имеет опыта работы!');
};   
