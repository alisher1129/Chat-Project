const User = require('../models/userModel');
const jwt = require('jsonwebtoken');



class LoginService {
    async loginUser(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            if (user.password === req.body.password) {
                const token = jwt.sign({ id: user._id }, 'secret123',
                    {
                        expiresIn: 3600
                    })
                return { user, token: token };

            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginService();