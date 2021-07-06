const express = require('express');
const router = express.Router();

const requestValidation = require('../validators/request_validation');
const {sessionValidator} = require('../validators');
const {sessionHandler} = require('../handlers/index.js');

// create a new session
router.post('/', sessionValidator.createSession,
    requestValidation, sessionHandler.createSession );

module.exports = router;
