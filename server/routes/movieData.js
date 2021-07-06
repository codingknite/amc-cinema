const axios = require('axios');
const router = require('express').Router();
const config = require('../utils/config');
const loggers = require('../utils/loggers');

router.get('/featured', (req, res) => {
  axios
    .get(`${config.baseApiUrl}/movie/popular?api_key=${config.APIKey}&language=en-US&page=1`)
    .then(response => {
      if (response.data) {
        const returnedData = response.data;
        const featuredMovies = [];
        for (let x = 0; x < 3; x++) {
          const randomNumber = Math.floor(Math.random() * 19);
          const randomMovie = returnedData.results[randomNumber];
          featuredMovies.push(randomMovie);
        }
        res.json(featuredMovies);
      }
      loggers.error('Something went wrong', response);
    })
    .catch(err => {
      loggers.error('Error Fetching Data', err);
    });
});

router.get('/now-playing', (req, res) => {
  axios
    .get(`${config.baseApiUrl}/movie/now_playing?api_key=${config.APIKey}&language=en-US&page=1`)
    .then(response => {
      const nowPlaying = response.data.results.slice(0, 8);
      res.json(nowPlaying);
    });
});

router.get('/coming-soon', (req, res) => {
  axios
    .get(`${config.baseApiUrl}/movie/upcoming?api_key=${config.APIKey}&language=en-US&page=1`)
    .then(response => {
      const trending = response.data.results.slice(0, 3);
      res.json(trending);
    });
});

module.exports = router;