const router = require('express').Router();
const { fetchExternal } = require('../controllers/external.controller');

router.get('/api-a', fetchExternal);

module.exports = router;
