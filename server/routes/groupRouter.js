const router = require('express').Router()
const groupController = require('../controllers/groupController')
router.post('/', groupController.create)
router.get('/', groupController.getAll)

module.exports = router