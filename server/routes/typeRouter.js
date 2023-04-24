const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const typeRole = require('../middleware/checkRoleMiddleware')

router.post('/', typeRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/',)

module.exports = router