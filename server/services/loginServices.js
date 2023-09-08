const User = require('../models/userModel');


class LoginService {
    async loginUser(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            if(user.password === req.body.password) {
                return user;
            }
            else{
                return false;
            }
        } 
        catch (error) {
            console.log(error);
        }
    }  
}

module.exports = new LoginService();