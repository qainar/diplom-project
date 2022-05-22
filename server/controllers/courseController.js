const uuid = require('uuid')
const path = require('path')
const { Course, CourseInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
class CourseController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info, small } = req.body
            const { img } = req.files
            const {infoImg} = req.files
            let filename = uuid.v4() + '.jpg'
            let infofile = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            // infoImg.mv(path.resolve(__dirname, '..', 'static', infofile))
            const course = await Course.create({ name, price, small, brandId, typeId, img: filename })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    CourseInfo.create({
                        title: i.title,
                        description: i.description,
                        courseId: course.id,
                        infoImg: filename
                    })
                )
            }



            return res.json(course)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = limit * page - limit
        let courses
        if (!brandId && !typeId) {
            courses = await Course.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            courses = await Course.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (!brandId && typeId) {
            courses = await Course.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && typeId) {
            courses = await Course.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }
        return res.json(courses)
    }



    async getOne(req, res) {
        const { id } = req.params
        const course = await Course.findOne(
            {
                where: { id },
                include: [{ model: CourseInfo, as: 'info' }]
            }
        )
        return res.json(course)
    }

    async DeleteOne(req, res) {
        const { id } = req.params
        const course = await Course.delete({
            where: { id }
        })
        console.log(typeof id)
        return res.json('delete' + course)
        console.log('kotakabas')
    }

}

module.exports = new CourseController()