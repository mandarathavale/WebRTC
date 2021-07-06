const mongoose = require('mongoose');

const {sessionStatus} = require('../constants/session');

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  sessionId: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    enum: [sessionStatus.created, sessionStatus.active, sessionStatus.closed],
    default: sessionStatus.created,
    required: true,
  },
  totalParticipants: {
    type: Number,
    default: 0,
  },
}, {
  autoCreate: true,
});

const sessionModel = mongoose.model('session', sessionSchema);

module.exports = sessionModel;
