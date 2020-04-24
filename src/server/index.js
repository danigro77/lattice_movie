const express = require('express');
const helpers = require('./utils');
const apiRoutes = require('./apiRoutes');

const app = express();
const { apiCall, movieURL } = helpers;
app.use(express.static('dist'));

app.get(`${apiRoutes.getMovie}/:movieId`, (req, res) => {
  apiCall(movieURL.getMovie(req.params.movieId))
    .then(response => res.json(response))
    .catch(error => res.send(error));
});

app.get(apiRoutes.getPopular, (req, res) => {
  apiCall(movieURL.getPopular())
    .then(response => res.json(response))
    .catch(error => res.send(error));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
