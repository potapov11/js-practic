//!Пример работы метода forEach

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(item, i, arr) {
  console.log(`Номер ${i} имеет значение ${item} и находится в массиве ${arr}`);
});
