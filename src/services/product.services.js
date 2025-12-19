const Product = require('../models/product.model');


exports.fetchProducts = async ({ query, limit, sort }) => {
return Product.find(query)
.sort(sort)
.limit(limit)
.lean();
};