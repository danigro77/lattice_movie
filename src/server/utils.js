const request = require('request');
require('dotenv').config();

const MOVIE_DB = 'https://api.themoviedb.org/3/movie';
const KEY = `api_key=${process.env.MOVIE_API_KEY}`;

module.exports = {
  apiCall: url => new Promise((resolve, reject) => {
    request(url, { json: true }, (error, response, body) => {
      if (error) reject(error);
      resolve(body);
    });
  }),
  movieURL: {
    getPopular: () => `${MOVIE_DB}/popular?${KEY}`,
    getMovie: id => `${MOVIE_DB}/${id}?${KEY}`,
    getCredits: id => `${MOVIE_DB}/${id}/credits?${KEY}`,
  },
};
