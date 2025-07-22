const UserDAO = require('../daos/User.dao.js');
const userDAO = new UserDAO();

class UserRepository {
  constructor() {
    this.create = userDAO.create.bind(userDAO);
    this.getByEmail = userDAO.getByEmail.bind(userDAO);
    this.getById = userDAO.getById.bind(userDAO);
  }
}

module.exports = UserRepository;
