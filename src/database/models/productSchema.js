const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category:{ type: String, required: true},
  imageURL:{ type: String, required: true},
});

const product = model('products', productSchema);

module.exports = product;
