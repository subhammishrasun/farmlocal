const Product = require('../models/product.model');
const redis = require('../config/redis');
const cacheKey=`set_Radis_Key_${getYYMMDD()}`

exports.getProducts = async (req, res) => {
// const cacheKey = JSON.stringify(req.query);
const cached = await redis.get(cacheKey);


if (cached) return res.json(JSON.parse(cached));


const { limit = 20, cursor, sort = 'createdAt' } = req.query;


const query = cursor ? { _id: { $gt: cursor } } : {};


const products = await Product.find(query)
.sort({ [sort]: 1 })
.limit(Number(limit));


await redis.set(cacheKey, JSON.stringify(products), 'EX', 60 * 60 * 24);
res.json(products);
};

function getYYMMDD() {
  const d = new Date();
  const yy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yy}${mm}${dd}`;
}