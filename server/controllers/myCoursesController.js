const uuid = require('uuid')
const path = require('path')
const {Course, CourseInfo, BasketCourse} = require('../models/models')
const ApiError = require('../error/ApiError')

class MyCoursesController{
    async getAllCourseId(req, res) {
        const {data} = req.body
        let array = []

        for (const id of data) {
            let courses = await Course.findAll({
                where: {id}
            })

            for(const course of courses){
                array.push(course)
            }
        }
        return res.json(array)

    }

    async deleteOneCourse(req, res){
        const {id} = req.params
        if(id){
            const remove = await BasketCourse.destroy({
                where: {id}
            })
            console.log(remove)
            return res.json('removed')
        }
    }
}

module.exports = new MyCoursesController()

