// server/services/redisClient.js
const { createClient } = require('redis');

const redis = createClient({
  url: process.env.REDIS_URL // e.g. redis://localhost:6379 or Render URL
});

redis.on('error', (err) => {
  console.error('Redis error', err);
});

async function connectRedis() {
  if (!redis.isOpen) {
    await redis.connect();
    console.log('Redis connected');
  }
}

<<<<<<< HEAD
module.exports = { redis, connectRedis };
=======
module.exports = { redis, connectRedis };
>>>>>>> 7b6aeaf73626b0f61b4b82befd570c2302dcb253
