const request = require('request');

const MOVIE_DB = 'https://api.themoviedb.org/3/movie';
const KEY = 'api_key=8e99b23be2dbdfe031b6036092149de4';

module.exports = {
  apiCall: (url) => {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (error, response, body) => {
        if (error) reject(error);
        resolve(body);
      });
    });
  },
  movieURL: {
    getPopular: () => `${MOVIE_DB}/popular?${KEY}`,
    getMovie: id => `${MOVIE_DB}/${id}?${KEY}`,
  }
};
