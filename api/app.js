require('dotenv').config;
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the AMC Cinema API</h1>');
});

module.exports = app;