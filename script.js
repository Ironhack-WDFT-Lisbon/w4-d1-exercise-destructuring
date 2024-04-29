const movies = [
  {
    title: "The Shawshank Redemption",
    score: {
      imdb: 9.3,
      rottenTomatoes: 91,
    },
    year: 1994,
  },
  {
    title: "The Godfather",
    score: {
      imdb: 9.2,
      rottenTomatoes: 98,
    },
    year: 1972,
  },
  {
    title: "The Dark Knight",
    score: {
      imdb: 9.0,
      rottenTomatoes: 94,
    },
    year: 2008,
  },
  {
    title: "The Godfather: Part II",
    score: {
      imdb: 9.0,
      rottenTomatoes: 97,
    },
    year: 1974,
  },
  {
    title: "12 Angry Men",
    score: {
      imdb: 8.9,
      rottenTomatoes: 100,
    },
    year: 1957,
  },
  {
    title: "Schindler's List",
    score: {
      imdb: 8.9,
      rottenTomatoes: 97,
    },
    year: 1993,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    score: {
      imdb: 8.9,
      rottenTomatoes: 93,
    },
    year: 2003,
  },
  {
    title: "Pulp Fiction",
    score: {
      imdb: 8.9,
      rottenTomatoes: 92,
    },
    year: 1994,
  },
  {
    title: "The Good, the Bad and the Ugly",
    score: {
      imdb: 8.8,
      rottenTomatoes: 97,
    },
    year: 1966,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    score: {
      imdb: 8.8,
      rottenTomatoes: 91,
    },
    year: 2001,
  },
];

// 1. Deconstruct the first 3 movies from the IMDBTop10 array and spread the rest of the movies into a new array called restOfMovies
const [movie1, movie2, movie3, ...restOfMovies] = movies;

console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(restOfMovies);

// 2. Deconstruct the score of the first movie into a new variable called firstMovieScore
const { score: firstMovieScore } = movie1;

// console.log(firstMovieScore);

// 3. Deconstruct the rottenTomatoes score of the second movie from the movies array
const {
  score: { rottenTomatoes: secondMovieRottenTomatoes },
} = movie2;

// console.log(secondMovieRottenTomatoes);

// 4. Descontruct form each movie the title and year, and store them in a new array called moviesInfo

const moviesInfo = movies.map(({ title, year }) => ({ title, year }));

// console.log(moviesInfo);
