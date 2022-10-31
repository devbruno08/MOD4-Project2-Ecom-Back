const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  gender: { type: String, required: true },
  imageURL:{ type: String, required: true},
});

const product = model('products', productSchema);

module.exports = product;
