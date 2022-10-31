const route = require('express').Router();
const controllerProduct = require('../controllers/product.controller')

route.get('/all-products', controllerProduct.findAllProductsController);
route.get('/product/:id', controllerProduct.findByIdProductController);
route.post('/create', controllerProduct.createProductController);
route.put('/update', controllerProduct.updateProductController);
route.delete('/delete/:id', controllerProduct.deleteProductController);

module.exports = route;

