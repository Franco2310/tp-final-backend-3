const { TicketModel } = require('../models/Ticket.model.js');

class TicketDAO {
  create(data) {
    return TicketModel.create(data);
  }

  getById(id) {
    return TicketModel.findById(id);
  }
}

module.exports = TicketDAO;
