const Router = require('express')
const router = new Router()
const TicketController = require('../controllers/TicketController')

router.get('/', TicketController.getTickets);
router.post('/create', TicketController.createTicket);

module.exports = router