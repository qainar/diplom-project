const {Basket, Course, CourseInfo, BasketCourse} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require("uuid");
const path = require("path");
class basketCourseController {

    async create (req, res, next){
        try {
            let {basketId, courseId} = req.body
            const basketCourse = await BasketCourse.create({basketId, courseId})
            return res.json(basketCourse)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res){
        const {basketId} = req.params
        const basket = await BasketCourse.findAll(
            {
                where : {basketId},
            }
        )
        return res.json(basket)
    }

}

module.exports = new basketCourseController()