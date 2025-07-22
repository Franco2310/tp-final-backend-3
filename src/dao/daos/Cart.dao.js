// DAO en memoria (puede ser simulado)

let carts = [];

class CartDAO {
  async getById(id) {
    return carts.find(c => c.id === Number(id)) || null;
  }

  async update(id, data) {
    const index = carts.findIndex(c => c.id === Number(id));
    if (index === -1) return null;
    carts[index] = { ...carts[index], ...data };
    return carts[index];
  }

  async create(cart) {
    carts.push(cart);
    return cart;
  }

  async delete(id) {
    const index = carts.findIndex(c => c.id === Number(id));
    if (index === -1) return false;
    carts.splice(index, 1);
    return true;
  }
}

module.exports = CartDAO;
