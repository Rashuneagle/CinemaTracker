const { Movies } = require('../models');

const moviesData = [
  {
    movieTitle: 'Jaws',
    movieImage: '/assets/movie-poster-jaws.jpg'
  },
  {
    movieTitle: 'Citizen Kane',
  },
  {
    movieTitle: 'Rocky',
  },
  {
    movieTitle: 'Princess Mononoke',
  },
  {
    movieTitle: 'Spirited Away',
  },
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;
