const TicketDAO = require('../daos/Ticket.dao.js');
const ticketDAO = new TicketDAO();

class TicketRepository {
  constructor() {
    this.create = ticketDAO.create.bind(ticketDAO);
    this.getById = ticketDAO.getById.bind(ticketDAO);
  }
}

module.exports = TicketRepository;
