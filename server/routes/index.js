const router = require('express').Router()
const courseRouter = require('./courseRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const groupRouter = require('./groupRouter')
const basketRouter = require('./basketRouter')
const basketCourseRouter = require('./basketCourseRouter')
const myCourse = require('./my-courses')
const newsRouter = require('./newsRouter')



router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/course', courseRouter)
router.use('/group', groupRouter)
router.use('/basket', basketRouter)
router.use('/basket-course', basketCourseRouter)
router.use('/my-courses', myCourse)
router.use('/news', newsRouter)



module.exports = router