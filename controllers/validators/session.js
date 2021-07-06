const {body} = require('express-validator');

const sessionValidator = {
  createSession: [
    body('name').exists().isAlpha(),
  ],
};

module.exports = sessionValidator;
