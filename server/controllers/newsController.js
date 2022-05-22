const {News} = require("../models/models");
const ApiError = require('../error/ApiError')
class NewsController{
    async create(req,res,next){
        try{
            let {title, description, text} = req.body
            const data = await News.create({title, description, text})
            return res.json(data)
        }catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async get(req, res){
        const news = await News.findAll()
        return res.json(news)
    }
}

module.exports = new NewsController()