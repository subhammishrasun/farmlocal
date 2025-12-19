const redis = require('../config/redis');


module.exports = async (req, res, next) => {
const id = req.headers['idempotency-key'];
if (!id) return next();


const exists = await redis.get(id);
if (exists) return res.status(200).json(JSON.parse(exists));


const original = res.json.bind(res);
res.json = async (body) => {
await redis.set(id, JSON.stringify(body), 'EX', 300);
original(body);
};


next();
};