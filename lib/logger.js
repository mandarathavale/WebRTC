const rfs = require('rotating-file-stream');
const morgan = require('morgan');

const path = require('path');

// create a rotating write stream
const accessLogStream = rfs.createStream('application.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, '../logs'),
});


const logger = morgan('combined', {stream: accessLogStream});

module.exports = logger;
