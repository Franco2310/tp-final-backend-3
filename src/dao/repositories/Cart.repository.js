const CartDAO = require('../daos/cart.dao.js');

class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  async getById(id) {
    return await this.dao.getById(id);
  }

  async update(id, data) {
    return await this.dao.update(id, data);
  }
}

module.exports = CartRepository;
