const { Shows } = require('../models');

const showsData = [
  {
    showName: 'The Sopranos',
    showSynopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.'
  },
  {
    showName: 'The Sopranos',
    showSynopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.'
  },
  {
    showName: 'The Sopranos',
    showSynopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.'
  },
  {
    showName: 'The Sopranos',
    showSynopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.'
  },
  {
    showName: 'The Sopranos',
    showSynopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.'
  },
];

const seedShows = () => Shows.bulkCreate(showsData);

module.exports = seedShows;
