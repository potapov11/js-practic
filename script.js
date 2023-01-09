//Задача со скобками
//Верно ли количество открывающих и закрывающих скобочек в строке: ()

const a = ')((()))()((()))((()))';

let count = 0;

for (let i = 0; i < a.length; i++) {
  if(a[i] == '(') {
    count++;
  } else if(a[i] == ')') {
    count--;
  } 
  if(count == -1) {
    console.log('megafalse');
    break;
  }
}
 if(count !== 0) {
  console.log(false);
 } else if(count == -1) {
  console.log();
 }
 else {
  console.log(true);
 }

