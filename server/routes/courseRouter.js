const router = require('express').Router()
const courseController = require('../controllers/courseController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),courseController.create)
router.get('/', courseController.getAll)
router.get('/:id', courseController.getOne)
router.delete('/:id', courseController.DeleteOne)


module.exports = router