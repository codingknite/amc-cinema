require('dotenv').config();

const PORT = process.env.PORT;
const APIKey = process.env.API_KEY;

let MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}
MONGODB_URI = process.env.MONGODB_URI;

const baseApiUrl = 'https://api.themoviedb.org/3';

module.exports = {
  PORT,
  MONGODB_URI,
  baseApiUrl,
  APIKey
};
