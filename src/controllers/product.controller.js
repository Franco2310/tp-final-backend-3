const { getProductById, getAllProducts } = require('../services/product.service.js');

async function getProduct(req, res) {
  const productDTO = await getProductById(req.params.id);
  if (!productDTO) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(productDTO);
}

async function getProducts(req, res) {
  const productsDTO = await getAllProducts();
  res.json(productsDTO);
}

module.exports = {
  getProduct,
  getProducts
};
