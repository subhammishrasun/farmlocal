const router = require('express').Router();
const { handleWebhook } = require('../controllers/webhook.controller');


router.post('/webhook', handleWebhook);


module.exports = router;