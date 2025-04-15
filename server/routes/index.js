const Router = require('express')
const router = new Router();

const AppoitmentRouter = require('./AppoitmentRouter')
const DiagnosisRouter = require('./DiagnosisRouter')
const EmployeeRouter = require('./EmployeeRouter')
const PatienceRouter = require('./PatienceRouter')
const ReportRouter = require('./ReportRouter')
const TicketRouter = require('./TicketRouter')

router.use('/appoitmnet',AppoitmentRouter)
router.use('/diagnosis',DiagnosisRouter)
router.use('/employee',EmployeeRouter)
router.use('/patience',PatienceRouter)
router.use('/report',ReportRouter)
router.use('/ticket',TicketRouter)

module.exports = router;