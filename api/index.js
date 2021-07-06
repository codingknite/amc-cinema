const app = require('./src/app.js');
const http = require('http');
const config = require('./utils/config');
const loggers = require('./utils/loggers');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  loggers.info(`App running on Port ${config.PORT}`);
});