const router = require('express').Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/:userId', basketController.getOne)



module.exports = router