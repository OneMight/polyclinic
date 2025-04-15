const Router = require('express')
const router = new Router()
const AppoitmentController = require('../controllers/AppoitmentController');

router.get('/', AppoitmentController.getAppoitment);
router.post('/create', AppoitmentController.createAppoitment);
module.exports = router