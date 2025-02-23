require('dotenv').config();
const express = require('express');
const Logger = require('./utils/Logger');
const Session = require('./utils/Session');
const cors = require('cors');

const expressApp = express();
expressApp.use(cors({
    origin: '*'
}));

expressApp.get('/interaction_server', (request, response) => {
    response.json({ online: true });
});

let sessions = [];

expressApp.get('/interaction_server/register_action/:sessionId/:action', async (request, response) => {
    const sessionId = request.params.sessionId;
    const action = request.params.action;

    const sessionIndex = sessions.findIndex((session) => session.id == sessionId);

    let newSession;
    if (sessionIndex == -1) {
        newSession = new Session(sessionId);
        sessions.push(newSession);
    } else {
        newSession = sessions[sessionIndex];
    }

    newSession.registerAction(action, 5 * 60); // expires in 5 minutes.


    response.json({ success: true });
});

expressApp.get('/interaction_server/gather_actions/:sessionId', async (request, response) => {
    const sessionId = request.params.sessionId;
    
    const sessionIndex = sessions.findIndex((session) => session.id == sessionId);
    
    if (sessionIndex == -1) return response.json([]);
    const session = sessions[sessionIndex];

    const list = session.gatherActions();
    sessions = sessions.filter((session) => session.id != sessionId);

    response.json(list);
});

const port = process.env.PORT || 8080;
expressApp.listen(port, () => {
    Logger.log(`HTTP Server is listening on port ${port}!`);
});
