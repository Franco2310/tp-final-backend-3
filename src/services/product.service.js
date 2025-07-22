const { ProductDTO } = require('../dao/dtos/Product.dto.js');
const ProductModel = require('../dao/models/Product.model.js');

async function getProductById(id) {
  const product = await ProductModel.findById(id);
  if (!product) return null;
  return new ProductDTO(product);
}

async function getAllProducts() {
  const products = await ProductModel.find();
  return products.map(product => new ProductDTO(product));
}

module.exports = {
  getProductById,
  getAllProducts
};
