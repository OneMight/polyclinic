const Router = require('express')
const router = new Router()

const PatienceController = require('../controllers/PatienceController');

router.get('/', PatienceController.getPatiences);
router.post('/create', PatienceController.createPatience);

module.exports = router