const router = require('express').Router()
const myCourseController = require('../controllers/myCoursesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', myCourseController.getAllCourseId)
router.delete('/:id', myCourseController.deleteOneCourse)


module.exports = router