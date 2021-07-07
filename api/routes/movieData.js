const axios = require('axios');
const router = require('express').Router();
const config = require('../utils/config');
const loggers = require('../utils/loggers');

router.get('/', (req, res) => {
  res.send('<h1>Welcome to the AMC Cinema API</h1>');
});

router.get('/featured', async (req, res) => {
  try {
    const apiData = await axios.get(`${config.baseApiUrl}/movie/popular?api_key=${config.APIKey}&language=en-US&page=1`);
    // if (apiData.data) {
    //   const featuredMovies = [];
    //   for (let x = 0; x < 3; x++) {
    //     const randomNumber = Math.floor(Math.random() * 19);
    //     const randomMovie = apiData.data.results[randomNumber];
    //     featuredMovies.push(randomMovie);
    //   }
    //   res.json(featuredMovies);
    // }
    // loggers.error('Something went wrong', apiData);
    res.json({
      messgae: 'Successful',
      data: apiData
    });
  } catch (error) {
    loggers.error('Error Fetching Data', error);
  }
});

router.get('/now-playing', async (req, res) => {
  try {
    const apiData = await axios.get(`${config.baseApiUrl}/movie/now_playing?api_key=${config.APIKey}&language=en-US&page=1`);
    if (apiData.data) {
      const nowPlaying = apiData.data.results.slice(0, 8);
      res.json(nowPlaying);
    }
    loggers.error('Something went wrong', apiData);
  } catch (error) {
    loggers.error('Error Fetching Data', error);
  }
});

router.get('/coming-soon', async (req, res) => {
  try {
    const apiData = axios.get(`${config.baseApiUrl}/movie/upcoming?api_key=${config.APIKey}&language=en-US&page=1`);
    if (apiData.data) {
      const trending = apiData.data.results.slice(0, 3);
      res.json(trending);
    }
    loggers.error('Something went wrong', apiData);
  } catch (error) {
    loggers.error('Error Fetching Data', error);
  }
});

module.exports = router;