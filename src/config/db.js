const mongoose = require('mongoose');
const { mongoUri } = require('./env');

module.exports = async () => {
  if (!mongoUri) {
    throw new Error(' MONGO_URI is missing in .env');
  }

  await mongoose.connect(mongoUri, {
    maxPoolSize: 20,
  });

  console.log('MongoDB connected');
};
