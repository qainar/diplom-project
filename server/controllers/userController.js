const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
const bcrypt = require('bcrypt')

const generateJwt = (id, name ,email, role) => {
    return jwt.sign(
        {id, name ,email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}



class UserController {
    async registration(req, res, next) {
        let {email, name, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email and password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this name exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)

        const user = await User.create({email, name ,role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id,user.email, user.role)
        return res.json(token)
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password i think motherfucker'))
        }
        const token = generateJwt(user.id, user.name ,user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.name ,req.user.email, req.user.role)
        return res.json({token})
    }

    async getOne(req, res, next){
        const {id} = req.params
        const user = await User.findOne(
            { where: {id}}
        )
        return res.json(user)
    }





}
module.exports = new UserController()