const router = require('express').Router();


router.use(require('./product.route'));
router.use(require('./webhook.route'));
router.use('/external', require('./external.route'));


module.exports = router;