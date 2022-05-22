const {Groups} = require('../models/models')
class GroupsController{
    async create (req, res) {
        const {name} = req.body
        const group = await Groups.create({name})
        return res.json(group)
    }

    async getAll (req, res) {
        const groups = await Groups.findAll()
        return res.json(groups)
    }
}

module.exports = new GroupsController()