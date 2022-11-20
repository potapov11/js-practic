function sayHello (a) {
  console.log(a);
}

sayHello();

function cub(cubLength) {
  if(!Number.isInteger(cubLength) || typeof cubLength === 'string' || cubLength <= 0) {
    return 'При вычислении произошла ошибка';
  } else {
  return `Объем куба: ${cubLength*cubLength*6}, площадь всей поверхности: ${cubLength*cubLength*cubLength}`;}
}
console.log(cub(80));


function getCoupeNumber(seatNumber) {
  if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(3));
