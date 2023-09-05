const { model } = require("mongoose");
const { CreateUser } = require("../services/userService");

class userController {
    async createUsers(req, res) {
        try {
            console.log(req.body);
            const result = await CreateUser(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new userController();