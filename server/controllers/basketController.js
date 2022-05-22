const {Basket, Course, CourseInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
class basketController {

    async getOne (req, res){
        const {userId} = req.params
        const basket = await Basket.findOne(
            {
                where : {userId},
            }
        )
        return res.json(basket)
    }

}

module.exports = new basketController()