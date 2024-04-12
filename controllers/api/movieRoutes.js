const router = require('express').Router();
const { Movie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMovie = await Movie.create({
      ...req.body,
      user_id: req.session.user_id // Assign the logged-in user's ID to the new movie
    });

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE route to delete a movie
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id, // Ensure the movie belongs to the logged-in user
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
