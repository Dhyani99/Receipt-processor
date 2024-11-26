const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    shortDescription: String,
    price: Number,
})
const receiptSchema = new mongoose.Schema({
  retailer: String,
  purchaseDate: String, 
  purchaseTime: String, 
  total: Number,
  items: [itemSchema],
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;