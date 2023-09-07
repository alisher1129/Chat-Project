const { model } = require("mongoose");
const { CreateUser, VerifyEmail } = require("../services/userService");

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

    async verifyEmail(req, res) {
        try {
            const Email = await VerifyEmail(req)
            res.send("Thanks For Verification")
        }
        catch
        {
            (error) => console.log(error)
        }
    }
}

module.exports = new userController();