const router = require('express').Router();
const { getProducts } = require('../controllers/product.controller');


router.get('/products', getProducts);


module.exports = router;