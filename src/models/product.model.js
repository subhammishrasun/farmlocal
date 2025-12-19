const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
name: { type: String, index: true },
description: String,
category: { type: String, index: true },
price: { type: Number, index: true },
}, { timestamps: true });


productSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Product', productSchema);