const CartRepository = require('../dao/repositories/Cart.repository.js');
const ProductRepository = require('../dao/repositories/Product.repository.js');
const TicketRepository = require('../dao/repositories/Ticket.repository.js');
const crypto = require('crypto');

const cartRepository = new CartRepository();
const productRepository = new ProductRepository();
const ticketRepository = new TicketRepository();

class CartService {
  static async purchase(cartId, user) {
    const cart = await cartRepository.getById(cartId);
    const productsToPurchase = [];
    const productsNoStock = [];

    for (const item of cart.products) {
      const product = await productRepository.getById(item.productId);
      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        await productRepository.update(product._id, product);
        productsToPurchase.push({ price: product.price, quantity: item.quantity });
      } else {
        productsNoStock.push(item);
      }
    }

    const totalAmount = productsToPurchase.reduce(
      (acc, item) => acc + item.price * item.quantity, 0
    );

    const ticket = await ticketRepository.create({
      code: crypto.randomUUID(),
      amount: totalAmount,
      purchaser: user.email
    });

    cart.products = productsNoStock;
    await cartRepository.update(cartId, cart);

    return { status: "success", ticket, productsNoStock };
  }
}

module.exports = { CartService };
