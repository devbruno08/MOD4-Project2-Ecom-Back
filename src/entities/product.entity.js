const crypto = require('node:crypto');

class ProductEntity {
  constructor(product) {
    this.id = product.id ?? crypto.randomUUID();
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
    this.imageURL = product.imageURL;
  }
  validate() {
    if (!this.name) {
      throw new Error('Nome precisa ser informado!');
    }
    if (!this.description) {
      throw new Error('Descrição precisa ser informada!');
    }
    if (!this.price) {
      throw new Error('Preço precisa ser informado!');
    }
    if (!this.category) {
      throw new Error('Categoria precisa ser informada!');
    }
    if (!this.imageURL) {
      throw new Error('Uma imagem precisa ser informada!');
    }
  }

  getProduct() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      imageURL: this.imageURL,
    };
  }
}

module.exports = ProductEntity;
