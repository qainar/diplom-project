const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function (req, res, next) {
        if(req.method === "OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return next(ApiError.unauthorized('Unauthorized'))
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if( decoded.role !== role) {
                return next(ApiError.forbiddsen('You dont have access))))'))
            }
            req.user = decoded
            next()
        } catch (e) {
            return next(ApiError.unauthorized('Unauthorized'))
        }
    }
}


    