const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { user, Basket } = require('../models/models')

class UserController {
    async registration(req, res) {}

    async login(req, res) {}

    async check(req, res, next) {
        const { id } = req.query
        if (!id) {
            next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()
