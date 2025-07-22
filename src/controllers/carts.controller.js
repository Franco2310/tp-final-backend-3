// src/controllers/carts.controller.js

async function getCart(req, res) {
  res.json({ message: 'getCart funcionando', id: req.params.id });
}

async function getCarts(req, res) {
  res.json([{ id: 1, products: [] }, { id: 2, products: [] }]);
}

async function addProductToCart(req, res) {
  const { id } = req.params;
  const { productId, quantity } = req.body;
  res.json({ message: `Producto ${productId} agregado al carrito ${id} con cantidad ${quantity}` });
}

async function removeProductFromCart(req, res) {
  const { id, productId } = req.params;
  res.json({ message: `Producto ${productId} eliminado del carrito ${id}` });
}

module.exports = {
  getCart,
  getCarts,
  addProductToCart,
  removeProductFromCart
};
