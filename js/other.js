const car = {
  type: 'Taxi',
  mark: 'Bmw',
  height: 1.2,
  color: 'red',
};

//! Конструкция Object.create создает новый объект по прототипу уже существующего


const otherCar = Object.create(car);

console.log(otherCar.type);
console.log(otherCar.mark);
