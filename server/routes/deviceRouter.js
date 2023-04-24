const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const deviceRole = require('../middleware/checkRoleMiddleware')

router.post('/', deviceRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router