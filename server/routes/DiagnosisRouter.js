const Router = require('express')
const router = new Router()
const DiagnosisController = require('../controllers/DiagnosisController');

router.get('/', DiagnosisController.getDiagnosis);
router.post('/create', DiagnosisController.createDiagnose);

module.exports = router