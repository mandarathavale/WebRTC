const randomstring = require('randomstring');

const sessionModel = require('../models/session');

const generateSessionId = async () => {
  try {
    const randomString = randomstring.generate({
      length: 12,
      charset: 'alphanumeric', // this is default change later
    });

    const session = await sessionModel.findOne({sessionId: randomString});
    if (!session) {
      return randomString;
    } else {
      const randomString = await generateSessionId();
      return randomString;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = generateSessionId;
