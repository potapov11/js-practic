//Задача со скобками
//Верно ли количество открывающих и закрывающих скобочек в строке: ()

let parentes = '(())(())(())';

function getParent(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if(a[i] == '(') {
      count++;
    } else if(a[i] == ')') {
      count--;
    }
    if(count == -1) {
      return false;
      break;
    }
  }
  if(count !== 0) {
    return false;
} else {
  return true;
}
}

console.log(getParent(parentes));
