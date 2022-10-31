const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько вы оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
