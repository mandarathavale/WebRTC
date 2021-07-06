const {validationResult} = require('express-validator');

const requestValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).end();
    // don't use the line below use custom error message
    // return res.status(400).json({errors: errors.array()});
  }
  next();
};

module.exports = requestValidation;
