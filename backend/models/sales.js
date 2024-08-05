const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  product: { type: String, required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Sale', salesSchema);
