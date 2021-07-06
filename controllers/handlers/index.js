const createSessionHandler = require('./session/create_session');

const sessionHandler = {
  createSession: createSessionHandler,
};

module.exports = {
  sessionHandler,
};
