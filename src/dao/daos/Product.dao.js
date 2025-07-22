const { ProductModel } = require('../models/Product.model.js');

class ProductDAO {
  create(data) {
    return ProductModel.create(data);
  }

  getById(id) {
    return ProductModel.findById(id);
  }

  update(id, data) {
    return ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return ProductModel.findByIdAndDelete(id);
  }

  getAll() {
    return ProductModel.find();
  }
}

module.exports = ProductDAO;
