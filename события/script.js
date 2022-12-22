const btn = document.querySelector('button');

btn.addEventListener('mouseenter', function () {
  console.log('Click');
});
 

const deleteElement =  function() { //Функция которая удаляет кнопку
  console.log('Click');
};

let i = 0;
  i++;
  if(i == 2) {
  btn.removeEventListener('mouseenter', deleteElement);
  }

btn.removeEventListener('mouseenter', deleteElement);