const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Movies, Shows, User } = require('../models');



router.get('/home', async (req, res) => {
    
  
      res.render('home')
  router.get('/login', (req, res) => {
    // Render the login template
    res.render('login');
});
});

router.get('/movie', async (req, res) => {
    // Render the login template
    try {
        const dbMoviesData = await Movies.findAll()
    
        const movies = dbMoviesData.map((movie) =>
          movie.get({ plain: true })
        );
    
        res.render('movies', {
          movies
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
        
        res.render('movie');
});



router.get('/dashboard', withAuth, async (req, res) => {
    try {
    
        const userData = await User.findByPk(req.session.userId);

        // Render the dashboard template
        res.render('dashboard', {
            
            loggedIn: req.session.loggedIn,
            user: userData.get({ plain: true })
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
