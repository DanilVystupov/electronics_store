const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const brandRole = require('../middleware/checkRoleMiddleware')

router.post('/', brandRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)
router.delete('/',)

module.exports = router