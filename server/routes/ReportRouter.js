const Router = require('express')
const router = new Router()
const ReportController = require('../controllers/ReportController');

router.get('/', ReportController.getReports);
// router.post('/create',ReportController.createReport);

module.exports = router