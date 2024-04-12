// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const passport = require('passport');
const helpers = require('./utils/helpers');
const session = require('express-session');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3005;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

// Create an instance of Handlebars with helpers
const hbs = exphbs.create({
    helpers: {
        // Register helper functions
        get_movie_emoji: helpers.get_movie_emoji,
        get_show_emoji: helpers.get_show_emoji,
        get_emoji: helpers.get_emoji
    }
});

// Set Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Starts the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
