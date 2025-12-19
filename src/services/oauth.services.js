const redis = require('../config/redis');

const TOKEN_KEY = 'oauth:access_token';
const TOKEN_TTL = 60 * 60; // 1 hour

let inFlightPromise = null;

async function getAccessToken() {
  //  Check Redis first
  const cached = await redis.get(TOKEN_KEY);
  if (cached) return cached;

  // Prevent concurrent token generation
  if (inFlightPromise) return inFlightPromise;

  inFlightPromise = new Promise(async (resolve) => {
    //  Generate mock token
    const token = `mock-token-${Date.now()}`;

    await redis.set(TOKEN_KEY, token, 'EX', TOKEN_TTL);

    inFlightPromise = null;
    resolve(token);
  });

  return inFlightPromise;
}

module.exports = { getAccessToken };
