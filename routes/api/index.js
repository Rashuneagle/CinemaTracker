const router = require('express').Router();
const showsRoutes = require('./shows-routes');
const moviesRoutes = require('./movies-routes');

router.use('./shows', showsRoutes);
router.use('./movies', moviesRoutes);

module.exports = router;