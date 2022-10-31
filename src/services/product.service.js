const Product = require('../database/models/productSchema');
const ProductEntity = require('../entities/product.entity');

async function findAllProductsService() {
  return await Product.find();
}

async function findByIdProductService(idParam) {
  const ProductFinded = await Product.findOne({ id: idParam });
  return ProductFinded;
}

async function createProductService(Product) {
  const newProduct = new ProductEntity(Product);
  newProduct.validate();
  const ProductCreate = new Product({ ...newProduct.getProduct() });
  ProductCreate.save();
}

async function updateProductService(Product) {
  const updateProduct = new ProductEntity(Product);
  const updatedProduct = {
    ...updateProduct.getProduct(),
  };

  const ProductUpdatedInDatabe = await Product.findOneAndUpdate(
    { id: Product.id },
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
