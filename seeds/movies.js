const { Movies } = require('../models');

const moviesData = [
  {
    movieTitle: 'Jaws',
    movieSynopsis: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
  },
  {
    movieTitle: 'Jaws',
    movieSynopsis: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
  },
  {
    movieTitle: 'Jaws',
    movieSynopsis: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
  },
  {
    movieTitle: 'Jaws',
    movieSynopsis: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
  },
  {
    movieTitle: 'Jaws',
    movieSynopsis: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
  },
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;
