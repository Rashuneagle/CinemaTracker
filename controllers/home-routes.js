const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Movies, Shows, User } = require('../models');



router.get('/home', async (req, res) => {
    try {
      const dbMoviesData = await Movies.findAll()
  
      const movies = dbMoviesData.map((movie) =>
        movie.get({ plain: true })
      );
  
      res.render('home', {
        movies
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // Render the login template
    res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
    
        const userData = await User.findByPk(req.session.userId);

        // Render the dashboard template
        res.render('dashboard', {
            // Pass any necessary data to the dashboard template
            loggedIn: req.session.loggedIn,
            user: userData.get({ plain: true })
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
