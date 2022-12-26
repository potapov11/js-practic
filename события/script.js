// описание:
// Завершите метод, который принимает логическое значение и возвращает строку "Да" для true или строку "Нет" для false.

function boolToWord(bool){
  if(bool === true) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(boolToWord(true));
