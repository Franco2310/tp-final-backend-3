const { UserModel } = require('../models/User.model.js');

class UserDAO {
  create(data) {
    return UserModel.create(data);
  }

  getByEmail(email) {
    return UserModel.findOne({ email });
  }

  getById(id) {
    return UserModel.findById(id);
  }
}

module.exports = UserDAO;
