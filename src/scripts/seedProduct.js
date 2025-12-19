require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/product.model');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');

    const products = [];

    for (let i = 1; i <= 100000; i++) {
      products.push({
        name: `Product ${i}`,
        description: `Fresh product ${i}`,
        category: 'vegetables',
        price: Math.floor(Math.random() * 10000) + 1
      });
    }

    await Product.insertMany(products);
    console.log('✅ Products seeded successfully');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
