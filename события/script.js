// описание:
// Вы пишете код для управления светофорами вашего города. Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый.

// Завершите функцию, которая принимает строку в качестве аргумента, представляющего текущее состояние источника света, и возвращает строку, представляющую состояние, в которое должен перейти источник света.

// Например, когда входной сигнал зеленый, выходной сигнал должен быть желтым.



function getColor(color) {
    if (color === 'green') {
      return 'yellow';
    } else if (color === 'yeelow') {
      return 'red';
    } else if (color === 'red') {
      return 'green';
  }
}

console.log(getColor("green"));
console.log(getColor("yellow"));
console.log(getColor("red"));
