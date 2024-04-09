const seedMovies = require('./movies');
const seedShows = require('./shows')

const sequelize = require('.../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedMovies();
    console.log('\n----- MOVIES SEEDED -----\n');

    await seedShows();
    console.log('\n----- SHOWS SEEDED -----\n');


    process.exit(0);
};

seedAll();
