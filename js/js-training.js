const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'balck',
    background: 'red',
  },
  makeTest: function() {
    console.log('Test');
  }
};

options.makeTest();


console.log(options.name )('Проверка через точку');
console.log(options['width']) ('Проверка через скобку');
console.log(options['colors']['border']);
