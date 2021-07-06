const sessionModel = require('../../../models/session');
const generateSessionId = require('../../../util/generate_session_id');

const createSession = async (req, res) => {
  try {
    const {name} = req.body;
    const sessionId = await generateSessionId();

    // create session in database
    const session = await sessionModel.create({
      name,
      sessionId,
    });

    res.status(200).json({
      name: session.name,
      sessionId: session.sessionId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};


module.exports = createSession;
