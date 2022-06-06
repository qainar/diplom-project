const router = require('express').Router()
const courseController = require('../controllers/courseController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/name', courseController.getName)
router.post('/', checkRole('ADMIN'),courseController.create)
router.get('/', courseController.getAll)
router.get('/:id', courseController.getOne)
// router.get('/', courseController.getName)
router.delete('/:id', courseController.DeleteOne)


module.exports = router