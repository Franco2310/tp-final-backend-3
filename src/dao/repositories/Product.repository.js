const ProductDAO = require('../daos/Product.dao.js');
const productDAO = new ProductDAO();

class ProductRepository {
  constructor() {
    this.create = productDAO.create.bind(productDAO);
    this.getById = productDAO.getById.bind(productDAO);
    this.update = productDAO.update.bind(productDAO);
    this.delete = productDAO.delete.bind(productDAO);
    this.getAll = productDAO.getAll.bind(productDAO);
  }
}

module.exports = ProductRepository;
