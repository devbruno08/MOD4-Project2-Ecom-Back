const Product = require('../database/models/productSchema');
const ProductEntity = require('../entities/product.entity');

async function findAllProductsService() {
  return await Product.find();
}

async function findByIdProductService(idParam) {
  const ProductFinded = await Product.findOne({ id: idParam });
  return ProductFinded;
}

async function createProductService(product) {
  const newProduct = new ProductEntity(product);
  newProduct.validate();
  const ProductCreate = new Product({ ...newProduct.getProduct() });
  const createdProduct = await ProductCreate.save();
  return createdProduct;

}

async function updateProductService(product) {
  const updateProduct = new ProductEntity(product);
  const updatedProduct = {
    ...updateProduct.getProduct(),
  };

  const ProductUpdatedInDatabe = await Product.findOneAndUpdate(
    { id: product.id},
    updatedProduct,
    { new: true },
  );

  return ProductUpdatedInDatabe;
}

async function deleteProductService(idParam) {
  const ProductFinded = await Product.findOneAndDelete({ id: idParam });

  return ProductFinded;
}

module.exports = {
  findAllProductsService,
  findByIdProductService,
  createProductService,
  updateProductService,
  deleteProductService,
};
