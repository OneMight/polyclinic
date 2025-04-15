const Router = require('express')
const router = new Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/', EmployeeController.getEmployees);
router.post('/create', EmployeeController.createEmployee);

module.exports = router