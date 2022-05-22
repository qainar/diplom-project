const router = require('express').Router()
const newController = require('../controllers/newsController')
const checkRole = require('../middleware/checkRoleMiddleware')
router.post('/', checkRole('ADMIN'), newController.create)
router.get('/', newController.get)

module.exports = router