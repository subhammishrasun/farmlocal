require('dotenv').config(); // MUST BE FIRST

const app = require('./app');
const connectDB = require('./config/db');
require('./config/redis');

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
