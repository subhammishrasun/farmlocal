# FarmLokal Backend


This is the backend service for FarmLokal, a hyperlocal marketplace that connects households directly with local farmers and producers for fresh daily essentials. The system is built using Node.js, MongoDB, and Redis, with a strong focus on performance, reliability, and scalability.

It includes OAuth2-based authentication, high-performance product listing APIs with Redis caching, external API integrations (sync and webhook-based), rate limiting, and idempotent event handling. The architecture follows clean separation of concerns and is designed to handle production-scale traffic and real-world failure scenarios.


## Tech Stack
- Node.js (Express)
- MongoDB (Mongoose)
- Redis (ioredis)


## Features
- OAuth2 Client Credentials with Redis caching
- High-performance product listing API
- Webhook handling with idempotency
- Rate limiting
- Redis-based caching
## Env file 
PORT=5000
MONGO_URI=mongodb://localhost:27017/farmlokal
REDIS_URL=redis://localhost:6379

OAUTH_TOKEN_URL=<provider-url>
OAUTH_CLIENT_ID=<client-id>
OAUTH_CLIENT_SECRET=<client-secret>
## Test API
http://localhost:4000/api/products
http://localhost:4000/api/products?limit=20&sort=price
http://localhost:4000/api/products?category=vegetables&limit=10
http://localhost:4000/api/webhook-post request
http://localhost:4000/api/external/api-a 

## Setup
```bash
npm install
cp .env.example .env
npm run seed
npm start