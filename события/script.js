
const log = console.log;

let student = {
  name: "Семён",
  age: 21,
  skills: {
      html: true,
      css: true,
      react: false,
  },
};

for (let key in student) {
  if(typeof(student[key]) === 'object'){
    for (let i in student[key]) {
      console.log(student[key][i]); 
    }
  }   //! Вывод значений свойств во вложеннном объекте ("true", "true", "false")
}
