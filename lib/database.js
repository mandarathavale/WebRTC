const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/webrtc', {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true});


const connection = mongoose.connection;

connection.on('error', () => {
  console.error('Error');
});

connection.once('open', () => {
  console.log('Connected');
});


module.exports = connection;
