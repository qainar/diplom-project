const router = require('express').Router()
const basketCourseController = require('../controllers/basketCourseController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/' ,basketCourseController.create)
router.get('/:basketId', basketCourseController.getAll)



module.exports = router