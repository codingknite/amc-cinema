require('dotenv').config();
const express = require('express');
const cors = require('cors');
const movieDataRouter = require('../routes/movieData');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', movieDataRouter);

module.exports = app;