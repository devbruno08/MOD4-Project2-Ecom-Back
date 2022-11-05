const productsService = require('../services/product.service');

async function findAllProductsController(req, res) {
  try {
    const allProducts = await productsService.findAllProductsService();
    res.status(200).send(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function findByIdProductController(req, res) {
  const idParam = req.params.id;
  const oneProduct = await productsService.findByIdProductService(idParam);
  if (oneProduct) {
    res.status(200).send(oneProduct);
  } else {
    res.status(400).send({ message: 'Não existe nenhum Product com esse id' });
  }
}

async function createProductController(req, res) {
  try {
    const Product = req.body;
    const ProductCreated = await productsService.createProductService(Product);
    res.status(201).send(ProductCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function updateProductController(req, res) {
  try {
    const Product = req.body;
    const ProductUpdated = await productsService.updateProductService(Product);
    res.status(200).send(ProductUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteProductController(req, res) {
  const idParam = req.params.id;
  const deletedProduct = await productsService.deleteProductService(idParam);
  if (deletedProduct) {
    res.status(200).send(deletedProduct);
  } else {
    res
      .status(400)
      .send({ message: 'Nenhum Product com esse id foi encontrado' });
  }
}

module.exports = {
  findAllProductsController,
  findByIdProductController,
  createProductController,
  updateProductController,
  deleteProductController,
};
