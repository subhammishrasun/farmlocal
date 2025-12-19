const redis = require('../config/redis');


async function handleEvent(eventId, payload) {
const exists = await redis.get(`event:${eventId}`);
if (exists) return;


await redis.set(`event:${eventId}`, '1', 'EX', 3600);
console.log('Processed webhook', payload);
}


module.exports = { handleEvent };