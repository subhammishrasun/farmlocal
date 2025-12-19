const { handleEvent } = require('../services/externalB.services');


exports.handleWebhook = async (req, res) => {
await handleEvent(req.headers['x-event-id'], req.body);
res.status(200).send('OK');
};